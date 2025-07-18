package com.eryndor.backend.controller;

import com.eryndor.backend.model.Equipment;
import com.eryndor.backend.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/equipment")
public class EquipmentController {
    @Autowired
    private EquipmentService equipmentService;

    @GetMapping
    public ResponseEntity<List<Equipment>> getAllEquipment() {
        List<Equipment> equipment = equipmentService.getAllEquipment();
        return ResponseEntity.ok(equipment);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Equipment> getEquipmentById(@PathVariable Long id) {
        Optional<Equipment> equipment = equipmentService.findById(id);
        return equipment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Equipment>> getEquipmentByType(@PathVariable String type) {
        List<Equipment> equipment = equipmentService.findByType(type);
        return ResponseEntity.ok(equipment);
    }

    @GetMapping("/rarity/{rarity}")
    public ResponseEntity<List<Equipment>> getEquipmentByRarity(@PathVariable String rarity) {
        List<Equipment> equipment = equipmentService.findByRarity(rarity);
        return ResponseEntity.ok(equipment);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Equipment>> getEquipmentByCategory(@PathVariable String category) {
        List<Equipment> equipment = equipmentService.findByCategory(category);
        return ResponseEntity.ok(equipment);
    }

    @GetMapping("/level/{level}")
    public ResponseEntity<List<Equipment>> getEquipmentByLevel(@PathVariable int level) {
        List<Equipment> equipment = equipmentService.findByLevelLessThanEqual(level);
        return ResponseEntity.ok(equipment);
    }

    @PostMapping
    public ResponseEntity<Equipment> createEquipment(@RequestBody Equipment equipment) {
        Equipment saved = equipmentService.saveEquipment(equipment);
        return ResponseEntity.ok(saved);
    }
} 