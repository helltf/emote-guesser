import { useState, useEffect } from "react";
import GameSettings from "./game-settings";
import { GameSettingsProvider } from "./game-settings-context";
import EmoteGuesser from "./guesser";

export default function Game() {
  const [open, setOpen] = useState(true);

  return (
    <GameSettingsProvider>
      <div className="min-h-[calc(100vh-120px)] bg-neutral-800 ">
        <GameSettings open={open} onClose={() => setOpen(false)}></GameSettings>
        <EmoteGuesser />
      </div>
    </GameSettingsProvider>
  );
}

type EmoteData = {
  ffz: EmoteInfo[];
  bttv: EmoteInfo[];
  sevenTv: EmoteInfo[];
};

export type EmoteInfo = {
  id: string;
  name: string;
  displayName?: string;
  animated: boolean;
};
