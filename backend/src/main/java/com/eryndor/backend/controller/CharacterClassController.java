package com.eryndor.backend.controller;

import com.eryndor.backend.model.CharacterClass;
import com.eryndor.backend.service.CharacterClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/classes")
public class CharacterClassController {
    @Autowired
    private CharacterClassService characterClassService;

    @GetMapping
    public ResponseEntity<List<CharacterClass>> getAllClasses() {
        List<CharacterClass> classes = characterClassService.getAllClasses();
        return ResponseEntity.ok(classes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CharacterClass> getClassById(@PathVariable Long id) {
        Optional<CharacterClass> characterClass = characterClassService.findById(id);
        return characterClass.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<CharacterClass> getClassByName(@PathVariable String name) {
        Optional<CharacterClass> characterClass = characterClassService.findByName(name);
        return characterClass.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<CharacterClass> createClass(@RequestBody CharacterClass characterClass) {
        CharacterClass saved = characterClassService.saveClass(characterClass);
        return ResponseEntity.ok(saved);
    }
} 