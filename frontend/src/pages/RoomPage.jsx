import { useState, useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { 
  Sword, ArrowLeft, Users, MessageSquare, Map, 
  Shield, Flame, User, Music, Skull, Settings,
  Mic, MicOff, Video, VideoOff, Volume2, VolumeX
} from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function RoomPage() {
  const { roomId } = useParams()
  const [room, setRoom] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [isDM, setIsDM] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOn, setIsVideoOn] = useState(false)
  const messagesEndRef = useRef(null)
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
          { id: "player-1", name: "Aragorn", class: "Cruzado", level: 3, isOnline: true },
          { id: "player-2", name: "Gandalf", class: "Mago", level: 4, isOnline: true },
          { id: "player-3", name: "Legolas", class: "Andarilho", level: 3, isOnline: false },
          { id: "player-4", name: "Gimli", class: "Cruzado", level: 3, isOnline: true }
        ],
        maxPlayers: 6,
        status: "in-progress",
        currentScene: "Taverna O Javali Dourado"
      }
      setRoom(mockRoom)
      setIsDM(true) // Mock: usuário é o mestre
      setLoading(false)

      // Mensagens iniciais
      setMessages([
        {
          id: 1,
          sender: "system",
          content: "Bem-vindos à sessão de Eryndor!",
          timestamp: new Date().toISOString()
        },
        {
          id: 2,
          sender: "Mestre Elyndra",
          content: "Vocês chegam à taverna 'O Javali Dourado' em Pedravale. O ar está pesado com rumores sobre desaparecimentos misteriosos.",
          timestamp: new Date().toISOString()
        }
      ])
    }, 1000)
  }, [roomId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: Date.now(),
      sender: isDM ? "Mestre Elyndra" : "Você",
      content: newMessage,
      timestamp: new Date().toISOString()
    }

    setMessages(prev => [...prev, message])
    setNewMessage("")
  }

  const getClassIcon = (className) => {
    switch (className.toLowerCase()) {
      case "cruzado": return <Shield className="h-4 w-4 text-blue-400" />
      case "mago": return <Flame className="h-4 w-4 text-red-400" />
      case "ladino": return <User className="h-4 w-4 text-gray-400" />
      case "andarilho": return <Map className="h-4 w-4 text-green-400" />
      case "bardo": return <Music className="h-4 w-4 text-blue-400" />
      case "necromante": return <Skull className="h-4 w-4 text-purple-400" />
      default: return <User className="h-4 w-4 text-gray-400" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando sala...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-primary text-gray-100 flex flex-col">
      {/* Header */}
      <header className="border-b py-4 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/rooms" className="flex items-center gap-2 hover-lift">
              <ArrowLeft className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-medium">Voltar</span>
            </Link>
            <div>
              <h1 className="text-xl font-bold text-amber-500">{room.name}</h1>
              <p className="text-sm text-gray-400">{room.currentScene}</p>
            </div>
            {isDM && <span className="badge badge-amber">Mestre</span>}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded ${isMuted ? 'bg-red-500' : 'bg-gray-600 hover:bg-gray-500'}`}
              >
                {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsVideoOn(!isVideoOn)}
                className={`p-2 rounded ${isVideoOn ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-500'}`}
              >
                {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
              </button>
            </div>
            <LanguageSelector />
            <Link to={`/room/${roomId}/settings`} className="btn btn-ghost btn-sm">
              <Settings className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Lista de Jogadores */}
        <div className="w-64 bg-secondary border-r border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-amber-500 mb-2">Jogadores ({room.players.length}/{room.maxPlayers})</h3>
            <p className="text-sm text-gray-400">Mestre: {room.dm}</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-3">
              {room.players.map((player) => (
                <div key={player.id} className="flex items-center gap-3 p-2 rounded bg-tertiary">
                  <div className={`w-2 h-2 rounded-full ${player.isOnline ? 'bg-green-400' : 'bg-gray-500'}`}></div>
                  <div className="flex items-center gap-2">
                    {getClassIcon(player.class)}
                    <div>
                      <div className="font-medium text-sm">{player.name}</div>
                      <div className="text-xs text-gray-400">{player.class} Nv.{player.level}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="border-b border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab("chat")}
                className={`px-4 py-2 font-medium ${activeTab === "chat" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <MessageSquare className="h-4 w-4 inline mr-2" />
                Chat
              </button>
              <button
                onClick={() => setActiveTab("game")}
                className={`px-4 py-2 font-medium ${activeTab === "game" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
              >
                <Map className="h-4 w-4 inline mr-2" />
                Jogo
              </button>
              {isDM && (
                <button
                  onClick={() => setActiveTab("dm")}
                  className={`px-4 py-2 font-medium ${activeTab === "dm" ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-gray-300'}`}
                >
                  <Shield className="h-4 w-4 inline mr-2" />
                  Painel DM
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "chat" && (
              <div className="h-full flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === "Você" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                        message.sender === "Você" 
                          ? "bg-amber-500 text-black" 
                          : message.sender === "system"
                            ? "bg-blue-600 text-white"
                            : "bg-secondary text-white"
                      }`}>
                        <div className="text-xs text-gray-400 mb-1">{message.sender}</div>
                        <div>{message.content}</div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="border-t border-gray-700 p-4">
                  <form onSubmit={sendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      className="flex-1 bg-tertiary border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-600 text-black px-4 py-2 rounded font-medium transition-colors"
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "game" && (
              <div className="h-full p-4">
                <div className="bg-secondary rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-amber-500 mb-4">Área de Jogo</h3>
                  <p className="text-gray-400">
                    Aqui será exibido o mapa, fichas de personagem, combate e outras ferramentas de jogo.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Link to="/dice" className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">Rolagem de Dados</div>
                      </div>
                    </Link>
                    <Link to="/character-select" className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">Ficha do Personagem</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dm" && isDM && (
              <div className="h-full p-4">
                <div className="bg-secondary rounded-lg p-6 h-full">
                  <h3 className="text-xl font-bold text-amber-500 mb-4">Painel do Mestre</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">NPCs</div>
                      </div>
                    </div>
                    <div className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">Combate</div>
                      </div>
                    </div>
                    <div className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">Mapa</div>
                      </div>
                    </div>
                    <div className="card hover-lift">
                      <div className="card-header">
                        <div className="card-title">Narrativa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 