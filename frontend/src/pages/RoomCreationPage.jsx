import { Link } from "react-router-dom"
import { useState } from "react"
import { Sword, ArrowLeft, Users, Map, Clock, Shield, Plus, X } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function RoomCreationPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    maxPlayers: 6,
    levelRange: "1-5",
    sessionTime: "19:00",
    sessionDay: "saturday",
    isPublic: true,
    allowSpectators: false,
    tags: []
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Simular criação da sala
    setTimeout(() => {
      const newRoom = {
        id: `room-${Date.now()}`,
        ...formData,
        created: new Date().toISOString(),
        dm: "Você",
        players: 1,
        status: "recruiting"
      }

      // Salvar no localStorage (mock)
      const existingRooms = JSON.parse(localStorage.getItem("eryndor-rooms") || "[]")
      existingRooms.push(newRoom)
      localStorage.setItem("eryndor-rooms", JSON.stringify(existingRooms))

      setLoading(false)
      window.location.href = `/room/${newRoom.id}`
    }, 2000)
  }

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }))
    }
  }

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/rooms" className="flex items-center gap-2 hover-lift">
              <ArrowLeft className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-medium">Voltar</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
            <h1 className="text-2xl font-bold gradient-text">Criar Nova Sala</h1>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-amber-500 mb-2">Criar Nova Aventura</h1>
            <p className="text-gray-400">Configure sua sala de RPG e comece uma nova jornada</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informações Básicas */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Informações Básicas</div>
                <div className="card-description">Detalhes principais da sua aventura</div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="form-label">Nome da Aventura</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="input w-full"
                    placeholder="Ex: Aventura em Pedravale"
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Descrição</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    className="input w-full h-24"
                    placeholder="Descreva brevemente a aventura, cenário e objetivos..."
                    required
                  />
                </div>
              </div>
            </div>

            {/* Configurações da Sala */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Configurações da Sala</div>
                <div className="card-description">Defina as regras e limites da sessão</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Máximo de Jogadores</label>
                  <select
                    value={formData.maxPlayers}
                    onChange={(e) => setFormData(prev => ({ ...prev, maxPlayers: parseInt(e.target.value) }))}
                    className="input w-full"
                  >
                    <option value={4}>4 jogadores</option>
                    <option value={5}>5 jogadores</option>
                    <option value={6}>6 jogadores</option>
                    <option value={8}>8 jogadores</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Faixa de Nível</label>
                  <select
                    value={formData.levelRange}
                    onChange={(e) => setFormData(prev => ({ ...prev, levelRange: e.target.value }))}
                    className="input w-full"
                  >
                    <option value="1-5">Nível 1-5 (Iniciantes)</option>
                    <option value="3-8">Nível 3-8 (Intermediário)</option>
                    <option value="5-10">Nível 5-10 (Avançado)</option>
                    <option value="8-15">Nível 8-15 (Expert)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Horários das Sessões</div>
                <div className="card-description">Defina quando as sessões acontecerão</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Dia da Semana</label>
                  <select
                    value={formData.sessionDay}
                    onChange={(e) => setFormData(prev => ({ ...prev, sessionDay: e.target.value }))}
                    className="input w-full"
                  >
                    <option value="monday">Segunda-feira</option>
                    <option value="tuesday">Terça-feira</option>
                    <option value="wednesday">Quarta-feira</option>
                    <option value="thursday">Quinta-feira</option>
                    <option value="friday">Sexta-feira</option>
                    <option value="saturday">Sábado</option>
                    <option value="sunday">Domingo</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Horário</label>
                  <input
                    type="time"
                    value={formData.sessionTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, sessionTime: e.target.value }))}
                    className="input w-full"
                  />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Tags da Aventura</div>
                <div className="card-description">Adicione tags para ajudar jogadores a encontrar sua sala</div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {formData.tags.map((tag) => (
                    <span key={tag} className="badge badge-amber flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-400"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Adicionar tag..."
                    className="input flex-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addTag(e.target.value.trim())
                        e.target.value = ''
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      const input = e.target.previousSibling
                      addTag(input.value.trim())
                      input.value = ''
                    }}
                    className="btn btn-outline"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-sm text-gray-400">
                  Tags sugeridas: Aventura, Combate, Mistério, Exploração, Social, Horror
                </div>
              </div>
            </div>

            {/* Configurações Avançadas */}
            <div className="card">
              <div className="card-header">
                <div className="card-title">Configurações Avançadas</div>
                <div className="card-description">Opções adicionais para sua sala</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Sala Pública</div>
                    <div className="text-sm text-gray-400">Qualquer pessoa pode ver e entrar na sala</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.isPublic}
                    onChange={(e) => setFormData(prev => ({ ...prev, isPublic: e.target.checked }))}
                    className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Permitir Espectadores</div>
                    <div className="text-sm text-gray-400">Jogadores podem assistir sem participar</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.allowSpectators}
                    onChange={(e) => setFormData(prev => ({ ...prev, allowSpectators: e.target.checked }))}
                    className="w-4 h-4 text-amber-500 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-4 justify-center">
              <Link to="/rooms" className="btn btn-outline">
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={loading || !formData.name || !formData.description}
                className="btn btn-primary hover-lift"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Criando...
                  </>
                ) : (
                  "Criar Sala"
                )}
              </button>
            </div>
          </form>
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