import { EmoteInfo } from "@/api/types";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import EmoteList from "./emote-list";
import { useGameSettings } from "./game-settings-context";

export default function EmoteGuesser() {
  const settings = useGameSettings();
  const [emotes, setEmotes] = useState<EmoteInfo[] | null>(null);

  useEffect(() => {
    const params = [
      ["ffz", String(settings.ffz)],
      ["bttv", String(settings.bttv)],
      ["seventv", String(settings.seventv)],
    ];
    const searchParams = new URLSearchParams(params);

    fetch("/api/user/" + settings.channelName + "?" + searchParams.toString())
      .then((res) => res.json())
      .then((data) => {
        setEmotes(data);
      });
  }, [settings]);

  if (!emotes) {
    return <div>nothing</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <EmoteList emotes={emotes}></EmoteList>
    </div>
  );
}
