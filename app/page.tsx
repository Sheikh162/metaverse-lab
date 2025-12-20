"use client";

import { useState } from "react";
import NetVerseEngine from "@/components/game/NetVerseEngine";
import LobbyScreen from "@/components/landing/LobbyScreen";

export default function Home() {
  const [inGame, setInGame] = useState(false);
  const [userData, setUserData] = useState({ name: "", role: "" });

  if (!inGame) {
    return <LobbyScreen onJoin={(name, role) => {
      setUserData({ name, role });
      setInGame(true);
    }} />;
  }

  return (
    <main className="dark w-full h-screen overflow-hidden bg-black">
      {/* Pass user data if you want to display name above head later */}
      <NetVerseEngine />
    </main>
  );
}