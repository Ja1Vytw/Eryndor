import { Link } from "react-router-dom"
import { Sword, Shield, Flame, User, Music, Skull, Dice1, BookOpen, Users, Target, Zap, Heart, Star, Eye } from "lucide-react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
            <h1 className="text-2xl font-bold gradient-text">Eryndor</h1>
          </div>
          <nav className="hidden md:flex gap-4">
            <Link to="/game" className="btn btn-ghost hover-lift">Play Now</Link>
            <Link to="/lore" className="btn btn-ghost hover-lift">Lore</Link>
            <Link to="/classes" className="btn btn-ghost hover-lift">Classes</Link>
            <Link to="/about" className="btn btn-ghost hover-lift">About</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link to="/game" className="btn btn-primary hover-lift">Enter Game</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-amber-500">Como Jogar Eryndor</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Um guia completo para entender as regras, classes, raças e mecânicas deste mundo de fantasia épica
            </p>
          </div>

          {/* Como Funciona o Jogo */}
          <section className="mb-16" style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <BookOpen className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Como Funciona o Jogo</h2>
              <p className="text-gray-300 text-lg">Eryndor é um RPG de mesa online que combina narrativa, estratégia e sorte</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="card-header">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="card-title">Criação de Personagem</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300">Escolha sua raça, classe e personalidade. Cada escolha afeta suas habilidades e história no mundo.</p>
                </div>
              </div>
              
              <div className="card text-center">
                <div className="card-header">
                  <Target className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="card-title">Exploração e Interação</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300">Explore o mundo, converse com NPCs, descubra segredos e tome decisões que moldam sua jornada.</p>
                </div>
              </div>
              
              <div className="card text-center">
                <div className="card-header">
                  <Dice1 className="h-8 w-8 text-red-400 mx-auto mb-3" />
                  <div className="card-title">Sistema de Dados</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300">Use dados para resolver ações, combate e testes de habilidade. Sua sorte e atributos determinam o sucesso.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Regras Básicas */}
          <section className="mb-16"style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Regras Básicas</h2>
              <p className="text-gray-300 text-lg">O sistema de Eryndor é simples de aprender, mas oferece profundidade estratégica</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Sistema de Dados</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">D16 Principal</h4>
                    <p className="text-sm text-gray-300">A maioria das ações usa um dado de 16 faces. Resultados de 12+ são sucessos.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Dados Especiais</h4>
                    <p className="text-sm text-gray-300">D4, D6, D8, D10, D12 e D20 para situações específicas como dano, cura e magias.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Bônus e Penalidades</h4>
                    <p className="text-sm text-gray-300">Atributos e equipamentos podem modificar suas chances de sucesso.</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Mecânicas de Combate</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Iniciativa</h4>
                    <p className="text-sm text-gray-300">Determine quem age primeiro com base em destreza e equipamentos.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Ataque e Defesa</h4>
                    <p className="text-sm text-gray-300">Role para acertar, depois role para dano. Armadura reduz o dano recebido.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Habilidades Especiais</h4>
                    <p className="text-sm text-gray-300">Cada classe tem habilidades únicas que podem ser usadas em combate.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Classes */}
          <section className="mb-16" style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <Sword className="h-12 w-8 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Classes Disponíveis</h2>
              <p className="text-gray-300 text-lg">Escolha sua especialização e desenvolva seu estilo de jogo único</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-blue-400" />
                    <div className="card-title">Cruzado</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Guerreiro sagrado com proteção divina e habilidades de cura.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-blue">Tank</span>
                    <span className="badge badge-green">Suporte</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Flame className="h-6 w-6 text-red-400" />
                    <div className="card-title">Mago</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Mestre das artes arcanas com magias destrutivas e utilitárias.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-red">Dano</span>
                    <span className="badge badge-blue">Controle</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <User className="h-6 w-6 text-gray-400" />
                    <div className="card-title">Ladino</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Especialista em furtividade, armadilhas e ataques críticos.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-red">Dano</span>
                    <span className="badge badge-purple">Furtivo</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-green-400" />
                    <div className="card-title">Andarilho</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Explorador nato com habilidades de sobrevivência e combate à distância.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-red">Dano</span>
                    <span className="badge badge-green">Sobrevivência</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Music className="h-6 w-6 text-blue-400" />
                    <div className="card-title">Bardo</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Artista carismático que inspira aliados e confunde inimigos.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-green">Suporte</span>
                    <span className="badge badge-blue">Controle</span>
                  </div>
                </div>
              </div>
                   
              <div className="card">
                <div className="card-header">
                  <div className="flex items-center gap-3">
                    <Skull className="h-6 w-6 text-purple-400" />
                    <div className="card-title">Necromante</div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-sm text-gray-300 mb-3">Controlador das artes sombrias e invocador de mortos-vivos.</p>
                  <br />
                  <div className="flex gap-2">
                    <span className="badge badge-red">Dano</span>
                    <span className="badge badge-purple">Invocações</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          

          {/* Raças */}
          <section className="mb-16" style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Raças de Eryndor</h2>
              <p className="text-gray-300 text-lg">Cada raça traz características únicas e história rica ao mundo</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Humanos</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300 mb-4">Adaptáveis e versáteis, os humanos são conhecidos por sua determinação e capacidade de se adaptar a qualquer situação.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Força:</span>
                      <span className="text-sm text-amber-500">+1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Carisma:</span>
                      <span className="text-sm text-amber-500">+1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Habilidade:</span>
                      <span className="text-sm text-amber-500">Versatilidade</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Elfos</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300 mb-4">Imortais e graciosos, os elfos possuem uma conexão profunda com a magia e uma sabedoria milenar.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Inteligência:</span>
                      <span className="text-sm text-amber-500">+2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Destreza:</span>
                      <span className="text-sm text-amber-500">+1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Habilidade:</span>
                      <span className="text-sm text-amber-500">Resistência Mágica</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Anões</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300 mb-4">Resistentes e habilidosos artesãos, os anões são mestres da metalurgia e da construção.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Constituição:</span>
                      <span className="text-sm text-amber-500">+2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Força:</span>
                      <span className="text-sm text-amber-500">+1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Habilidade:</span>
                      <span className="text-sm text-amber-500">Artesanato</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Halflings</div>
                </div>
                <div className="card-body">
                  <p className="text-gray-300 mb-4">Pequenos e ágeis, os halflings são conhecidos por sua sorte extraordinária e natureza otimista.</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Destreza:</span>
                      <span className="text-sm text-amber-500">+2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Carisma:</span>
                      <span className="text-sm text-amber-500">+1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Habilidade:</span>
                      <span className="text-sm text-amber-500">Sorte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Atributos e Progressão */}
          <section className="mb-16" style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <Star className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Atributos e Progressão</h2>
              <p className="text-gray-300 text-lg">Desenvolva seu personagem através de aventuras e conquistas</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Atributos Principais</div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Sword className="h-5 w-5 text-red-400" />
                      <span className="font-medium">Força</span>
                    </div>
                    <span className="text-sm text-gray-400">Dano físico e carregamento</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-green-400" />
                      <span className="font-medium">Destreza</span>
                    </div>
                    <span className="text-sm text-gray-400">Precisão e esquiva</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-blue-400" />
                      <span className="font-medium">Constituição</span>
                    </div>
                    <span className="text-sm text-gray-400">Vida e resistência</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-purple-400" />
                      <span className="font-medium">Inteligência</span>
                    </div>
                    <span className="text-sm text-gray-400">Magias e conhecimento</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-amber-400" />
                      <span className="font-medium">Sabedoria</span>
                    </div>
                    <span className="text-sm text-gray-400">Percepção e vontade</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-pink-400" />
                      <span className="font-medium">Carisma</span>
                    </div>
                    <span className="text-sm text-gray-400">Persuasão e liderança</span>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Sistema de Níveis</div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Ganho de Experiência</h4>
                    <p className="text-sm text-gray-300">Complete missões, derrote inimigos e explore o mundo para ganhar XP.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Habilidades Novas</h4>
                    <p className="text-sm text-gray-300">A cada nível, aprenda novas habilidades ou melhore as existentes.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Melhoria de Atributos</h4>
                    <p className="text-sm text-gray-300">Aumente seus atributos para se tornar mais forte e versátil.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-bold text-amber-500 mb-2">Equipamentos</h4>
                    <p className="text-sm text-gray-300">Desbloqueie equipamentos mais poderosos conforme progride.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Como Começar */}
          <section className="mb-16" style={{ marginTop: '50px' }}>
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Como Começar</h2>
              <p className="text-gray-300 text-lg">Siga estes passos para iniciar sua aventura em Eryndor</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-bold text-lg mb-2">Crie sua Conta</h3>
                <p className="text-sm text-gray-300">Registre-se gratuitamente e faça login para acessar o jogo.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-bold text-lg mb-2">Escolha sua Classe</h3>
                <p className="text-sm text-gray-300">Selecione entre 6 classes únicas, cada uma com habilidades especiais.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-bold text-lg mb-2">Personalize seu Personagem</h3>
                <p className="text-sm text-gray-300">Defina nome, aparência e personalidade do seu herói.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
                <h3 className="font-bold text-lg mb-2">Entre na Aventura</h3>
                <p className="text-sm text-gray-300">Explore o mundo, complete missões e evolua seu personagem.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center" style={{ marginTop: '50px' }}>
            <div className="bg-secondary p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-3xl font-bold text-amber-500 mb-4">Pronto para a Aventura?</h2>
              <p className="text-gray-300 text-lg mb-6">
                Junte-se a milhares de jogadores em Eryndor e descubra um mundo de fantasia épica
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/game" className="btn btn-primary hover-lift">
                  Começar Agora
                </Link>
                <Link to="/classes" className="btn btn-outline hover-lift">
                  Ver Classes
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-8 px-4 md:px-6 bg-secondary">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Sword className="h-5 w-5 text-amber-500" />
            <span className="text-xl font-bold text-amber-500">Eryndor</span>
          </div>
          <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Eryndor RPG. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

