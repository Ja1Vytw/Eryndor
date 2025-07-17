package com.eryndor.backend.controller;

import com.eryndor.backend.model.Character;
import com.eryndor.backend.model.User;
import com.eryndor.backend.service.CharacterService;
import com.eryndor.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/characters")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Character> createCharacter(@RequestBody Character character, @RequestParam Long userId) {
        Optional<User> user = userService.findById(userId);
        if (user.isPresent()) {
            character.setOwner(user.get());
            Character saved = characterService.saveCharacter(character);
            return ResponseEntity.ok(saved);
        }
        return ResponseEntity.badRequest().build();
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