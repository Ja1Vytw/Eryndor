"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const GamePage = () => {
  const [messages, setMessages] = useState([
    {
      type: "system",
      content:
        'Bem-vindo a Eryndor! Você está na taverna "O Javali Dourado" na cidade de Pedravale. O que você gostaria de fazer?',
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Character stats
  const [character] = useState({
    name: "Aventureiro",
    level: 5,
    class: "Guerreiro",
    health: { current: 85, max: 100 },
    mana: { current: 30, max: 50 },
    experience: { current: 1250, max: 2000 },
    attributes: {
      strength: 16,
      dexterity: 12,
      constitution: 14,
      intelligence: 10,
      wisdom: 13,
      charisma: 11,
    },
    inventory: [
      { name: "Espada de Ferro", type: "weapon", icon: "⚔️" },
      { name: "Armadura de Couro", type: "armor", icon: "🛡️" },
      { name: "Poção de Cura", type: "consumable", icon: "🧪" },
      { name: "Moedas de Ouro", type: "currency", icon: "💰", quantity: 150 },
    ],
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { type: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Você se aproxima do balcão da taverna. O taverneiro, um homem robusto com barba grisalha, olha para você com curiosidade.",
        "Ao explorar a taverna, você nota um grupo de aventureiros sussurrando em uma mesa no canto. Eles parecem estar planejando algo importante.",
        "Você ouve rumores sobre uma antiga ruína descoberta nas Montanhas Sombrias. Dizem que há tesouros e perigos em igual medida.",
        'Um comerciante se aproxima oferecendo equipamentos. "Precisa de algo para sua jornada, jovem aventureiro?"',
        "Você sente uma presença mágica estranha no ar. Algo não está certo nesta cidade...",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      const aiMessage = { type: "ai", content: randomResponse }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-screen bg-primary text-white">
      {/* Header */}
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-amber-500 animate-glow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12l5-3 5 3V10" />
              <path d="M15 5.88 14 .5a.5.5 0 0 0-.4-.4L12 0l-1.6.1a.5.5 0 0 0-.4.4L9 5.88" />
              <path d="M9 5.88v5.24a2 2 0 0 1-.5 1.31L7 14" />
              <path d="M15 5.88v5.24a2 2 0 0 0 .5 1.31L17 14" />
            </svg>
            <h1 className="text-2xl font-bold gradient-text">Eryndor</h1>
          </div>
          <nav className="hidden md:flex gap-4">
            <Link to="/game" className="btn btn-ghost hover-lift">
              Play Now
            </Link>
            <Link to="/lore" className="btn btn-ghost hover-lift">
              Lore
            </Link>
            <Link to="/classes" className="btn btn-ghost hover-lift">
              Classes
            </Link>
            <Link to="/about" className="btn btn-ghost hover-lift">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            {/* Aqui você pode adicionar o LanguageSelector se quiser igual à HomePage */}
            <Link to="/character-select" className="btn btn-primary hover-lift">
              Characters
            </Link>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Character Stats */}
        <div className="w-80 bg-secondary border-r border-amber-500/20 p-4 overflow-y-auto">
          {/* Character Info */}
          <div className="mb-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-2 flex items-center justify-center text-2xl">
                ⚔️
              </div>
              <h3 className="text-xl font-bold text-amber-500">{character.name}</h3>
              <p className="text-gray-400">
                Nível {character.level} {character.class}
              </p>
            </div>

            {/* Health Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Vida</span>
                <span>
                  {character.health.current}/{character.health.max}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(character.health.current / character.health.max) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Mana Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Mana</span>
                <span>
                  {character.mana.current}/{character.mana.max}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(character.mana.current / character.mana.max) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Experience Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Experiência</span>
                <span>
                  {character.experience.current}/{character.experience.max}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-amber-500 to-amber-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(character.experience.current / character.experience.max) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Attributes */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-amber-500 mb-3">Atributos</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Força</div>
                <div className="font-bold">{character.attributes.strength}</div>
              </div>
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Destreza</div>
                <div className="font-bold">{character.attributes.dexterity}</div>
              </div>
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Constituição</div>
                <div className="font-bold">{character.attributes.constitution}</div>
              </div>
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Inteligência</div>
                <div className="font-bold">{character.attributes.intelligence}</div>
              </div>
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Sabedoria</div>
                <div className="font-bold">{character.attributes.wisdom}</div>
              </div>
              <div className="bg-primary p-2 rounded">
                <div className="text-gray-400">Carisma</div>
                <div className="font-bold">{character.attributes.charisma}</div>
              </div>
            </div>
          </div>

          {/* Inventory */}
          <div>
            <h4 className="text-lg font-bold text-amber-500 mb-3">Inventário</h4>
            <div className="space-y-2">
              {character.inventory.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary p-2 rounded flex items-center gap-2 hover:bg-gray-700 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    {item.quantity && <div className="text-xs text-gray-400">x{item.quantity}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Game Chat */}
        <div className="flex-1 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-3xl p-4 rounded-lg ${
                    message.type === "user"
                      ? "bg-amber-500 text-black ml-4"
                      : message.type === "system"
                        ? "bg-blue-600 text-white"
                        : "bg-secondary text-white mr-4"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary text-white p-4 rounded-lg mr-4">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-amber-500"></div>
                    <span>O mestre está pensando...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-amber-500/20 p-4">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua ação..."
                className="flex-1 bg-secondary border border-amber-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-600 text-black px-6 py-2 rounded-lg font-bold transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
