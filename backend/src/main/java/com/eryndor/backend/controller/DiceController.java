package com.eryndor.backend.controller;

import com.eryndor.backend.service.DiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dice")
public class DiceController {
    @Autowired
    private DiceService diceService;

    @PostMapping("/roll")
    public ResponseEntity<Map<String, Object>> rollDice(@RequestParam String formula) {
        Map<String, Object> response = new HashMap<>();
        
        try {
            int result = diceService.rollDice(formula);
            response.put("formula", formula);
            response.put("result", result);
            response.put("success", true);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", "Fórmula inválida: " + formula);
        }
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/d20")
    public ResponseEntity<Map<String, Object>> rollD20(@RequestParam(defaultValue = 0) int modifier) {
        Map<String, Object> response = new HashMap<>();
        
        int result = diceService.rollD20WithModifier(modifier);
        boolean isCritical = diceService.isCriticalHit(result);
        boolean isFailure = diceService.isCriticalFailure(result);
        
        response.put("roll", result);
        response.put("modifier", modifier);
        response.put("total", result);
        response.put("critical", isCritical);
        response.put("failure", isFailure);
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/advantage")
    public ResponseEntity<Map<String, Object>> rollWithAdvantage() {
        Map<String, Object> response = new HashMap<>();
        
        int result = diceService.rollWithAdvantage();
        response.put("result", result);
        response.put("type", "advantage");
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/disadvantage")
    public ResponseEntity<Map<String, Object>> rollWithDisadvantage() {
        Map<String, Object> response = new HashMap<>();
        
        int result = diceService.rollWithDisadvantage();
        response.put("result", result);
        response.put("type", "disadvantage");
        
        return ResponseEntity.ok(response);
    }

    @PostMapping("/damage")
    public ResponseEntity<Map<String, Object>> calculateDamage(
            @RequestParam String formula,
            @RequestParam(defaultValue = 0) int modifier) {
        Map<String, Object> response = new HashMap<>();
        
        int damage = diceService.calculateDamage(formula, modifier);
        response.put("formula", formula);
        response.put("modifier", modifier);
        response.put("damage", damage);
        
        return ResponseEntity.ok(response);
    }
} 