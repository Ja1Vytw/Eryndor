import { Link } from "react-router-dom"
import { Sword, Dice1 } from "lucide-react"
import { useState } from "react"
import { LanguageSelector } from "../components/LanguageSelector"

export default function DicePage() {
  const [history, setHistory] = useState([])
  const [result, setResult] = useState(null)

  function rollDice(sides) {
    const value = Math.floor(Math.random() * sides) + 1
    setResult(value)
    setHistory([{ sides, value }, ...history.slice(0, 9)])
  }

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
        <div className="container max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-amber-500 flex items-center justify-center gap-2">
              <Dice1 className="h-8 w-8 text-amber-500" /> Rolagem de Dados
            </h1>
            <p className="text-gray-400 text-lg">Role dados clássicos de RPG (D4, D6, D8, D10, D12, D20) e veja o histórico das últimas rolagens.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {[4, 6, 8, 10, 12, 20].map(sides => (
              <button key={sides} className="btn btn-outline" onClick={() => rollDice(sides)}>
                D{sides}
              </button>
            ))}
          </div>
          {result !== null && (
            <div className="text-center mb-6">
              <div className="text-2xl">Resultado: <span className="font-bold text-amber-500">{result}</span></div>
            </div>
          )}
          <div className="bg-secondary rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">Histórico</h2>
            <ul className="space-y-1 text-sm">
              {history.length === 0 && <li className="text-gray-400">Nenhuma rolagem ainda.</li>}
              {history.map((h, i) => (
                <li key={i}>D{h.sides}: <span className="text-amber-500 font-bold">{h.value}</span></li>
              ))}
            </ul>
          </div>
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