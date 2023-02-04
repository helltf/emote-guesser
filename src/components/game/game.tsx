import { useState, useEffect } from "react";
import GameSettings from "./game-settings";
import EmoteGuesser from "./guesser";

export default function Game() {
  const [open, setOpen] = useState(true);
  const [channelName, setChannelName] = useState("");
  const [emoteSet, setEmoteSet] = useState({
    emotesets: {
      bttv: false,
      ffz: false,
      seventv: false,
    },
  });
  const [timer, setTimer] = useState({ min: 0, sec: 0 });

  return (
    <div className="h-[calc(100vh-120px)] bg-neutral-800">
      {open ? (
        <GameSettings onClose={() => setOpen(false)}></GameSettings>
      ) : (
        <EmoteGuesser />
      )}
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
