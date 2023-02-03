import { useState, useEffect } from "react";
import GameSettings from "./game-settings";

export default function Game() {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-[calc(100vh-120px)] bg-neutral-800">
      {open ? (
        <GameSettings onClose={() => setOpen(false)}></GameSettings>
      ) : null}
    </div>
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
