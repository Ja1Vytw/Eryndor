package com.eryndor.backend.repository;

import com.eryndor.backend.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    Optional<Skill> findByName(String name);
    List<Skill> findByRelatedAttribute(String relatedAttribute);
} 