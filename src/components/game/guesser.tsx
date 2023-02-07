import { EmoteInfo } from "@/api/types";
import { useEffect, useState } from "react";
import EmoteList from "./emote-list";
import { useGameSettings } from "./game-settings-context";

export default function EmoteGuesser() {
  const settings = useGameSettings();
  const [emotes, setEmotes] = useState<EmoteData | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/user/" + settings.channelName)
      .then((res) => res.json())
      .then((data) => {
        setEmotes(data);
        setLoading(false);
      });
  }, [settings]);

  if (!emotes) {
    return <div>nothing</div>;
  }

  return (
    <div className="flex flex-col">
      <EmoteList emotes={emotes.ffz}></EmoteList>
      <EmoteList emotes={emotes.bttv}></EmoteList>
      <EmoteList emotes={emotes.seventv}></EmoteList>
    </div>
  );
}

type EmoteData = {
  ffz: EmoteInfo[];
  bttv: EmoteInfo[];
  seventv: EmoteInfo[];
};
