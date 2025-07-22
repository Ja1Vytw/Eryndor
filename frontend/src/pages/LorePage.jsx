import { Link } from "react-router-dom"

const LorePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-white">
      <header className="border-b py-6 px-4 md:px-6 bg-secondary backdrop-filter backdrop-blur-lg">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-amber-500 animate-glow"
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
              <path d="M7 10v12l5-3 5 3V10" />
              <path d="M15 5.88 14 .5a.5.5 0 0 0-.4-.4L12 0l-1.6.1a.5.5 0 0 0-.4.4L9 5.88" />
              <path d="M9 5.88v5.24a2 2 0 0 1-.5 1.31L7 14" />
              <path d="M15 5.88v5.24a2 2 0 0 0 .5 1.31L17 14" />
            </svg>
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
            {/* Aqui você pode adicionar o LanguageSelector se quiser igual à HomePage */}
            <Link to="/game" className="btn btn-primary hover-lift">
              Enter Game
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container max-w-4xl">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold mb-4 text-amber-500">A História de Eryndor</h1>
            <p className="text-gray-400 text-lg">
              Conheça o mundo assolado pela guerra entre facções mágicas e seres das trevas
            </p>
          </div>

          {/* Blocos de história */}
          <div>
            <div className="bg-secondary p-6 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:scale-105 animate-slide-up" style={{ marginBottom: '2rem' }}>
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="h-8 w-8 text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 4.93l2.83 2.83"></path>
                  <path d="M16.24 16.24l2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M4.93 19.07l2.83-2.83"></path>
                  <path d="M16.24 7.76l2.83-2.83"></path>
                </svg>
                <h2 className="text-2xl font-bold text-amber-500 m-0">O Cristal Primordial</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Por milênios, o Cristal Primordial manteve o equilíbrio mágico em Eryndor. Esta relíquia ancestral,
                  criada pelos Primeiros Magos, canalizava e distribuía a energia arcana pelo mundo, permitindo que
                  todas as formas de magia coexistissem em harmonia.
                </p>
                <p>
                  O Cristal era guardado no Templo de Vael'Thar, no coração do continente, protegido por uma ordem de
                  magos conhecida como os Guardiões do Equilíbrio. Durante séculos, as diferentes facções mágicas - os
                  Arcanos de Lumina, os Elementalistas de Pyroth, os Druidas de Sylvaneth e os Necromantes de Mortuus -
                  respeitaram o pacto de não interferência no Cristal.
                </p>
              </div>
            </div>

            <div
              className="bg-secondary p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: "0.2s", marginBottom: '2rem' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="h-8 w-8 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12l5-3 5 3V10" />
                  <path d="M15 5.88 14 .5a.5.5 0 0 0-.4-.4L12 0l-1.6.1a.5.5 0 0 0-.4.4L9 5.88" />
                  <path d="M9 5.88v5.24a2 2 0 0 1-.5 1.31L7 14" />
                  <path d="M15 5.88v5.24a2 2 0 0 0 .5 1.31L17 14" />
                </svg>
                <h2 className="text-2xl font-bold text-red-500 m-0">A Grande Ruptura</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Há uma década, o impensável aconteceu. O Cristal Primordial foi estilhaçado em um ataque devastador ao
                  Templo de Vael'Thar. Ninguém sabe ao certo quem foi o responsável, mas suspeitas recaem sobre
                  Malekith, um antigo membro dos Necromantes de Mortuus que buscava poder absoluto.
                </p>
                <p>
                  Com a destruição do Cristal, o equilíbrio mágico de Eryndor foi rompido. Energias arcanas
                  descontroladas começaram a fluir pelo mundo, corrompendo criaturas, alterando paisagens e despertando
                  entidades antigas que dormiam nas profundezas.
                </p>
                <p>
                  As facções mágicas, antes em relativa paz, entraram em conflito aberto, cada uma acusando as outras
                  pela catástrofe e buscando controlar os fragmentos do Cristal para seus próprios fins.
                </p>
              </div>
            </div>

            <div
              className="bg-secondary p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: "0.4s", marginBottom: '2rem' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="h-8 w-8 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <h2 className="text-2xl font-bold text-blue-500 m-0">A Última Ordem</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  Dos poucos Guardiões do Equilíbrio que sobreviveram ao ataque, formou-se a Última Ordem - um grupo
                  dedicado a restaurar o Cristal Primordial e devolver o equilíbrio a Eryndor.
                </p>
                <p>
                  Liderados pela Arquimaga Elyndra, última dos antigos Guardiões, a Ordem busca indivíduos excepcionais
                  de todas as raças e origens - guerreiros, magos, ladinos, curandeiros - que possam ajudar em sua
                  missão.
                </p>
                <p>
                  A Ordem descobriu que o Cristal pode ser restaurado se todos os seus fragmentos principais forem
                  reunidos em um ritual específico. No entanto, esses fragmentos estão espalhados pelos cantos mais
                  perigosos de Eryndor, guardados por criaturas corrompidas ou em posse de facções que não desejam ver o
                  equilíbrio restaurado.
                </p>
              </div>
            </div>

            <div
              className="bg-secondary p-6 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: "0.6s", marginBottom: '2rem' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="h-8 w-8 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m12 16 4-4-4-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
                <h2 className="text-2xl font-bold text-green-500 m-0">Sua Jornada</h2>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  É aqui que sua história começa. Como um herói escolhido pela Última Ordem, você deve embarcar em uma
                  jornada perigosa para recuperar os fragmentos do Cristal Primordial.
                </p>
                <p>
                  Você enfrentará criaturas corrompidas pela magia descontrolada, explorará ruínas antigas cheias de
                  segredos e armadilhas, navegará pela política complexa das facções em guerra e eventualmente
                  confrontará aqueles que desejam usar o poder do Cristal para seus próprios fins sombrios.
                </p>
                <p>
                  O destino de Eryndor está em suas mãos. Você conseguirá restaurar o equilíbrio antes que o mundo
                  sucumba ao caos mágico?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/game"
              className="btn btn-primary btn-lg"
            >
              Iniciar Sua Jornada
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t py-4 px-4 md:px-6 text-center text-gray-400">
        <p>&copy; 2023 Eryndor. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default LorePage
