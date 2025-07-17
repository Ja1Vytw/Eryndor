package com.eryndor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "character_classes")
public class CharacterClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String heroHistory;

    private String damageType = "Físico";
    private String primaryRole = "Dano";
    private String secondaryRole = "Suporte";

    private int baseHp = 10;
    private int baseMp = 0;
    private int hpPerLevel = 5;
    private int mpPerLevel = 2;

    @Column(columnDefinition = "TEXT")
    private String specialPassive;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getHeroHistory() { return heroHistory; }
    public void setHeroHistory(String heroHistory) { this.heroHistory = heroHistory; }

    public String getDamageType() { return damageType; }
    public void setDamageType(String damageType) { this.damageType = damageType; }

    public String getPrimaryRole() { return primaryRole; }
    public void setPrimaryRole(String primaryRole) { this.primaryRole = primaryRole; }

    public String getSecondaryRole() { return secondaryRole; }
    public void setSecondaryRole(String secondaryRole) { this.secondaryRole = secondaryRole; }

    public int getBaseHp() { return baseHp; }
    public void setBaseHp(int baseHp) { this.baseHp = baseHp; }

    public int getBaseMp() { return baseMp; }
    public void setBaseMp(int baseMp) { this.baseMp = baseMp; }

    public int getHpPerLevel() { return hpPerLevel; }
    public void setHpPerLevel(int hpPerLevel) { this.hpPerLevel = hpPerLevel; }

    public int getMpPerLevel() { return mpPerLevel; }
    public void setMpPerLevel(int mpPerLevel) { this.mpPerLevel = mpPerLevel; }

    public String getSpecialPassive() { return specialPassive; }
    public void setSpecialPassive(String specialPassive) { this.specialPassive = specialPassive; }
} 