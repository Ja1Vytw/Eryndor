package com.eryndor.backend.service;

import com.eryndor.backend.model.Character;
import com.eryndor.backend.model.User;
import com.eryndor.backend.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterService {
    @Autowired
    private CharacterRepository characterRepository;

    public Character saveCharacter(Character character) {
        return characterRepository.save(character);
    }

    public List<Character> findByOwner(User owner) {
        return characterRepository.findByOwner(owner);
    }

    public List<Character> findAll() {
        return characterRepository.findAll();
    }

    public Optional<Character> findByNameAndOwner(String name, User owner) {
        return characterRepository.findByNameAndOwner(name, owner);
    }

    public Optional<Character> findById(Long id) {
        return characterRepository.findById(id);
    }

    public void deleteCharacter(Long id) {
        characterRepository.deleteById(id);
    }
} 