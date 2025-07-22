"use client"

import { Link } from "react-router-dom"
import { Sword, Shield, Flame, User, Music, Skull, Dice1, Map } from "lucide-react"
import { AuthDialog } from "../components/AuthDialog"
import { LanguageSelector } from "../components/LanguageSelector"
import { useState } from "react"

export default function HomePage() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-primary text-gray-100 flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sword className="h-6 w-6 text-amber-500 animate-glow" />
            <h1 className="text-2xl font-bold gradient-text">Eryndor</h1>
          </div>
          <nav className="hidden md:flex gap-4">
            <Link to="/rooms" className="btn btn-ghost hover-lift">
              Salas
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
            <Link to="/rooms" className="btn btn-primary hover-lift">
              Encontrar Sala
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero py-20 px-4 md:px-6">
          <div className="hero-content">
            <div className="container text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-500">Eryndor</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                A world assolado pela guerra entre facções mágicas e seres das trevas
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/rooms" className="btn btn-primary btn-lg">
                  Encontrar Sala
                </Link>
                <Link to="/lore" className="btn btn-outline btn-lg">
                  Explorar Lore
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 bg-secondary">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-500">Características do Jogo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <User className="h-12 w-12 text-amber-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">6 Classes Únicas</h3>
                <p className="text-gray-400">Escolha entre Cruzado, Mago, Ladino, Andarilho, Bardo ou Necromante.</p>
              </div>
              <div className="card text-center">
                <Map className="h-12 w-12 text-amber-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Campanha Épica</h3>
                <p className="text-gray-400">
                  Explore 4 fases principais com missões, inimigos únicos e chefões desafiadores.
                </p>
              </div>
              <div className="card text-center">
                <Dice1 className="h-12 w-12 text-amber-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Sistema D16</h3>
                <p className="text-gray-400">
                  Um sistema de dados único com D16 para combate, testes de habilidade e eventos aleatórios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Classes Preview */}
        <section className="py-16 px-4 md:px-6">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center text-amber-500">Classes de Personagem</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-gray-200 mb-2" />
                  <h3 className="font-bold">Cruzado</h3>
                  <p className="text-sm text-gray-400">Guerreiro sagrado</p>
                </div>
              </div>
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Flame className="h-10 w-10 text-red-500 mb-2" />
                  <h3 className="font-bold">Mago</h3>
                  <p className="text-sm text-gray-400">Mestre dos elementos</p>
                </div>
              </div>
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 flex items-center justify-center text-purple-400 mb-2">
                    <svg
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
                      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
                      <path d="m14 7 3 3"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold">Ladino</h3>
                  <p className="text-sm text-gray-400">Furtivo e letal</p>
                </div>
              </div>
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="h-10 w-10 flex items-center justify-center text-green-400 mb-2">
                    <svg
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
                      <path d="M19 4v16h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12z"></path>
                      <path d="M19 16H7a2 2 0 0 0-2 2"></path>
                      <path d="M9 8h6"></path>
                      <path d="M9 12h6"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold">Andarilho</h3>
                  <p className="text-sm text-gray-400">Arqueiro e rastreador</p>
                </div>
              </div>
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Music className="h-10 w-10 text-blue-400 mb-2" />
                  <h3 className="font-bold">Bardo</h3>
                  <p className="text-sm text-gray-400">Mestre da música</p>
                </div>
              </div>
              <div className="card hover:border-amber-600 transition-colors cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <Skull className="h-10 w-10 text-purple-600 mb-2" />
                  <h3 className="font-bold">Necromante</h3>
                  <p className="text-sm text-gray-400">Mestre da morte</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/classes" className="btn btn-primary">
                Ver Detalhes das Classes
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-6 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4 text-amber-500">Pronto para a Aventura?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Junte-se à Última Ordem e restaure o equilíbrio de Eryndor. Sua jornada começa agora!
            </p>
            <Link to="/rooms" className="btn btn-primary btn-lg">
              Encontrar Sala
            </Link>
          </div>
        </section>
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

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </div>
  )
}
