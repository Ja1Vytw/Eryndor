"use client"

import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Sword, User, ArrowLeft } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"
import { v4 as uuidv4 } from "uuid"

const CLASSES_INFO = [
  {
    nome: "Cruzado",
    descricao: "Guerreiro sagrado, defensor da luz contra as trevas. Defesa alta, suporte e dano radiante.",
    caracteristicas: [
      { nivel: "Alto", desc: "Resistência a dano" },
      { nivel: "Médio", desc: "Dano corpo a corpo" },
      { nivel: "Médio", desc: "Magias de suporte" },
      { nivel: "Baixo", desc: "Dano à distância" },
    ],
    iniciais: [
      { nome: "Escudo Divino", desc: "Cria uma barreira de luz que reduz todo dano recebido em 50% por 3 turnos. Enquanto ativa, seus ataques causam dano radiante adicional." },
      { nome: "Martelo da Justiça", desc: "Um poderoso golpe que causa dano físico e radiante, com 30% de chance de atordoar inimigos não-sagrados por 1 turno." },
      { nome: "Aura de Coragem", desc: "Emite uma aura que concede a todos os aliados em um raio de 5 metros resistência a efeitos de medo e +2 em rolagens de ataque por 3 turnos." },
    ],
    avancadas: [
      { nome: "Julgamento Celestial", nivel: 5, desc: "Invoca um raio de luz divina que causa dano massivo a um único alvo. Contra mortos-vivos e demônios, o dano é dobrado." },
      { nome: "Consagração", nivel: 8, desc: "Consagra o terreno em um raio de 10 metros. Aliados nesta área recuperam 5% de vida por turno, enquanto inimigos das trevas sofrem dano contínuo." },
      { nome: "Execução Sombria", nivel: 15, desc: "O Ladino realiza uma série de ataques críticos em sequência, podendo eliminar instantaneamente inimigos com pouca vida e se tornar invisível após o uso." },
    ],
    passiva: { nome: "Fé Inabalável", desc: "Quando sua vida cai abaixo de 25%, o Cruzado é envolto em luz divina, ganhando imunidade a efeitos negativos e aumentando seu dano em 20% por 5 turnos. Este efeito pode ocorrer uma vez a cada combate." },
    ultimate: { nome: "Milagre Sagrado", desc: "O Cruzado invoca uma luz celestial que cura todos os aliados, remove efeitos negativos e concede invulnerabilidade por 1 turno. Inimigos próximos recebem dano radiante massivo." },
  },
  {
    nome: "Mago",
    descricao: "Mestre das artes arcanas e manipulador dos elementos. Dano em área e controle.",
    caracteristicas: [
      { nivel: "Alto", desc: "Dano em área" },
      { nivel: "Alto", desc: "Dano à distância" },
      { nivel: "Baixo", desc: "Resistência" },
      { nivel: "Médio", desc: "Controle de campo" },
    ],
    iniciais: [
      { nome: "Bola de Fogo", desc: "Conjura uma esfera de chamas que explode ao atingir o alvo, causando dano em área e deixando o terreno em chamas por 2 turnos." },
      { nome: "Raio Arcano", desc: "Dispara um raio de energia pura que causa alto dano a um único alvo e ignora 50% da resistência mágica." },
      { nome: "Barreira Arcana", desc: "Cria uma barreira mágica que absorve dano e reflete 30% do dano mágico de volta ao atacante." },
    ],
    avancadas: [
      { nome: "Tempestade de Gelo", nivel: 5, desc: "Invoca uma tempestade de gelo que causa dano em área e reduz a velocidade dos inimigos atingidos." },
      { nome: "Prisão Etérea", nivel: 8, desc: "Aprisiona um inimigo em uma dimensão paralela por 1 turno, tornando-o incapaz de agir ou ser alvo." },
      { nome: "Cataclismo Arcano", nivel: 15, desc: "Libera uma explosão de energia arcana devastadora, causando dano massivo em todos os inimigos na área e aplicando efeitos aleatórios de controle." },
    ],
    passiva: { nome: "Mente Brilhante", desc: "Sempre que o Mago conjura uma magia, há chance de reduzir o custo de mana da próxima magia em 50%. Além disso, recebe resistência aumentada a magias de controle." },
    ultimate: { nome: "Assalto Arcano", desc: "O Mago canaliza todo seu poder para lançar uma sequência de magias elementais devastadoras, ignorando resistências e causando efeitos colaterais únicos em cada inimigo atingido." },
  },
  {
    nome: "Ladino",
    descricao: "Mestre da furtividade, armadilhas e ataques rápidos. Crítico alto, evasão.",
    caracteristicas: [
      { nivel: "Médio", desc: "Dano corpo a corpo" },
      { nivel: "Alto", desc: "Chance de crítico" },
      { nivel: "Baixo", desc: "Resistência" },
      { nivel: "Médio", desc: "Furtividade" },
    ],
    iniciais: [
      { nome: "Ataque Furtivo", desc: "Causa dano extra ao atacar inimigos desprevenidos ou pelas costas." },
      { nome: "Desarmar Armadilha", desc: "Permite detectar e desarmar armadilhas em ambientes perigosos." },
      { nome: "Evasão", desc: "Chance de evitar completamente ataques de área ou magias." },
    ],
    avancadas: [
      { nome: "Golpe Sombrio", nivel: 5, desc: "Um ataque rápido que pode atordoar o alvo e aumentar a furtividade do Ladino." },
      { nome: "Mestre das Sombras", nivel: 8, desc: "Permite ao Ladino ficar invisível por alguns turnos ou até atacar." },
      { nome: "Execução Sombria", nivel: 15, desc: "O Ladino realiza uma série de ataques críticos em sequência, podendo eliminar instantaneamente inimigos com pouca vida e se tornar invisível após o uso." },
    ],
    passiva: { nome: "Reflexos Sobrenaturais", desc: "Aumenta a chance de esquiva e reduz o dano recebido de ataques surpresa." },
    ultimate: { nome: "Execução Sombria", desc: "O Ladino realiza uma série de ataques críticos em sequência, podendo eliminar instantaneamente inimigos com pouca vida e se tornar invisível após o uso." },
  },
  {
    nome: "Andarilho",
    descricao: "Especialista em sobrevivência, rastreamento e combate à distância.",
    caracteristicas: [
      { nivel: "Alto", desc: "Dano à distância" },
      { nivel: "Médio", desc: "Furtividade" },
      { nivel: "Baixo", desc: "Resistência mágica" },
      { nivel: "Médio", desc: "Sobrevivência" },
    ],
    iniciais: [
      { nome: "Tiro Preciso", desc: "Dispara uma flecha com precisão, causando dano aumentado a alvos distantes." },
      { nome: "Rastreamento", desc: "Permite encontrar rastros e identificar perigos no ambiente." },
      { nome: "Camuflagem", desc: "Dificulta ser detectado por inimigos em ambientes naturais." },
    ],
    avancadas: [
      { nome: "Chuva de Flechas", nivel: 5, desc: "Ataca todos os inimigos em uma área com múltiplas flechas." },
      { nome: "Companheiro Animal", nivel: 8, desc: "Invoca um animal para ajudar em combate ou exploração." },
      { nome: "Fúria da Natureza", nivel: 15, desc: "O Andarilho convoca a força da natureza, causando uma tempestade devastadora que atinge todos os inimigos e cura aliados na área." },
    ],
    passiva: { nome: "Instinto Selvagem", desc: "Aumenta a chance de evitar emboscadas e reduz dano de armadilhas." },
    ultimate: { nome: "Fúria da Natureza", desc: "O Andarilho convoca a força da natureza, causando uma tempestade devastadora que atinge todos os inimigos e cura aliados na área." },
  },
  {
    nome: "Bardo",
    descricao: "Inspirador, manipulador de emoções e magias sonoras. Suporte, buffs e manipulação de emoções.",
    caracteristicas: [
      { nivel: "Médio", desc: "Magias de suporte" },
      { nivel: "Alto", desc: "Manipulação de emoções" },
      { nivel: "Baixo", desc: "Dano direto" },
      { nivel: "Médio", desc: "Versatilidade" },
    ],
    iniciais: [
      { nome: "Canção de Inspiração", desc: "Aumenta o ataque e defesa dos aliados próximos por alguns turnos." },
      { nome: "Nota Disruptiva", desc: "Desestabiliza a concentração de inimigos, reduzindo sua precisão." },
      { nome: "Encanto", desc: "Tenta manipular as emoções de um alvo, podendo evitar um combate." },
    ],
    avancadas: [
      { nome: "Sinfonia de Batalha", nivel: 5, desc: "Concede múltiplos bônus ao grupo e pode confundir inimigos." },
      { nome: "Solo Hipnótico", nivel: 8, desc: "Hipnotiza inimigos em área, impedindo-os de agir por 1 turno." },
      { nome: "Ópera do Destino", nivel: 15, desc: "O Bardo executa uma ópera mágica que concede múltiplos bônus ao grupo, revive aliados caídos e confunde todos os inimigos por 2 turnos." },
    ],
    passiva: { nome: "Presença Cativante", desc: "Aumenta a chance de sucesso em interações sociais e reduz hostilidade de NPCs." },
    ultimate: { nome: "Ópera do Destino", desc: "O Bardo executa uma ópera mágica que concede múltiplos bônus ao grupo, revive aliados caídos e confunde todos os inimigos por 2 turnos." },
  },
  {
    nome: "Necromante",
    descricao: "Controlador das artes sombrias e invocador de mortos-vivos. Dano sombrio, invocação e controle de campo.",
    caracteristicas: [
      { nivel: "Alto", desc: "Dano sombrio" },
      { nivel: "Médio", desc: "Controle de campo" },
      { nivel: "Baixo", desc: "Resistência física" },
      { nivel: "Médio", desc: "Invocação" },
    ],
    iniciais: [
      { nome: "Toque Macabro", desc: "Drena vida do alvo e cura o Necromante por parte do dano causado." },
      { nome: "Levantar Esqueleto", desc: "Invoca um esqueleto para lutar ao lado do Necromante." },
      { nome: "Miasma Sombrio", desc: "Cria uma nuvem tóxica que causa dano contínuo em área." },
    ],
    avancadas: [
      { nome: "Exército dos Mortos", nivel: 5, desc: "Invoca vários mortos-vivos para atacar todos os inimigos próximos." },
      { nome: "Pacto Profano", nivel: 8, desc: "Sacrifica parte da própria vida para aumentar drasticamente o poder de suas magias por alguns turnos." },
      { nome: "Ritual do Fim", nivel: 15, desc: "O Necromante realiza um ritual sombrio que sacrifica parte de sua vida para invocar um avatar da morte, causando dano extremo em todos os inimigos e ressuscitando mortos-vivos aliados." },
    ],
    passiva: { nome: "Vínculo com a Morte", desc: "Quando um aliado morre próximo, o Necromante recupera vida e poder mágico." },
    ultimate: { nome: "Ritual do Fim", desc: "O Necromante realiza um ritual sombrio que sacrifica parte de sua vida para invocar um avatar da morte, causando dano extremo em todos os inimigos e ressuscitando mortos-vivos aliados." },
  },
]
const RACES_INFO = [
  { nome: "Humano", descricao: "Versátil, bônus de experiência." },
  { nome: "Elfo", descricao: "Destreza alta, visão noturna." },
  { nome: "Anão", descricao: "Resistência, bônus contra veneno." },
  { nome: "Orc", descricao: "Força alta, fúria em combate." },
]

export default function CharacterCreationPage() {
  const [messages, setMessages] = useState([])
  const [currentStep, setCurrentStep] = useState("intro")
  const [characterData, setCharacterData] = useState({
    id: uuidv4(),
    name: "",
    gender: "",
    class: "",
    race: "",
    personality: "",
    level: 1,
    portrait: "/placeholder.svg?height=200&width=200",
  })
  const [selectedOption, setSelectedOption] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()
  const [showClassCarousel, setShowClassCarousel] = useState(false)
  const [classCarouselIndex, setClassCarouselIndex] = useState(0)
  const [showRaceCarousel, setShowRaceCarousel] = useState(false)
  const [raceCarouselIndex, setRaceCarouselIndex] = useState(0)

  // Verificar se o usuário está logado
  useEffect(() => {
    const user = localStorage.getItem("eryndor-user")
    if (!user) {
      navigate("/")
      return
    }

    // Iniciar o diálogo de criação de personagem
    startCharacterCreation()
  }, [navigate])

  // Rolar para o final das mensagens quando novas são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const startCharacterCreation = () => {
    setMessages([
      {
        sender: "system",
        content: "Iniciando criação de personagem...",
      },
      {
        sender: "npc",
        content:
          "Você acorda em uma pequena cabana. Sua cabeça dói e você não se lembra como chegou aqui. Duas pessoas estão ao seu lado, observando com curiosidade.",
      },
      {
        sender: "npc",
        content:
          "— Olá viajante! Finalmente acordou. Encontramos você desacordado na estrada. Sou Elara e este é meu irmão Thorne. Como devemos chamá-lo?",
      },
    ])
    setCurrentStep("name")
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const name = inputValue.trim()
    setCharacterData((prev) => ({ ...prev, name }))
    setMessages((prev) => [
      ...prev,
      { sender: "player", content: name },
      { sender: "npc", content: `— ${name}? Um nome forte! Bem, ${name}, você é...` },
    ])
    setInputValue("")
    setCurrentStep("gender")
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "system",
          content: "Escolha seu gênero:",
          options: ["Homem", "Mulher", "Prefiro não especificar"],
        },
      ])
    }, 1000)
  }

  const handleGenderSelect = (option) => {
    setCharacterData((prev) => ({ ...prev, gender: option }))
    setMessages((prev) => [
      ...prev,
      { sender: "player", content: option },
      {
        sender: "npc",
        content: `— Entendo. E qual é sua especialidade, ${characterData.name}? Você parece ter habilidades de combate.`,
      },
    ])
    setCurrentStep("class")
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "system",
          content: "Escolha sua classe:",
          options: ["Cruzado", "Mago", "Ladino", "Andarilho", "Bardo", "Necromante", "Estou em dúvida"],
        },
      ])
    }, 1000)
  }

  const showClassInfo = () => {
    setShowClassCarousel(true)
    setClassCarouselIndex(0)
  }

  const handleClassSelect = (option) => {
    if (option === "Estou em dúvida") {
      showClassInfo()
      return
    }
    setShowClassCarousel(false)
    setCharacterData((prev) => ({ ...prev, class: option }))
    setMessages((prev) => [
      ...prev,
      { sender: "player", content: option },
      {
        sender: "npc",
        content: `— Um ${option.toLowerCase()}! Impressionante. Agora, qual sua raça?`,
      },
    ])
    setCurrentStep("race")
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "system",
          content: "Escolha sua raça:",
          options: ["Humano", "Elfo", "Anão", "Orc", "Estou em dúvida"],
        },
      ])
    }, 1000)
  }

  const showRaceInfo = () => {
    setShowRaceCarousel(true)
    setRaceCarouselIndex(0)
  }

  const handleRaceSelect = (option) => {
    if (option === "Estou em dúvida") {
      showRaceInfo()
      return
    }
    setShowRaceCarousel(false)
    setCharacterData((prev) => ({ ...prev, race: option }))
    setMessages((prev) => [
      ...prev,
      { sender: "player", content: option },
      {
        sender: "npc",
        content: `— Interessante! Conte-nos um pouco sobre sua personalidade ou objetivos.`,
      },
    ])
    setCurrentStep("personality")
  }

  const handlePersonalitySubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const personality = inputValue.trim()
    setCharacterData((prev) => ({ ...prev, personality }))
    setMessages((prev) => [
      ...prev,
      { sender: "player", content: personality },
      {
        sender: "npc",
        content: `— Fascinante! Bem, ${characterData.name}, descanse mais um pouco. Amanhã mostraremos a você o caminho para a cidade mais próxima. Sua jornada em Eryndor está apenas começando.`,
      },
      {
        sender: "system",
        content:
          "Personagem criado com sucesso! Você será redirecionado para a seleção de personagens em alguns segundos...",
      },
    ])
    setInputValue("")
    setCurrentStep("complete")

    // Salvar o personagem no localStorage
    setTimeout(() => {
      const existingCharacters = localStorage.getItem("eryndor-characters")
      const characters = existingCharacters ? JSON.parse(existingCharacters) : []
      characters.push(characterData)
      localStorage.setItem("eryndor-characters", JSON.stringify(characters))
      navigate("/character-select")
    }, 3000)
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    if (currentStep === "gender") {
      handleGenderSelect(option)
    } else if (currentStep === "class") {
      handleClassSelect(option)
    } else if (currentStep === "race") {
      handleRaceSelect(option)
    }
  }

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/character-select" className="flex items-center gap-2 hover-lift">
              <ArrowLeft className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-medium">Voltar</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
            <h1 className="text-2xl font-bold gradient-text">Criação de Personagem</h1>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="chat-messages scroll-area">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === "player" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === "system"
                        ? "message-system"
                        : msg.sender === "npc"
                          ? "message-npc"
                          : "message-player"
                    }`}
                  >
                    {msg.sender === "npc" && (
                      <div className="message-sender">
                        <div className="message-sender-icon message-sender-npc">NPC</div>
                        <span className="text-amber-400">Elara/Thorne</span>
                      </div>
                    )}
                    {msg.sender === "player" && (
                      <div className="message-sender">
                        <div className="message-sender-icon message-sender-player">
                          <User className="h-3 w-3" />
                        </div>
                        <span className="text-green-400">{characterData.name || "Você"}</span>
                      </div>
                    )}
                    <p className="text-sm">{msg.content}</p>

                    {msg.options && (
                      <div className="message-options">
                        {msg.options.map((option) => (
                          <button
                            key={option}
                            className={`btn btn-outline ${
                              selectedOption === option ? "bg-amber-900/30 border-amber-600" : ""
                            }`}
                            onClick={() => handleOptionSelect(option)}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Carrossel de Classes */}
              {showClassCarousel && (
                <div className="flex justify-center">
                  <div className="bg-secondary rounded-lg p-6 w-full max-w-md flex flex-col items-center border border-amber-700">
                    <h3 className="text-2xl font-bold text-amber-500 mb-2">{CLASSES_INFO[classCarouselIndex].nome}</h3>
                    <p className="text-gray-200 mb-2 text-center">{CLASSES_INFO[classCarouselIndex].descricao}</p>
                    <div className="mb-2 w-full">
                      <h4 className="font-bold text-amber-400">Características</h4>
                      <ul className="text-sm mb-2">
                        {CLASSES_INFO[classCarouselIndex].caracteristicas.map((c, i) => (
                          <li key={i}><span className="font-bold">{c.nivel}:</span> {c.desc}</li>
                        ))}
                      </ul>
                      <h4 className="font-bold text-amber-400">Habilidades Iniciais</h4>
                      <ul className="text-sm mb-2">
                        {CLASSES_INFO[classCarouselIndex].iniciais.map((h, i) => (
                          <li key={i}><span className="font-bold">{h.nome}:</span> {h.desc}</li>
                        ))}
                      </ul>
                      <h4 className="font-bold text-amber-400">Habilidades Avançadas</h4>
                      <ul className="text-sm mb-2">
                        {CLASSES_INFO[classCarouselIndex].avancadas.map((h, i) => (
                          <li key={i}><span className="font-bold">{h.nome} (Nível {h.nivel}):</span> {h.desc}</li>
                        ))}
                      </ul>
                      <h4 className="font-bold text-amber-400">Passiva Especial</h4>
                      <div className="text-sm mb-2"><span className="font-bold">{CLASSES_INFO[classCarouselIndex].passiva.nome}:</span> {CLASSES_INFO[classCarouselIndex].passiva.desc}</div>
                    </div>
                    <div className="flex gap-4 mt-2">
                      <button
                        className="btn btn-outline"
                        onClick={() => setClassCarouselIndex((i) => (i === 0 ? CLASSES_INFO.length - 1 : i - 1))}
                      >Anterior</button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setShowClassCarousel(false)
                          handleClassSelect(CLASSES_INFO[classCarouselIndex].nome)
                        }}
                      >Escolher {CLASSES_INFO[classCarouselIndex].nome}</button>
                      <button
                        className="btn btn-outline"
                        onClick={() => setClassCarouselIndex((i) => (i === CLASSES_INFO.length - 1 ? 0 : i + 1))}
                      >Próximo</button>
                    </div>
                  </div>
                </div>
              )}
              {/* Carrossel de Raças */}
              {showRaceCarousel && (
                <div className="flex justify-center">
                  <div className="bg-secondary rounded-lg p-6 w-full max-w-md flex flex-col items-center border border-amber-700">
                    <h3 className="text-2xl font-bold text-amber-500 mb-2">{RACES_INFO[raceCarouselIndex].nome}</h3>
                    <p className="text-gray-200 mb-4 text-center">{RACES_INFO[raceCarouselIndex].descricao}</p>
                    <div className="flex gap-4">
                      <button
                        className="btn btn-outline"
                        onClick={() => setRaceCarouselIndex((i) => (i === 0 ? RACES_INFO.length - 1 : i - 1))}
                      >Anterior</button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setShowRaceCarousel(false)
                          handleRaceSelect(RACES_INFO[raceCarouselIndex].nome)
                        }}
                      >Escolher {RACES_INFO[raceCarouselIndex].nome}</button>
                      <button
                        className="btn btn-outline"
                        onClick={() => setRaceCarouselIndex((i) => (i === RACES_INFO.length - 1 ? 0 : i + 1))}
                      >Próximo</button>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="chat-input">
          {(currentStep === "name" || currentStep === "personality") && (
            <form
              onSubmit={currentStep === "name" ? handleNameSubmit : handlePersonalitySubmit}
              className="chat-input-form"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  currentStep === "name" ? "Digite seu nome..." : "Descreva sua personalidade ou objetivos..."
                }
                className="input chat-input-field"
              />
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  )
}
