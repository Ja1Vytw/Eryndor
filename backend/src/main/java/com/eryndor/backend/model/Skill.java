package com.eryndor.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "skills")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String relatedAttribute; // Força, Destreza, Constituição, Inteligência, Sabedoria, Carisma

    @Column(columnDefinition = "TEXT")
    private String usage; // Como a perícia é usada

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getRelatedAttribute() { return relatedAttribute; }
    public void setRelatedAttribute(String relatedAttribute) { this.relatedAttribute = relatedAttribute; }

    public String getUsage() { return usage; }
    public void setUsage(String usage) { this.usage = usage; }
} 