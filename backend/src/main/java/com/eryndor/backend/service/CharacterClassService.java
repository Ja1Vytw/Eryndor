package com.eryndor.backend.service;

import com.eryndor.backend.model.CharacterClass;
import com.eryndor.backend.repository.CharacterClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterClassService {
    @Autowired
    private CharacterClassRepository characterClassRepository;

    public List<CharacterClass> getAllClasses() {
        return characterClassRepository.findAll();
    }

    public Optional<CharacterClass> findByName(String name) {
        return characterClassRepository.findByName(name);
    }

    public Optional<CharacterClass> findById(Long id) {
        return characterClassRepository.findById(id);
    }

    public CharacterClass saveClass(CharacterClass characterClass) {
        return characterClassRepository.save(characterClass);
    }
} 