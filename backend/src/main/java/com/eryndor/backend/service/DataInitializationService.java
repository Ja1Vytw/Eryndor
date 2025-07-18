package com.eryndor.backend.service;

import com.eryndor.backend.model.*;
import com.eryndor.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DataInitializationService implements CommandLineRunner {
    @Autowired
    private RaceRepository raceRepository;

    @Autowired
    private CharacterClassRepository characterClassRepository;

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public void run(String... args) throws Exception {
        initializeRaces();
        initializeClasses();
        initializeEquipment();
        initializeSkills();
    }

    private void initializeRaces() {
        if (raceRepository.count() == 0) {
            List<Race> races = Arrays.asList(
                createRace("Humano", "Adaptáveis e versáteis", "+1 em todos os atributos", "Versatilidade Humana"),
                createRace("Elfo", "Graciais e mágicos", "+2 Destreza, +1 Inteligência", "Visão no Escuro, Imunidade ao Sono"),
                createRace("Anão", "Resistentes e fortes", "+2 Constituição, +1 Força", "Visão no Escuro, Resistência a Veneno"),
                createRace("Halfling", "Pequenos e ágeis", "+2 Destreza, +1 Carisma", "Sorte, Agilidade Natural"),
                createRace("Orc", "Ferozes e poderosos", "+2 Força, +1 Constituição", "Agressividade, Resistência Física"),
                createRace("Tiefling", "Místicos e carismáticos", "+2 Carisma, +1 Inteligência", "Resistência ao Fogo, Herança Infernal")
            );
            raceRepository.saveAll(races);
        }
    }

    private void initializeClasses() {
        if (characterClassRepository.count() == 0) {
            List<CharacterClass> classes = Arrays.asList(
                createClass("Cruzado", "Guerreiro sagrado", "Combate corpo a corpo, Proteção divina", "Força, Constituição"),
                createClass("Mago", "Conjurador arcano", "Magias ofensivas, Conhecimento arcano", "Inteligência, Sabedoria"),
                createClass("Ladino", "Especialista furtivo", "Furtividade, Habilidades sociais", "Destreza, Inteligência"),
                createClass("Andarilho", "Explorador da natureza", "Sobrevivência, Combate à distância", "Destreza, Sabedoria"),
                createClass("Bardo", "Artista inspirador", "Inspiração, Magias de suporte", "Carisma, Destreza"),
                createClass("Necromante", "Mestre da morte", "Necromancia, Controle de mortos-vivos", "Inteligência, Carisma")
            );
            characterClassRepository.saveAll(classes);
        }
    }

    private void initializeEquipment() {
        if (equipmentRepository.count() == 0) {
            List<Equipment> equipment = Arrays.asList(
                createEquipment("Espada Longa", "Espada de uma mão", "Arma", "Espada", "Comum", "Mão", 1, 3, 15, "Físico", "1d8", 0, 0, null, null),
                createEquipment("Arco Curto", "Arco para combate à distância", "Arma", "Arco", "Comum", "Mão", 1, 2, 25, "Físico", "1d6", 0, 0, null, null),
                createEquipment("Armadura de Couro", "Armadura leve de couro", "Armadura", "Armadura Leve", "Comum", "Torso", 1, 10, 10, null, null, 2, 0, null, null),
                createEquipment("Poção de Cura", "Restaura pontos de vida", "Consumível", "Poção", "Comum", "Acessório", 1, 0, 50, null, null, 0, 0, "Cura 2d4 pontos de vida", null),
                createEquipment("Espada Flamejante", "Espada que causa dano de fogo", "Arma", "Espada", "Raro", "Mão", 5, 3, 500, "Fogo", "1+1d6", 0, 1, "Causa 1d6 de dano de fogo adicional", "Nível 5")
            );
            equipmentRepository.saveAll(equipment);
        }
    }

    private void initializeSkills() {
        if (skillRepository.count() == 0) {
            List<Skill> skills = Arrays.asList(
                createSkill("Acrobacia", "Realizar manobras acrobáticas", "Destreza", "Usado para saltos, cambalhotas e manobras complexas"),
                createSkill("Atletismo", "Realizar proezas físicas", "Força", "Usado para escalar, nadar e quebrar objetos"),
                createSkill("Intimidação", "Assustar ou coagir outros", "Carisma", "Usado para ameaçar ou intimidar criaturas"),
                createSkill("Investigação", "Encontrar pistas e evidências", "Inteligência", "Usado para analisar cenas de crime e encontrar objetos escondidos"),
                createSkill("Percepção", "Notar detalhes no ambiente", "Sabedoria", "Usado para detectar criaturas escondidas e perigos"),
                createSkill("Sobrevivência", "Navegar e sobreviver na natureza", "Sabedoria", "Usado para rastrear, caçar e encontrar caminhos")    );
            skillRepository.saveAll(skills);
        }
    }

    private Race createRace(String name, String description, String attributes, String traits) {
        Race race = new Race();
        race.setName(name);
        race.setDescription(description);
        race.setAttributes(attributes);
        race.setTraits(traits);
        return race;
    }

    private CharacterClass createClass(String name, String description, String features, String primaryAttributes) {
        CharacterClass characterClass = new CharacterClass();
        characterClass.setName(name);
        characterClass.setDescription(description);
        characterClass.setFeatures(features);
        characterClass.setPrimaryAttributes(primaryAttributes);
        return characterClass;
    }

    private Equipment createEquipment(String name, String description, String type, String category, 
                                    String rarity, String slot, int level, int weight, int value,
                                    String damageType, String damageFormula, int armorBonus, int attackBonus,
                                    String specialEffects, String requirements) {
        Equipment equipment = new Equipment();
        equipment.setName(name);
        equipment.setDescription(description);
        equipment.setType(type);
        equipment.setCategory(category);
        equipment.setRarity(rarity);
        equipment.setSlot(slot);
        equipment.setLevel(level);
        equipment.setWeight(weight);
        equipment.setValue(value);
        equipment.setDamageType(damageType);
        equipment.setDamageFormula(damageFormula);
        equipment.setArmorBonus(armorBonus);
        equipment.setAttackBonus(attackBonus);
        equipment.setSpecialEffects(specialEffects);
        equipment.setRequirements(requirements);
        return equipment;
    }

    private Skill createSkill(String name, String description, String relatedAttribute, String usage) {
        Skill skill = new Skill();
        skill.setName(name);
        skill.setDescription(description);
        skill.setRelatedAttribute(relatedAttribute);
        skill.setUsage(usage);
        return skill;
    }
} 