import { EmoteInfo } from "@/api/types";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import EmoteList from "./emote-list";
import { useGameSettings } from "./game-settings-context";
import Timer from "./game-timer";

export default function EmoteGuesser() {
  const settings = useGameSettings();
  const [emoteInput, setEmoteInput] = useState("");
  const [emotes, setEmotes] = useState<EmoteInfo[]>([]);
  const [guessed, setGuessedEmotes] = useState(0);

  const checkFinish = () => {
    if (guessed === emotes.length) {
      console.log("win");
    }
  };

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
      setEmoteInput("");
      setGuessedEmotes(guessed + 1);
      checkFinish();
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
          <input
            onChange={(e) => {
              setEmoteInput(e.target.value);
            }}
            value={emoteInput}
            onKeyDown={checkEmote}
          ></input>
          <Timer onFinish={() => {}} />
          <p>
            {guessed}/{emotes.length}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <EmoteList emotes={emotes}></EmoteList>
        </div>
      </div>
    </>
  );
}
