package com.eryndor.backend.service;

import org.springframework.stereotype.Service;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class DiceService {
    private final Random random = new Random();

    public int rollDice(String formula) {
        // Padrão para fórmulas como 2d6+3, 01   Pattern pattern = Pattern.compile("(\\d+)?d(\\d+)([+-]\\d+)?");
        Pattern pattern = Pattern.compile("(\\d+)?d(\\d+)([+-]\\d+)?");
        Matcher matcher = pattern.matcher(formula.toLowerCase());

        if (matcher.find()) {
            int quantity = matcher.group(1) != null ? Integer.parseInt(matcher.group(1)) : 1;
            int sides = Integer.parseInt(matcher.group(2));
            int modifier = matcher.group(3) != null ? Integer.parseInt(matcher.group(3)) : 0;

            int result = 0;
            for (int i = 0; i < quantity; i++) {
                result += random.nextInt(sides) +1;
            }
            return result + modifier;
        }
        return 0;
    }

    public int rollD20() {
        return random.nextInt(20) + 1;
    }

    public int rollD20WithModifier(int modifier) {
        return rollD20() + modifier;
    }

    public boolean isCriticalHit(int roll) {
        return roll == 20;
    }

    public boolean isCriticalFailure(int roll) {
        return roll == 1;
    }

    public int rollWithAdvantage() {
        int roll1 = rollD20();
        int roll2 = rollD20();
        return Math.max(roll1, roll2);
    }

    public int rollWithDisadvantage() {
        int roll1 = rollD20();
        int roll2 = rollD20();
        return Math.min(roll1, roll2);
    }

    public int calculateDamage(String damageFormula, int strengthModifier) {
        int baseDamage = rollDice(damageFormula);
        return Math.max(1, baseDamage + strengthModifier);
    }

    public int calculateSpellDamage(String damageFormula, int intelligenceModifier) {
        int baseDamage = rollDice(damageFormula);
        return Math.max(1, baseDamage + intelligenceModifier);
    }
} 