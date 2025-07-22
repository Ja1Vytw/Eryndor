"use client"

import { Link } from "react-router-dom"
import { Sword, Flame, Music, Skull } from 'lucide-react'
import { useState } from "react"
import { LanguageSelector } from "../components/LanguageSelector"
import { useLanguage } from "../contexts/LanguageContext"

export default function ClassesPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("cruzado")

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
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
            <LanguageSelector />
            <Link to="/game" className="btn btn-primary hover-lift">
              Enter Game
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-6xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-amber-500">Classes de Personagem</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Escolha entre seis classes únicas, cada uma com habilidades especiais e estilos de jogo distintos
            </p>
          </div>

          <div className="tabs">
            <div className="tabs-list grid grid-cols-3 md:grid-cols-6 mb-8">
              <button
                className={`tabs-trigger ${activeTab === "cruzado" ? "active" : ""}`}
                onClick={() => setActiveTab("cruzado")}
              >
                <div className="flex flex-col items-center gap-1">
                  <Sword className="h-5 w-5" />
                  <span>{t("class.crusader")}</span>
                </div>
              </button>
              <button
                className={`tabs-trigger ${activeTab === "mago" ? "active" : ""}`}
                onClick={() => setActiveTab("mago")}
              >
                <div className="flex flex-col items-center gap-1">
                  <Flame className="h-5 w-5" />
                  <span>{t("class.mage")}</span>
                </div>
              </button>
              <button
                className={`tabs-trigger ${activeTab === "ladino" ? "active" : ""}`}
                onClick={() => setActiveTab("ladino")}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
                      <path d="m14 7 3 3"></path>
                    </svg>
                  </div>
                  <span>{t("class.rogue")}</span>
                </div>
              </button>
              <button
                className={`tabs-trigger ${activeTab === "andarilho" ? "active" : ""}`}
                onClick={() => setActiveTab("andarilho")}
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="h-5 w-5 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 4v16h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12z"></path>
                      <path d="M19 16H7a2 2 0 0 0-2 2"></path>
                      <path d="M9 8h6"></path>
                      <path d="M9 12h6"></path>
                    </svg>
                  </div>
                  <span>{t("class.ranger")}</span>
                </div>
              </button>
              <button
                className={`tabs-trigger ${activeTab === "bardo" ? "active" : ""}`}
                onClick={() => setActiveTab("bardo")}
              >
                <div className="flex flex-col items-center gap-1">
                  <Music className="h-5 w-5" />
                  <span>{t("class.bard")}</span>
                </div>
              </button>
              <button
                className={`tabs-trigger ${activeTab === "necromante" ? "active" : ""}`}
                onClick={() => setActiveTab("necromante")}
              >
                <div className="flex flex-col items-center gap-1">
                  <Skull className="h-5 w-5" />
                  <span>{t("class.necromancer")}</span>
                </div>
              </button>
            </div>

            {/* CRUZADO */}
            <div className={`tabs-content ${activeTab === "cruzado" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <Sword className="h-8 w-8 text-gray-200" />
                        <div>
                          <div className="card-title text-2xl text-amber-500">Cruzado</div>
                          <div className="card-description">Guerreiro sagrado, defensor da luz contra as trevas</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Os Cruzados são guerreiros sagrados que juraram proteger Eryndor das forças das trevas.
                        Treinados tanto nas artes marciais quanto em magias divinas básicas, eles canalizam sua fé
                        inabalável em uma força que tanto protege aliados quanto destrói inimigos. Sua armadura pesada e
                        escudos encantados os tornam baluartes no campo de batalha.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="badge badge-red">Alto</span>
                            <span>Resistência a dano</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-amber">Médio</span>
                            <span>Dano corpo a corpo</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-amber">Médio</span>
                            <span>Magias de suporte</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-stone">Baixo</span>
                            <span>Dano à distância</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Habilidades Iniciais</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Escudo Divino</h4>
                        <p className="text-sm text-gray-400">
                          Cria uma barreira de luz que reduz todo dano recebido em 50% por 3 turnos. Enquanto ativa,
                          seus ataques causam dano radiante adicional.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Martelo da Justiça</h4>
                        <p className="text-sm text-gray-400">
                          Um poderoso golpe que causa dano físico e radiante, com 30% de chance de atordoar inimigos
                          não-sagrados por 1 turno.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Aura de Coragem</h4>
                        <p className="text-sm text-gray-400">
                          Emite uma aura que concede a todos os aliados em um raio de 5 metros resistência a efeitos de
                          medo e +2 em rolagens de ataque por 3 turnos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Habilidades Avançadas</div>
                      <div className="card-description">Desbloqueadas com progressão de nível</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Julgamento Celestial</h4>
                          <span className="badge badge-amber">Nível 5</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          Invoca um raio de luz divina que causa dano massivo a um único alvo. Contra mortos-vivos e
                          demônios, o dano é dobrado.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Consagração</h4>
                          <span className="badge badge-amber">Nível 8</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          Consagra o terreno em um raio de 10 metros. Aliados nesta área recuperam 5% de vida por turno,
                          enquanto inimigos das trevas sofrem dano contínuo.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Milagre Sagrado</h4>
                          <span className="badge badge-red">Nível 15</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          O Cruzado invoca uma luz celestial que cura todos os aliados, remove efeitos negativos e concede invulnerabilidade por 1 turno. Inimigos próximos recebem dano radiante massivo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Passiva Especial</div>
                    </div>
                    <div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Fé Inabalável</h4>
                        <p className="text-sm text-gray-400">
                          Quando sua vida cai abaixo de 25%, o Cruzado é envolto em luz divina, ganhando imunidade a
                          efeitos negativos e aumentando seu dano em 20% por 5 turnos. Este efeito pode ocorrer uma vez
                          a cada combate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MAGO */}
            <div className={`tabs-content ${activeTab === "mago" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <Flame className="h-8 w-8 text-red-500" />
                        <div>
                          <div className="card-title text-2xl text-amber-500">Mago</div>
                          <div className="card-description">Mestre das artes arcanas e manipulador dos elementos</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Os Magos são estudiosos dedicados das artes arcanas, passando décadas decifrando tomos antigos e
                        aperfeiçoando fórmulas mágicas complexas. Especialistas na manipulação dos elementos
                        primordiais, eles podem invocar tempestades de fogo, relâmpagos devastadores e barreiras arcanas
                        impenetráveis. Embora fisicamente frágeis, seu poder de destruição à distância é inigualável.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="badge badge-red">Alto</span>
                            <span>Dano em área</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-red">Alto</span>
                            <span>Dano à distância</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-stone">Baixo</span>
                            <span>Resistência</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="badge badge-amber">Médio</span>
                            <span>Controle de campo</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Habilidades Iniciais</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Bola de Fogo</h4>
                        <p className="text-sm text-gray-400">
                          Conjura uma esfera de chamas que explode ao atingir o alvo, causando dano em área e deixando o
                          terreno em chamas por 2 turnos.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Raio Arcano</h4>
                        <p className="text-sm text-gray-400">
                          Dispara um raio de energia pura que causa alto dano a um único alvo e ignora 50% da
                          resistência mágica.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Barreira Arcana</h4>
                        <p className="text-sm text-gray-400">
                          Cria uma barreira mágica que absorve dano e reflete 30% do dano mágico de volta ao atacante.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Habilidades Avançadas</div>
                      <div className="card-description">Desbloqueadas com progressão de nível</div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Tempestade de Gelo</h4>
                          <span className="badge badge-amber">Nível 5</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          Invoca uma tempestade de gelo que causa dano em área e reduz a velocidade dos inimigos atingidos.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Prisão Etérea</h4>
                          <span className="badge badge-amber">Nível 8</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          Aprisiona um inimigo em uma dimensão paralela por 1 turno, tornando-o incapaz de agir ou ser alvo.
                        </p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-bold">Cataclismo Arcano</h4>
                          <span className="badge badge-red">Nível 15</span>
                        </div>
                        <p className="text-sm text-gray-400">
                          Libera uma explosão de energia arcana devastadora, causando dano massivo em todos os inimigos na área e aplicando efeitos aleatórios de controle.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">Passiva Especial</div>
                    </div>
                    <div>
                      <div className="p-3 border rounded-md">
                        <h4 className="font-bold">Mente Brilhante</h4>
                        <p className="text-sm text-gray-400">
                          Sempre que o Mago conjura uma magia, há chance de reduzir o custo de mana da próxima magia em 50%. Além disso, recebe resistência aumentada a magias de controle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LADINO */}
            <div className={`tabs-content ${activeTab === "ladino" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <svg className="h-8 w-8 text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path></svg>
                        <div>
                          <div className="card-title text-2xl text-amber-500">Ladino</div>
                          <div className="card-description">Mestre da furtividade, armadilhas e ataques rápidos</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Ladinos são especialistas em se mover nas sombras, desarmar armadilhas e atacar onde o inimigo menos espera. Sua agilidade e astúcia os tornam indispensáveis em missões de infiltração e sabotagem. Embora não sejam tão resistentes quanto guerreiros, compensam com evasão e golpes críticos devastadores.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Dano corpo a corpo</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-red">Alto</span><span>Chance de crítico</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-stone">Baixo</span><span>Resistência</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Furtividade</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Iniciais</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Ataque Furtivo</h4><p className="text-sm text-gray-400">Causa dano extra ao atacar inimigos desprevenidos ou pelas costas.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Desarmar Armadilha</h4><p className="text-sm text-gray-400">Permite detectar e desarmar armadilhas em ambientes perigosos.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Evasão</h4><p className="text-sm text-gray-400">Chance de evitar completamente ataques de área ou magias.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Avançadas</div><div className="card-description">Desbloqueadas com progressão de nível</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Golpe Sombrio</h4><span className="badge badge-amber">Nível 5</span></div><p className="text-sm text-gray-400">Um ataque rápido que pode atordoar o alvo e aumentar a furtividade do Ladino.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Mestre das Sombras</h4><span className="badge badge-amber">Nível 8</span></div><p className="text-sm text-gray-400">Permite ao Ladino ficar invisível por alguns turnos ou até atacar.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Execução Sombria</h4><span className="badge badge-red">Nível 15</span></div><p className="text-sm text-gray-400">O Ladino realiza uma série de ataques críticos em sequência, podendo eliminar instantaneamente inimigos com pouca vida e se tornar invisível após o uso.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Passiva Especial</div></div>
                    <div><div className="p-3 border rounded-md"><h4 className="font-bold">Reflexos Sobrenaturais</h4><p className="text-sm text-gray-400">Aumenta a chance de esquiva e reduz o dano recebido de ataques surpresa.</p></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ANDARILHO */}
            <div className={`tabs-content ${activeTab === "andarilho" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <svg className="h-8 w-8 text-green-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 4v16h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12z"></path><path d="M19 16H7a2 2 0 0 0-2 2"></path><path d="M9 8h6"></path><path d="M9 12h6"></path></svg>
                        <div>
                          <div className="card-title text-2xl text-amber-500">Andarilho</div>
                          <div className="card-description">Especialista em sobrevivência, rastreamento e combate à distância</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Andarilhos são exploradores natos, capazes de sobreviver em qualquer ambiente hostil. Mestres do arco e da furtividade, são excelentes em rastrear inimigos e evitar emboscadas. Sua conexão com a natureza lhes concede habilidades únicas de camuflagem e conhecimento de ervas.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><span className="badge badge-red">Alto</span><span>Dano à distância</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Furtividade</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-stone">Baixo</span><span>Resistência mágica</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Sobrevivência</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Iniciais</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Tiro Preciso</h4><p className="text-sm text-gray-400">Dispara uma flecha com precisão, causando dano aumentado a alvos distantes.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Rastreamento</h4><p className="text-sm text-gray-400">Permite encontrar rastros e identificar perigos no ambiente.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Camuflagem</h4><p className="text-sm text-gray-400">Dificulta ser detectado por inimigos em ambientes naturais.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Avançadas</div><div className="card-description">Desbloqueadas com progressão de nível</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Chuva de Flechas</h4><span className="badge badge-amber">Nível 5</span></div><p className="text-sm text-gray-400">Ataca todos os inimigos em uma área com múltiplas flechas.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Companheiro Animal</h4><span className="badge badge-amber">Nível 8</span></div><p className="text-sm text-gray-400">Invoca um animal para ajudar em combate ou exploração.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Fúria da Natureza</h4><span className="badge badge-red">Nível 15</span></div><p className="text-sm text-gray-400">O Andarilho convoca a força da natureza, causando uma tempestade devastadora que atinge todos os inimigos e cura aliados na área.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Passiva Especial</div></div>
                    <div><div className="p-3 border rounded-md"><h4 className="font-bold">Instinto Selvagem</h4><p className="text-sm text-gray-400">Aumenta a chance de evitar emboscadas e reduz dano de armadilhas.</p></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* BARDO */}
            <div className={`tabs-content ${activeTab === "bardo" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <Music className="h-8 w-8 text-blue-400" />
                        <div>
                          <div className="card-title text-2xl text-amber-500">Bardo</div>
                          <div className="card-description">Inspirador, manipulador de emoções e magias sonoras</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Bardos são artistas carismáticos que usam música e palavras para inspirar aliados e confundir inimigos. Suas canções podem curar, fortalecer ou até mesmo manipular emoções. Embora não sejam os mais fortes fisicamente, sua versatilidade e apoio ao grupo são inigualáveis.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Magias de suporte</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-red">Alto</span><span>Manipulação de emoções</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-stone">Baixo</span><span>Dano direto</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Versatilidade</span></li>
                        </ul> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Iniciais</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Canção de Inspiração</h4><p className="text-sm text-gray-400">Aumenta o ataque e defesa dos aliados próximos por alguns turnos.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Nota Disruptiva</h4><p className="text-sm text-gray-400">Desestabiliza a concentração de inimigos, reduzindo sua precisão.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Encanto</h4><p className="text-sm text-gray-400">Tenta manipular as emoções de um alvo, podendo evitar um combate.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Avançadas</div><div className="card-description">Desbloqueadas com progressão de nível</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Sinfonia de Batalha</h4><span className="badge badge-amber">Nível 5</span></div><p className="text-sm text-gray-400">Concede múltiplos bônus ao grupo e pode confundir inimigos.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Solo Hipnótico</h4><span className="badge badge-amber">Nível 8</span></div><p className="text-sm text-gray-400">Hipnotiza inimigos em área, impedindo-os de agir por 1 turno.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Ópera do Destino</h4><span className="badge badge-red">Nível 15</span></div><p className="text-sm text-gray-400">O Bardo executa uma ópera mágica que concede múltiplos bônus ao grupo, revive aliados caídos e confunde todos os inimigos por 2 turnos.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Passiva Especial</div></div>
                    <div><div className="p-3 border rounded-md"><h4 className="font-bold">Presença Cativante</h4><p className="text-sm text-gray-400">Aumenta a chance de sucesso em interações sociais e reduz hostilidade de NPCs.</p></div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* NECROMANTE */}
            <div className={`tabs-content ${activeTab === "necromante" ? "active" : ""}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="card">
                    <div className="card-header">
                      <div className="flex items-center gap-3">
                        <Skull className="h-8 w-8 text-purple-400" />
                        <div>
                          <div className="card-title text-2xl text-amber-500">Necromante</div>
                          <div className="card-description">Controlador das artes sombrias e invocador de mortos-vivos</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Necromantes são magos que trilharam o caminho proibido das artes sombrias. Capazes de invocar mortos-vivos, drenar energia vital e manipular a morte, são temidos e respeitados. Sua defesa física é baixa, mas compensam com magias destrutivas e controle de campo.
                      </p>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Características</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2"><span className="badge badge-red">Alto</span><span>Dano sombrio</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Controle de campo</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-stone">Baixo</span><span>Resistência física</span></li>
                          <li className="flex items-center gap-2"><span className="badge badge-amber">Médio</span><span>Invocação</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Iniciais</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Toque Macabro</h4><p className="text-sm text-gray-400">Drena vida do alvo e cura o Necromante por parte do dano causado.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Levantar Esqueleto</h4><p className="text-sm text-gray-400">Invoca um esqueleto para lutar ao lado do Necromante.</p></div>
                      <div className="p-3 border rounded-md"><h4 className="font-bold">Miasma Sombrio</h4><p className="text-sm text-gray-400">Cria uma nuvem tóxica que causa dano contínuo em área.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Habilidades Avançadas</div><div className="card-description">Desbloqueadas com progressão de nível</div></div>
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Exército dos Mortos</h4><span className="badge badge-amber">Nível 5</span></div><p className="text-sm text-gray-400">Invoca vários mortos-vivos para atacar todos os inimigos próximos.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Pacto Profano</h4><span className="badge badge-amber">Nível 8</span></div><p className="text-sm text-gray-400">Sacrifica parte da própria vida para aumentar drasticamente o poder de suas magias por alguns turnos.</p></div>
                      <div className="p-3 border rounded-md"><div className="flex justify-between"><h4 className="font-bold">Ritual do Fim</h4><span className="badge badge-red">Nível 15</span></div><p className="text-sm text-gray-400">O Necromante realiza um ritual sombrio que sacrifica parte de sua vida para invocar um avatar da morte, causando dano extremo em todos os inimigos e ressuscitando mortos-vivos aliados.</p></div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header"><div className="card-title">Passiva Especial</div></div>
                    <div><div className="p-3 border rounded-md"><h4 className="font-bold">Vínculo com a Morte</h4><p className="text-sm text-gray-400">Quando um aliado morre próximo, o Necromante recupera vida e poder mágico.</p></div></div>
                  </div>
                </div>
              </div>
            </div>
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