"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Sword } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

export function AuthDialog({ open, onOpenChange }) {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando login - em uma implementação real, isso seria uma chamada API
    setTimeout(() => {
      const formData = new FormData(e.target)
      localStorage.setItem(
        "eryndor-user",
        JSON.stringify({
          id: "user-1",
          name: "Jogador",
          email: formData.get("email"),
          isLoggedIn: true,
        }),
      )
      setIsLoading(false)
      onOpenChange(false)
      navigate("/character-select")
    }, 1000)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando registro - em uma implementação real, isso seria uma chamada API
    setTimeout(() => {
      const formData = new FormData(e.target)
      localStorage.setItem(
        "eryndor-user",
        JSON.stringify({
          id: "user-" + Math.floor(Math.random() * 1000),
          name: formData.get("name"),
          email: formData.get("email"),
          isLoggedIn: true,
        }),
      )
      setIsLoading(false)
      onOpenChange(false)
      navigate("/character-select")
    }, 1000)
  }

  if (!open) return null

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <div className="dialog-header flex items-center gap-2">
          <Sword className="h-6 w-6 text-amber-500" />
          <div>
            <div className="dialog-title">Bem-vindo a Eryndor</div>
            <div className="dialog-description">Entre em sua conta para continuar sua jornada</div>
          </div>
        </div>

        <div className="tabs">
          <div className="tabs-list">
            <button
              className={`tabs-trigger ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Entrar
            </button>
            <button
              className={`tabs-trigger ${activeTab === "register" ? "active" : ""}`}
              onClick={() => setActiveTab("register")}
            >
              Registrar
            </button>
          </div>

          <div className={`tabs-content ${activeTab === "login" ? "active" : ""}`}>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="seu@email.com" required className="input" />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input id="password" name="password" type="password" required className="input" />
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>
          </div>

          <div className={`tabs-content ${activeTab === "register" ? "active" : ""}`}>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nome
                </label>
                <input id="name" name="name" placeholder="Seu nome" required className="input" />
              </div>
              <div className="form-group">
                <label htmlFor="register-email" className="form-label">
                  Email
                </label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="register-password" className="form-label">
                  Senha
                </label>
                <input id="register-password" name="password" type="password" required className="input" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password" className="form-label">
                  Confirmar Senha
                </label>
                <input id="confirm-password" name="confirmPassword" type="password" required className="input" />
              </div>
              <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
