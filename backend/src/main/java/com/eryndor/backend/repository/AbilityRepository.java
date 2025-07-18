package com.eryndor.backend.repository;

import com.eryndor.backend.model.Ability;
import com.eryndor.backend.model.CharacterClass;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AbilityRepository extends JpaRepository<Ability, Long> {
    List<Ability> findByCharacterClass(CharacterClass characterClass);
    List<Ability> findByCharacterClassAndType(CharacterClass characterClass, String type);
    List<Ability> findByRequiredLevelLessThanEqual(int level);
} 