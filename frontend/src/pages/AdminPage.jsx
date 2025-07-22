"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Sword, Search, CheckCircle, XCircle, Clock, Filter, User, LogOut } from 'lucide-react'
import { LanguageSelector } from "../components/LanguageSelector"

export default function AdminPage() {
  const [suggestions, setSuggestions] = useState([])
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Verificar se o usuário é admin
    const user = localStorage.getItem("eryndor-user")
    if (!user) {
      navigate("/")
      return
    }

    const userData = JSON.parse(user)
    // Em uma implementação real, verificaríamos se o usuário tem permissões de admin
    // Para este exemplo, vamos considerar que o usuário com ID "user-1" é admin
    if (userData.id === "user-1") {
      setIsAdmin(true)
    } else {
      navigate("/")
      return
    }

    // Carregar sugestões (simulado)
    const mockSuggestions = [
      {
        id: "sug-001",
        type: "class",
        title: "Nova Classe: Druida",
        description:
          "Sugiro adicionar a classe Druida, focada em transformação em animais e magias da natureza. Poderia ter habilidades de cura e controle de área usando plantas.",
        author: "Carlos Silva",
        date: "2023-04-15",
        status: "pending",
      },
      {
        id: "sug-002",
        type: "item",
        title: "Item Lendário: Cajado de Eras",
        description:
          "Um cajado antigo que permite ao usuário manipular o tempo em pequena escala, desacelerando inimigos ou acelerando aliados.",
        author: "Marina Costa",
        date: "2023-04-10",
        status: "approved",
        comments: "Aprovado com ajustes. Vamos limitar o efeito de tempo para 2 turnos para balanceamento.",
      },
      {
        id: "sug-003",
        type: "mission",
        title: "Missão: O Culto Subterrâneo",
        description:
          "Uma missão onde os jogadores descobrem um culto secreto nas catacumbas de Vael'Thar que está tentando ressuscitar um antigo demônio.",
        author: "Pedro Mendes",
        date: "2023-04-05",
        status: "rejected",
        comments: "Muito similar à missão 'Sombras nas Profundezas' que já está planejada para o próximo update.",
      },
    ]

    setSuggestions(mockSuggestions)
    setFilteredSuggestions(mockSuggestions)
  }, [navigate])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (!query) {
      setFilteredSuggestions(suggestions)
      return
    }

    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().includes(query) ||
        suggestion.description.toLowerCase().includes(query) ||
        suggestion.author.toLowerCase().includes(query),
    )
    setFilteredSuggestions(filtered)
  }

  const handleStatusChange = (id, newStatus, comments = "") => {
    const updatedSuggestions = suggestions.map((suggestion) => {
      if (suggestion.id === id) {
        return {
          ...suggestion,
          status: newStatus,
          comments: comments || suggestion.comments,
        }
      }
      return suggestion
    })

    setSuggestions(updatedSuggestions)
    setFilteredSuggestions(
      updatedSuggestions.filter((suggestion) =>
        searchQuery
          ? suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            suggestion.description.toLowerCase().includes(searchQuery.toLowerCase())
          : true,
      ),
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-primary text-gray-100 flex items-center justify-center">
        <div className="card w-[350px]">
          <div className="card-header">
            <div className="card-title text-amber-500">Acesso Restrito</div>
            <div className="card-description">Esta área é apenas para administradores.</div>
          </div>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary w-full">
              Voltar para Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
            <h1 className="text-2xl font-bold gradient-text">Eryndor</h1>
            <span className="badge badge-amber ml-2">Admin</span>
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
            <LanguageSelector />
            <Link to="/" className="btn btn-primary hover-lift flex items-center gap-2">
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Sair</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 md:px-6">
        <div className="container max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-amber-500">Painel Administrativo</h1>
            <p className="text-gray-400">Gerencie sugestões, aprove ou rejeite conteúdo enviado pela comunidade.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="card">
                <div className="card-header pb-3">
                  <div className="card-title text-lg">Estatísticas</div>
                </div>
                <div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total de sugestões:</span>
                      <span className="font-bold">{suggestions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pendentes:</span>
                      <span className="font-bold text-amber-500">
                        {suggestions.filter((s) => s.status === "pending").length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Aprovadas:</span>
                      <span className="font-bold text-green-500">
                        {suggestions.filter((s) => s.status === "approved").length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rejeitadas:</span>
                      <span className="font-bold text-red-500">
                        {suggestions.filter((s) => s.status === "rejected").length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="card">
                <div className="card-header">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="card-title text-xl">Sugestões da Comunidade</div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                      <input
                        type="search"
                        placeholder="Buscar sugestões..."
                        className="input pl-8"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="scroll-area" style={{ height: "600px" }}>
                    <div className="space-y-4 pr-4">
                      {filteredSuggestions.length === 0 ? (
                        <div className="text-center py-8 text-gray-400">
                          Nenhuma sugestão encontrada com os filtros atuais.
                        </div>
                      ) : (
                        filteredSuggestions.map((suggestion) => (
                          <div key={suggestion.id} className="card bg-tertiary">
                            <div className="card-header pb-2">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="card-title text-lg">{suggestion.title}</div>
                                  <div className="card-description flex items-center gap-2">
                                    <User className="h-3 w-3" />
                                    {suggestion.author} • {new Date(suggestion.date).toLocaleDateString()}
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <span
                                    className={`badge ${
                                      suggestion.type === "class"
                                        ? "badge-blue"
                                        : suggestion.type === "item"
                                          ? "badge-purple"
                                          : suggestion.type === "mission"
                                            ? "badge-amber"
                                            : "badge-green"
                                    }`}
                                  >
                                    {suggestion.type === "class"
                                      ? "Classe"
                                      : suggestion.type === "item"
                                        ? "Item"
                                        : suggestion.type === "mission"
                                          ? "Missão"
                                          : "Funcionalidade"}
                                  </span>
                                  <span
                                    className={`badge ${
                                      suggestion.status === "pending"
                                        ? "badge-amber"
                                        : suggestion.status === "approved"
                                          ? "badge-green"
                                          : "badge-red"
                                    }`}
                                  >
                                    {suggestion.status === "pending" ? (
                                      <Clock className="h-3 w-3 mr-1" />
                                    ) : suggestion.status === "approved" ? (
                                      <CheckCircle className="h-3 w-3 mr-1" />
                                    ) : (
                                      <XCircle className="h-3 w-3 mr-1" />
                                    )}
                                    {suggestion.status === "pending"
                                      ? "Pendente"
                                      : suggestion.status === "approved"
                                        ? "Aprovado"
                                        : "Rejeitado"}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <p className="text-sm">{suggestion.description}</p>
                              {suggestion.comments && (
                                <div className="p-3 bg-primary rounded border">
                                  <h4 className="font-bold text-sm mb-1">Comentários do Admin:</h4>
                                  <p className="text-sm text-gray-400">{suggestion.comments}</p>
                                </div>
                              )}
                              {suggestion.status === "pending" && (
                                <div className="flex gap-2">
                                  <button
                                    className="btn btn-outline text-green-500 border-green-500 hover:bg-green-500 hover:text-white btn-sm"
                                    onClick={() => handleStatusChange(suggestion.id, "approved")}
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Aprovar
                                  </button>
                                  <button
                                    className="btn btn-outline text-red-500 border-red-500 hover:bg-red-500 hover:text-white btn-sm"
                                    onClick={() => handleStatusChange(suggestion.id, "rejected")}
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Rejeitar
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}