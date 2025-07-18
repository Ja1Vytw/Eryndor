package com.eryndor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "equipment")
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String type = "Arma"; // Arma, Armadura, Acessório, Consumível
    private String category = "Espada"; // Espada, Arco, Armadura Leve, etc.
    private String rarity = "Comum"; // Comum, Incomum, Raro, Épico, Lendário
    private String slot = "Mão"; // Mão, Cabeça, Torso, Pernas, Pés, Acessório

    private int level = 1;
    private int weight = 1;
    private int value = 10;

    private String damageType = "Físico";
    private String damageFormula = "1d6";
    private int armorBonus = 0;
    private int attackBonus = 0;

    @Column(columnDefinition = "TEXT")
    private String specialEffects;

    @Column(columnDefinition = "TEXT")
    private String requirements;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getRarity() { return rarity; }
    public void setRarity(String rarity) { this.rarity = rarity; }

    public String getSlot() { return slot; }
    public void setSlot(String slot) { this.slot = slot; }

    public int getLevel() { return level; }
    public void setLevel(int level) { this.level = level; }

    public int getWeight() { return weight; }
    public void setWeight(int weight) { this.weight = weight; }

    public int getValue() { return value; }
    public void setValue(int value) { this.value = value; }

    public String getDamageType() { return damageType; }
    public void setDamageType(String damageType) { this.damageType = damageType; }

    public String getDamageFormula() { return damageFormula; }
    public void setDamageFormula(String damageFormula) { this.damageFormula = damageFormula; }

    public int getArmorBonus() { return armorBonus; }
    public void setArmorBonus(int armorBonus) { this.armorBonus = armorBonus; }

    public int getAttackBonus() { return attackBonus; }
    public void setAttackBonus(int attackBonus) { this.attackBonus = attackBonus; }

    public String getSpecialEffects() { return specialEffects; }
    public void setSpecialEffects(String specialEffects) { this.specialEffects = specialEffects; }

    public String getRequirements() { return requirements; }
    public void setRequirements(String requirements) { this.requirements = requirements; }
} 