import { EmoteInfo } from "@/api/types";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import EmoteList from "./emote-list";
import { useGameSettings } from "./game-settings-context";

export default function EmoteGuesser() {
  const settings = useGameSettings();
  const [emotes, setEmotes] = useState<EmoteInfo[]>([]);

  const checkEmote = (e: any) => {
    if (e.key === "Enter") {
      const input = e.target.value;

      const nextEmotes = [...emotes];
      const emote = nextEmotes.find(
        (e) =>
          e.displayName?.toLowerCase() === input.toLowerCase() ||
          e.name.toLowerCase() === input.toLowerCase()
      );

      if (!emote) return;
      emote.guessed = true;
      setEmotes(nextEmotes);
    }
  };

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

  if (!emotes.length) {
    return <div>nothing</div>;
  }

  return (
    <>
      <div>
        <div>
          <input onKeyDown={checkEmote}></input>
        </div>
        <div className="flex flex-col items-center">
          <EmoteList emotes={emotes}></EmoteList>
        </div>
      </div>
    </>
  );
}
