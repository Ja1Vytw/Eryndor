package com.eryndor.backend.repository;

import com.eryndor.backend.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {
    List<Equipment> findByType(String type);
    List<Equipment> findByRarity(String rarity);
    List<Equipment> findByCategory(String category);
    List<Equipment> findByTypeAndRarity(String type, String rarity);
    List<Equipment> findByLevelLessThanEqual(int level);
} 