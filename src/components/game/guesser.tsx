import { EmoteInfo } from "@/api/types";
import { useEffect, useState } from "react";
import EmoteList from "./emote-list";

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
