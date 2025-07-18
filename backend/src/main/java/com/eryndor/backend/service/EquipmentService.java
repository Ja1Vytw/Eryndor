package com.eryndor.backend.service;

import com.eryndor.backend.model.Equipment;
import com.eryndor.backend.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    public List<Equipment> getAllEquipment() {
        return equipmentRepository.findAll();
    }

    public List<Equipment> findByType(String type) {
        return equipmentRepository.findByType(type);
    }

    public List<Equipment> findByRarity(String rarity) {
        return equipmentRepository.findByRarity(rarity);
    }

    public List<Equipment> findByCategory(String category) {
        return equipmentRepository.findByCategory(category);
    }

    public List<Equipment> findByTypeAndRarity(String type, String rarity) {
        return equipmentRepository.findByTypeAndRarity(type, rarity);
    }

    public List<Equipment> findByLevelLessThanEqual(int level) {
        return equipmentRepository.findByLevelLessThanEqual(level);
    }

    public Optional<Equipment> findById(Long id) {
        return equipmentRepository.findById(id);
    }

    public Equipment saveEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }
} 