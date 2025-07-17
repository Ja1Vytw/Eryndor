package com.eryndor.backend.repository;

import com.eryndor.backend.model.Character;
import com.eryndor.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface CharacterRepository extends JpaRepository<Character, Long> {
    List<Character> findByOwner(User owner);
    Optional<Character> findByNameAndOwner(String name, User owner);
} 