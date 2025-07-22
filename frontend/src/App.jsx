import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import GamePage from "./pages/GamePage"
import ClassesPage from "./pages/ClassesPage"
import LorePage from "./pages/LorePage"
import AboutPage from "./pages/AboutPage"
import CharacterSelectPage from "./pages/CharacterSelectPage"
import CharacterCreationPage from "./pages/CharacterCreationPage"
import AdminPage from "./pages/AdminPage"
import DicePage from "./pages/DicePage"
import RoomsPage from "./pages/RoomsPage"
import RoomCreationPage from "./pages/RoomCreationPage"
import RoomPage from "./pages/RoomPage"
import RoomSettingsPage from "./pages/RoomSettingsPage"

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/lore" element={<LorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/character-select" element={<CharacterSelectPage />} />
        <Route path="/character-creation" element={<CharacterCreationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dice" element={<DicePage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/room-creation" element={<RoomCreationPage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/room/:roomId/settings" element={<RoomSettingsPage />} />
      </Routes>
    </div>
  )
}

export default App
