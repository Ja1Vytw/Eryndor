package com.eryndor.backend.service;

import com.eryndor.backend.model.Skill;
import com.eryndor.backend.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SkillService {
    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Optional<Skill> findByName(String name) {
        return skillRepository.findByName(name);
    }

    public List<Skill> findByRelatedAttribute(String attribute) {
        return skillRepository.findByRelatedAttribute(attribute);
    }

    public Optional<Skill> findById(Long id) {
        return skillRepository.findById(id);
    }

    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }
} 