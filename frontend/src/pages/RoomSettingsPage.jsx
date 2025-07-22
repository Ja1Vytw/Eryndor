import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Sword, ArrowLeft, Users, Settings, Shield, Crown, UserX, UserCheck } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function RoomSettingsPage() {
  const { roomId } = useParams()
  const [room, setRoom] = useState(null)
  const [activeTab, setActiveTab] = useState("general")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Carregar dados da sala (mockado)
    setTimeout(() => {
      const mockRoom = {
        id: roomId,
        name: "Aventura em Pedravale",
        description: "Uma missão para investigar desaparecimentos misteriosos na cidade de Pedravale.",
        dm: "Mestre Elyndra",
        players: [
          { id: "player-1", name: "Aragorn", class: "Cruzado", level: 3, isOnline: true, role: "player" },
          { id: "player-2", name: "Gandalf", class: "Mago", level: 4, isOnline: true, role: "player" },
          { id: "player-3", name: "Legolas", class: "Andarilho", level: 3, isOnline: false, role: "player" },
          { id: "player-4", name: "Gimli", class: "Cruzado", level: 3, isOnline: true, role: "player" }
        ],
        maxPlayers: 6,
        status: "in-progress",
        settings: {
          allowSpectators: false,
          autoSave: true,
          voiceChat: true,
          videoChat: false,
          diceRolls: "public",
          characterSheets: "visible"
        }
      }
      setRoom(mockRoom)
      setLoading(false)
    }, 1000)
  }, [roomId])

  const updateSetting = (key, value) => {
    setRoom(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [key]: value
      }
    }))
  }

  const removePlayer = (playerId) => {
    setRoom(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== playerId)
    }))
  }

  const promoteToDM = (playerId) => {
    setRoom(prev => ({
      ...prev,
      players: prev.players.map(p => 
        p.id === playerId ? { ...p, role: "dm" } : p
      )
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando configurações...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to={`/room/${roomId}`} className="flex items-center gap-2 hover-lift">
              <ArrowLeft className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-medium">Voltar</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 text-amber-500" />
            <h1 className="text-2xl font-bold gradient-text">Configurações da Sala</h1>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-amber-500 mb-2">{room.name}</h2>
            <p className="text-gray-400">{room.description}</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700 mb-8">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab("general")}
                className={`py-2 font-medium ${activeTab === "general" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Geral
              </button>
              <button
                onClick={() => setActiveTab("players")}
                className={`py-2 font-medium ${activeTab === "players" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Jogadores
              </button>
              <button
                onClick={() => setActiveTab("permissions")}
                className={`py-2 font-medium ${activeTab === "permissions" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Permissões
              </button>
              <button
                onClick={() => setActiveTab("advanced")}
                className={`py-2 font-medium ${activeTab === "advanced" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                Avançado
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "general" && (
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Configurações Gerais</div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Nome da Sala</label>
                    <input
                      type="text"
                      value={room.name}
                      onChange={(e) => setRoom(prev => ({ ...prev, name: e.target.value }))}
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label className="form-label">Descrição</label>
                    <textarea
                      value={room.description}
                      onChange={(e) => setRoom(prev => ({ ...prev, description: e.target.value }))}
                      className="input w-full h-24"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Máximo de Jogadores</label>
                      <select
                        value={room.maxPlayers}
                        onChange={(e) => setRoom(prev => ({ ...prev, maxPlayers: parseInt(e.target.value) }))}
                        className="input w-full"
                      >
                        <option value={4}>4 jogadores</option>
                        <option value={5}>5 jogadores</option>
                        <option value={6}>6 jogadores</option>
                        <option value={8}>8 jogadores</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Status da Sala</label>
                      <select
                        value={room.status}
                        onChange={(e) => setRoom(prev => ({ ...prev, status: e.target.value }))}
                        className="input w-full"
                      >
                        <option value="recruiting">Recrutando</option>
                        <option value="in-progress">Em Andamento</option>
                        <option value="paused">Pausada</option>
                        <option value="finished">Finalizada</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "players" && (
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Gerenciar Jogadores</div>
                  <div className="card-description">Jogadores atuais: {room.players.length}/{room.maxPlayers}</div>
                </div>
                <div className="space-y-4">
                  {room.players.map((player) => (
                    <div key={player.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${player.isOnline ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                        <div>
                          <div className="font-medium">{player.name}</div>
                          <div className="text-sm text-gray-400">{player.class} Nv.{player.level}</div>
                        </div>
                        {player.role === "dm" && (
                          <Crown className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div className="flex gap-2">
                        {player.role !== "dm" && (
                          <button
                            onClick={() => promoteToDM(player.id)}
                            className="btn btn-outline btn-sm"
                            title="Promover a Mestre"
                          >
                            <Crown className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => removePlayer(player.id)}
                          className="btn btn-outline btn-sm text-red-400 hover:text-red-300"
                          title="Remover jogador"
                        >
                          <UserX className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "permissions" && (
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Permissões e Privacidade</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Permitir Espectadores</div>
                      <div className="text-sm text-gray-400">Jogadores podem assistir sem participar</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={room.settings.allowSpectators}
                      onChange={(e) => updateSetting("allowSpectators", e.target.checked)}
                      className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Chat de Voz</div>
                      <div className="text-sm text-gray-400">Permitir comunicação por voz</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={room.settings.voiceChat}
                      onChange={(e) => updateSetting("voiceChat", e.target.checked)}
                      className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Chat de Vídeo</div>
                      <div className="text-sm text-gray-400">Permitir comunicação por vídeo</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={room.settings.videoChat}
                      onChange={(e) => updateSetting("videoChat", e.target.checked)}
                      className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="form-label">Visibilidade dos Dados</label>
                    <select
                      value={room.settings.diceRolls}
                      onChange={(e) => updateSetting("diceRolls", e.target.value)}
                      className="input w-full"
                    >
                      <option value="public">Público - Todos podem ver</option>
                      <option value="dm-only">Apenas Mestre</option>
                      <option value="player-only">Apenas Jogador</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Fichas de Personagem</label>
                    <select
                      value={room.settings.characterSheets}
                      onChange={(e) => updateSetting("characterSheets", e.target.value)}
                      className="input w-full"
                    >
                      <option value="visible">Visíveis para todos</option>
                      <option value="dm-only">Apenas Mestre</option>
                      <option value="owner-only">Apenas dono</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "advanced" && (
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Configurações Avançadas</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Auto-save</div>
                      <div className="text-sm text-gray-400">Salvar automaticamente o progresso</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={room.settings.autoSave}
                      onChange={(e) => updateSetting("autoSave", e.target.checked)}
                      className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Tempo de Sessão (minutos)</label>
                      <input
                        type="number"
                        defaultValue={180}
                        className="input w-full"
                        min="30"
                        max="480"
                      />
                    </div>
                    <div>
                      <label className="form-label">Intervalo de Auto-save (minutos)</label>
                      <input
                        type="number"
                        defaultValue={5}
                        className="input w-full"
                        min="1"
                        max="30"
                      />
                    </div>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-medium text-red-400 mb-2">Zona de Perigo</h4>
                    <div className="space-y-2">
                      <button className="btn btn-outline text-red-400 hover:text-red-300 w-full">
                        Excluir Sala
                      </button>
                      <button className="btn btn-outline text-amber-400 hover:text-amber-300 w-full">
                        Resetar Configurações
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-center">
            <button className="btn btn-primary hover-lift">
              Salvar Configurações
            </button>
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