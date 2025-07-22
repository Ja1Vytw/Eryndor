import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { Sword, Plus, Users, Map, Clock, Shield, Flame, User, Music, Skull } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function RoomsPage() {
  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar se o usuário está logado
    const userData = localStorage.getItem("eryndor-user")
    if (!userData) {
      window.location.href = "/"
      return
    }
    setUser(JSON.parse(userData))

    // Carregar salas (mockado por enquanto)
    setTimeout(() => {
      const mockRooms = [
        {
          id: "room-1",
          name: "Aventura em Pedravale",
          description: "Uma missão para investigar desaparecimentos misteriosos na cidade de Pedravale.",
          dm: "Mestre Elyndra",
          players: 4,
          maxPlayers: 6,
          level: "1-5",
          status: "recruiting",
          created: "2024-01-15",
          nextSession: "2024-01-20 19:00"
        },
        {
          id: "room-2", 
          name: "As Ruínas de Vael'Thar",
          description: "Explorando as antigas ruínas do templo em busca dos fragmentos do Cristal Primordial.",
          dm: "Mestre Thorne",
          players: 5,
          maxPlayers: 5,
          level: "3-8",
          status: "in-progress",
          created: "2024-01-10",
          nextSession: "2024-01-18 20:00"
        },
        {
          id: "room-3",
          name: "O Culto das Sombras",
          description: "Uma investigação sobre um culto secreto que está realizando rituais nas catacumbas.",
          dm: "Mestre Elara",
          players: 3,
          maxPlayers: 4,
          level: "2-6",
          status: "recruiting",
          created: "2024-01-12",
          nextSession: "2024-01-22 18:30"
        }
      ]
      setRooms(mockRooms)
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "recruiting": return "text-green-400"
      case "in-progress": return "text-amber-400"
      case "full": return "text-red-400"
      default: return "text-gray-400"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "recruiting": return "Recrutando"
      case "in-progress": return "Em Andamento"
      case "full": return "Lotada"
      default: return "Desconhecido"
    }
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
          <p className="text-gray-400">Carregando salas...</p>
        </div>
      </div>
    )
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
          <nav className="hidden md:flex gap-4">
            <Link to="/rooms" className="btn btn-ghost hover-lift">Salas</Link>
            <Link to="/character-select" className="btn btn-ghost hover-lift">Personagens</Link>
            <Link to="/classes" className="btn btn-ghost hover-lift">Classes</Link>
            <Link to="/dice" className="btn btn-ghost hover-lift">Dados</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link to="/character-select" className="btn btn-primary hover-lift">
              Meus Personagens
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-amber-500 mb-2">Salas de Aventura</h1>
              <p className="text-gray-400">Encontre ou crie uma sessão de RPG para jogar com outros aventureiros</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Link to="/room-creation" className="btn btn-primary hover-lift flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Criar Sala
              </Link>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-secondary p-4 rounded-lg mb-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Status:</span>
                <select className="bg-tertiary border border-gray-600 rounded px-3 py-1 text-sm">
                  <option value="">Todos</option>
                  <option value="recruiting">Recrutando</option>
                  <option value="in-progress">Em Andamento</option>
                  <option value="full">Lotadas</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Nível:</span>
                <select className="bg-tertiary border border-gray-600 rounded px-3 py-1 text-sm">
                  <option value="">Todos</option>
                  <option value="1-5">1-5</option>
                  <option value="3-8">3-8</option>
                  <option value="5-10">5-10</option>
                </select>
              </div>
            </div>
          </div>

          {/* Lista de Salas */}
          <div className="grid gap-6">
            {rooms.map((room) => (
              <div key={room.id} className="card hover-lift cursor-pointer">
                <div className="card-header">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="card-title text-xl">{room.name}</h3>
                        <span className={`badge ${getStatusColor(room.status)}`}>
                          {getStatusText(room.status)}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">{room.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{room.players}/{room.maxPlayers} jogadores</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4" />
                          <span>Nível {room.level}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>Mestre: {room.dm}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Próxima sessão: {room.nextSession}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link 
                        to={`/room/${room.id}`}
                        className="btn btn-primary btn-sm hover-lift"
                      >
                        Entrar
                      </Link>
                      <Link 
                        to={`/room/${room.id}/info`}
                        className="btn btn-outline btn-sm hover-lift"
                      >
                        Detalhes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estado vazio */}
          {rooms.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">Nenhuma sala disponível</h3>
              <p className="text-gray-500 mb-6">Seja o primeiro a criar uma aventura!</p>
              <Link to="/room-creation" className="btn btn-primary hover-lift">
                Criar Primeira Sala
              </Link>
            </div>
          )}
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