import { useEffect, useState } from "react";
import EmoteList from "./emote-list";
import { useGameSettings } from "./game-settings-context";

export default function EmoteGuesser() {
  const [emotes, setEmotes] = useState<EmoteData | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/user/helltf")
      .then((res) => res.json())
      .then((data) => {
        setEmotes(data);
        setLoading(false);
      });
  }, []);

  if (!emotes) {
    return <div>nothing</div>;
  }

  return (
    <div>
      <EmoteList emotes={emotes.ffz} type="ffz"></EmoteList>
      <EmoteList emotes={emotes.bttv} type="bttv"></EmoteList>
      <EmoteList emotes={emotes.seventv} type="seventv"></EmoteList>
    </div>
  );
}

type EmoteData = {
  ffz: EmoteInfo[];
  bttv: EmoteInfo[];
  seventv: EmoteInfo[];
};

export type EmoteInfo = {
  id: string;
  name: string;
  displayName?: string;
  animated: boolean;
};
