"use client"

import { useState } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

const languages = [
  { value: "pt-BR", label: "Português" },
  { value: "en-US", label: "English" },
]

export function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const handleSelectLanguage = (value) => {
    setLanguage(value)
    setOpen(false)
  }

  return (
    <div className="language-selector">
      <button className="btn btn-outline flex items-center gap-2" onClick={() => setOpen(!open)}>
        <Globe className="h-4 w-4" />
        {languages.find((lang) => lang.value === language)?.label || "Idioma"}
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="language-dropdown">
            {languages.map((lang) => (
              <div
                key={lang.value}
                className={`language-option ${language === lang.value ? "selected" : ""}`}
                onClick={() => handleSelectLanguage(lang.value)}
              >
                <Check className={`h-4 w-4 mr-2 ${language === lang.value ? "opacity-100" : "opacity-0"}`} />
                {lang.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
