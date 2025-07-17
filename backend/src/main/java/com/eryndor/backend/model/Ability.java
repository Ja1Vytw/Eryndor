package com.eryndor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "abilities")
public class Ability {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne
    @JoinColumn(name = "character_class_id")
    private CharacterClass characterClass;

    private String type = "Inicial"; // Inicial, Avançada
    private int requiredLevel = 1;
    private int mpCost = 0;
    private int cooldown = 0;

    private String damageType = "Físico";
    private String damageFormula = "1d6";
    private int range = 1;
    private int area = 0;

    @Column(columnDefinition = "TEXT")
    private String effects;

    @Column(columnDefinition = "TEXT")
    private String conditions;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public CharacterClass getCharacterClass() { return characterClass; }
    public void setCharacterClass(CharacterClass characterClass) { this.characterClass = characterClass; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public int getRequiredLevel() { return requiredLevel; }
    public void setRequiredLevel(int requiredLevel) { this.requiredLevel = requiredLevel; }

    public int getMpCost() { return mpCost; }
    public void setMpCost(int mpCost) { this.mpCost = mpCost; }

    public int getCooldown() { return cooldown; }
    public void setCooldown(int cooldown) { this.cooldown = cooldown; }

    public String getDamageType() { return damageType; }
    public void setDamageType(String damageType) { this.damageType = damageType; }

    public String getDamageFormula() { return damageFormula; }
    public void setDamageFormula(String damageFormula) { this.damageFormula = damageFormula; }

    public int getRange() { return range; }
    public void setRange(int range) { this.range = range; }

    public int getArea() { return area; }
    public void setArea(int area) { this.area = area; }

    public String getEffects() { return effects; }
    public void setEffects(String effects) { this.effects = effects; }

    public String getConditions() { return conditions; }
    public void setConditions(String conditions) { this.conditions = conditions; }
} 