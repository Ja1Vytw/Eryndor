"use client"

import { createContext, useContext, useState } from "react"

const LanguageContext = createContext()

const translations = {
  "pt-BR": {
    "nav.home": "Início",
    "nav.play": "Jogar",
    "nav.lore": "História",
    "nav.classes": "Classes",
    "nav.characters": "Personagens",
    "nav.logout": "Sair",
    "nav.menu": "Menu",
    "nav.about": "Sobre",
    "button.enter": "Entrar no Jogo",
    "button.roll": "Rolar Dado",
    "game.level": "Nível",
    "game.health": "Vida",
    "game.energy": "Energia",
    "game.strength": "Força",
    "game.dexterity": "Destreza",
    "game.constitution": "Constituição",
    "game.intelligence": "Inteligência",
    "game.wisdom": "Sabedoria",
    "game.charisma": "Carisma",
    "game.inventory": "Inventário",
    "game.map": "Mapa",
    "game.nomap": "Nenhum mapa disponível",
    "game.location": "Localização atual: Taverna O Dragão Dorminhoco, Vael'Thar",
    "class.crusader": "Cruzado",
    "class.mage": "Mago",
    "class.rogue": "Ladino",
    "class.ranger": "Andarilho",
    "class.bard": "Bardo",
    "class.necromancer": "Necromante",
  },
  "en-US": {
    "nav.home": "Home",
    "nav.play": "Play",
    "nav.lore": "Lore",
    "nav.classes": "Classes",
    "nav.characters": "Characters",
    "nav.logout": "Logout",
    "nav.menu": "Menu",
    "nav.about": "About",
    "button.enter": "Enter Game",
    "button.roll": "Roll Dice",
    "game.level": "Level",
    "game.health": "Health",
    "game.energy": "Energy",
    "game.strength": "Strength",
    "game.dexterity": "Dexterity",
    "game.constitution": "Constitution",
    "game.intelligence": "Intelligence",
    "game.wisdom": "Wisdom",
    "game.charisma": "Charisma",
    "game.inventory": "Inventory",
    "game.map": "Map",
    "game.nomap": "No map available",
    "game.location": "Current location: The Sleeping Dragon Tavern, Vael'Thar",
    "class.crusader": "Crusader",
    "class.mage": "Mage",
    "class.rogue": "Rogue",
    "class.ranger": "Ranger",
    "class.bard": "Bard",
    "class.necromancer": "Necromancer",
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt-BR")

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
