package com.eryndor.backend.controller;

import com.eryndor.backend.model.Character;
import com.eryndor.backend.model.CharacterClass;
import com.eryndor.backend.model.Race;
import com.eryndor.backend.model.User;
import com.eryndor.backend.service.CharacterService;
import com.eryndor.backend.service.UserService;
import com.eryndor.backend.repository.RaceRepository;
import com.eryndor.backend.repository.CharacterClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "*")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    @Autowired
    private UserService userService;

    @Autowired
    private RaceRepository raceRepository;

    @Autowired
    private CharacterClassRepository characterClassRepository;

    public static class CharacterRequest {
        private String name;
        private String race;
        private String characterClass;
        private int level = 1;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
        public String getRace() { return race; }
        public void setRace(String race) { this.race = race; }
        public String getCharacterClass() { return characterClass; }
        public void setCharacterClass(String characterClass) { this.characterClass = characterClass; }
        public int getLevel() { return level; }
        public void setLevel(int level) { this.level = level; }
    }

    @GetMapping
    public ResponseEntity<List<Character>> getAllCharacters() {
        List<Character> characters = characterService.findAll();
        return ResponseEntity.ok(characters);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> createCharacter(@RequestBody CharacterRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            System.out.println("Criando personagem: " + request.getName());
            System.out.println("Raça solicitada: " + request.getRace());
            System.out.println("Classe solicitada: " + request.getCharacterClass());
            
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();
            System.out.println("Usuário autenticado: " + username);
            
            Optional<User> user = userService.findByUsername(username);
            if (user.isEmpty()) {
                response.put("success", false);
                response.put("error", "Usuário não encontrado");
                return ResponseEntity.badRequest().body(response);
            }

            // Buscar raça
            Optional<Race> raceOpt = raceRepository.findByName(request.getRace());
            System.out.println("Raça encontrada: " + (raceOpt.isPresent() ? raceOpt.get().getName() : "NÃO ENCONTRADA"));
            if (raceOpt.isEmpty()) {
                response.put("success", false);
                response.put("error", "Raça não encontrada: " + request.getRace());
                return ResponseEntity.badRequest().body(response);
            }

            // Buscar classe
            System.out.println("Buscando classe: " + request.getCharacterClass());
            System.out.println("Todas as classes no banco:");
            characterClassRepository.findAll().forEach(c -> System.out.println("- " + c.getName() + " (ID: " + c.getId() + ")"));
            
            Optional<CharacterClass> classOpt = characterClassRepository.findByName(request.getCharacterClass());
            System.out.println("Classe encontrada: " + (classOpt.isPresent() ? classOpt.get().getName() : "NÃO ENCONTRADA"));
            if (classOpt.isPresent()) {
                System.out.println("ID da classe: " + classOpt.get().getId());
                System.out.println("Nome da classe: " + classOpt.get().getName());
            }
            if (classOpt.isEmpty()) {
                response.put("success", false);
                response.put("error", "Classe não encontrada: " + request.getCharacterClass());
                return ResponseEntity.badRequest().body(response);
            }

            // Criar personagem
            Character character = new Character();
            character.setName(request.getName());
            character.setRace(raceOpt.get());
            character.setCharacterClass(classOpt.get());
            character.setLevel(request.getLevel());
            character.setOwner(user.get());

            System.out.println("Personagem criado:");
            System.out.println("- Nome: " + character.getName());
            System.out.println("- Raça ID: " + character.getRace().getId());
            System.out.println("- Classe ID: " + character.getCharacterClass().getId());
            System.out.println("- Usuário ID: " + character.getOwner().getId());

            System.out.println("Salvando personagem...");
            Character saved = characterService.saveCharacter(character);
            System.out.println("Personagem salvo com ID: " + saved.getId());
            
            response.put("success", true);
            response.put("message", "Personagem criado com sucesso!");
            response.put("character", saved);
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            System.out.println("Erro ao criar personagem: " + e.getMessage());
            e.printStackTrace();
            response.put("success", false);
            response.put("error", "Erro ao criar personagem: " + e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/my-characters")
    public ResponseEntity<List<Character>> getMyCharacters() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        
        Optional<User> user = userService.findByUsername(username);
        if (user.isPresent()) {
            List<Character> characters = characterService.findByOwner(user.get());
            return ResponseEntity.ok(characters);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Character>> getCharactersByUser(@PathVariable Long userId) {
        Optional<User> user = userService.findById(userId);
        if (user.isPresent()) {
            List<Character> characters = characterService.findByOwner(user.get());
            return ResponseEntity.ok(characters);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Character> getCharacter(@PathVariable Long id) {
        Optional<Character> character = characterService.findById(id);
        return character.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCharacter(@PathVariable Long id) {
        characterService.deleteCharacter(id);
        return ResponseEntity.ok("Personagem removido com sucesso");
    }
} 