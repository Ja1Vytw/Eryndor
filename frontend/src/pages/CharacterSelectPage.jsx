"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Sword, User, Plus, Shield, Flame, ArrowRight } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function CharacterSelectPage() {
  const [characters, setCharacters] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Verificar se o usuário está logado
    const user = localStorage.getItem("eryndor-user")
    if (!user) {
      navigate("/")
      return
    }

    // Carregar personagens do localStorage
    const savedCharacters = localStorage.getItem("eryndor-characters")
    if (savedCharacters) {
      setCharacters(JSON.parse(savedCharacters))
    } else {
      setCharacters([])
    }
  }, [navigate])

  const handleCreateCharacter = () => {
    navigate("/character-creation")
  }

  const handleSelectCharacter = (characterId) => {
    localStorage.setItem("eryndor-active-character", characterId)
    navigate("/game")
  }

  const getClassIcon = (characterClass) => {
    switch (characterClass.toLowerCase()) {
      case "cruzado":
        return <Shield className="h-5 w-5 text-amber-500" />
      case "mago":
        return <Flame className="h-5 w-5 text-red-500" />
      default:
        return <User className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover-lift">
              <Sword className="h-6 w-6 text-amber-500 animate-glow" />
              <h1 className="text-2xl font-bold gradient-text">Eryndor</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link to="/" className="btn btn-outline hover-lift">
              Sair
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-amber-500">Selecione seu Personagem</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Escolha um personagem existente ou crie um novo para iniciar sua jornada em Eryndor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card para criar novo personagem */}
            <div
              className="card hover:border-amber-600 transition-colors cursor-pointer"
              onClick={handleCreateCharacter}
            >
              <div className="flex flex-col items-center justify-center h-[300px]">
                <div className="w-24 h-24 rounded-full bg-tertiary border-2 border-dashed border-gray-600 flex items-center justify-center mb-4">
                  <Plus className="h-10 w-10 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-amber-500">Criar Novo Personagem</h3>
                <p className="text-gray-400 text-center mt-2">Comece uma nova jornada em Eryndor</p>
              </div>
            </div>

            {/* Personagens existentes */}
            {characters.map((character) => (
              <div
                key={character.id}
                className="card hover:border-amber-600 transition-colors cursor-pointer"
                onClick={() => handleSelectCharacter(character.id)}
              >
                <div className="card-header pb-2">
                  <div className="card-title text-xl text-amber-500">{character.name}</div>
                  <div className="card-description flex items-center gap-1">
                    {getClassIcon(character.class)}
                    <span>{character.class}</span>
                    <span className="text-gray-500 ml-1">• Nível {character.level}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-full aspect-square bg-tertiary rounded-md flex items-center justify-center overflow-hidden">
                    <img
                      src={character.portrait || "/placeholder.svg?height=200&width=200"}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                    Continuar Jornada <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t py-8 px-4 md:px-6 bg-secondary">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sword className="h-5 w-5 text-amber-500" />
            <span className="text-xl font-bold text-amber-500">Eryndor</span>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Eryndor RPG. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
