package com.eryndor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "races")
public class Race {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private int strengthBonus = 0;
    private int dexterityBonus = 0;
    private int constitutionBonus = 0;
    private int intelligenceBonus = 0;
    private int wisdomBonus = 0;
    private int charismaBonus = 0;

    @Column(columnDefinition = "TEXT")
    private String specialAbility;

    @Column(columnDefinition = "TEXT")
    private String passiveAbility;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getStrengthBonus() { return strengthBonus; }
    public void setStrengthBonus(int strengthBonus) { this.strengthBonus = strengthBonus; }

    public int getDexterityBonus() { return dexterityBonus; }
    public void setDexterityBonus(int dexterityBonus) { this.dexterityBonus = dexterityBonus; }

    public int getConstitutionBonus() { return constitutionBonus; }
    public void setConstitutionBonus(int constitutionBonus) { this.constitutionBonus = constitutionBonus; }

    public int getIntelligenceBonus() { return intelligenceBonus; }
    public void setIntelligenceBonus(int intelligenceBonus) { this.intelligenceBonus = intelligenceBonus; }

    public int getWisdomBonus() { return wisdomBonus; }
    public void setWisdomBonus(int wisdomBonus) { this.wisdomBonus = wisdomBonus; }

    public int getCharismaBonus() { return charismaBonus; }
    public void setCharismaBonus(int charismaBonus) { this.charismaBonus = charismaBonus; }

    public String getSpecialAbility() { return specialAbility; }
    public void setSpecialAbility(String specialAbility) { this.specialAbility = specialAbility; }

    public String getPassiveAbility() { return passiveAbility; }
    public void setPassiveAbility(String passiveAbility) { this.passiveAbility = passiveAbility; }
} 