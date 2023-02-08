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

  const checkFinish = (newGuessed: number) => {
    if (newGuessed === emotes.length) {
      console.log("win");
    }
  };

  function checkEmote(e: any) {
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
      const newGuessed = guessed + 1;
      setEmoteInput("");
      setGuessedEmotes(newGuessed);
      checkFinish(newGuessed);
      setEmotes(nextEmotes);
    }
  }

  useEffect(() => {
    const params = [
      ["ffz", String(settings.ffz)],
      ["bttv", String(settings.bttv)],
      ["seventv", String(settings.seventv)],
    ];
    const searchParams = new URLSearchParams(params);

    fetch("/api/user/" + settings.channelName + "?" + searchParams.toString())
      .then((res) => res.json())
      .then((data: EmoteInfo[]) => {
        setEmotes(data.splice(0, 4));
      });
  }, [settings]);

  if (!emotes.length) {
    return <div>nothing</div>;
  }

  return (
    <>
      <div>
        <div className="flex flex-row p-5 gap-5 justify-between">
          <input
            className="w-1/2 outline-none p-2 border-purple-700 rounded-md border-[3px]"
            placeholder="enter emote"
            onChange={(e) => {
              setEmoteInput(e.target.value);
            }}
            value={emoteInput}
            onKeyDown={checkEmote}
          ></input>
          <div>
            <Timer onFinish={() => {}} />
            <p>
              {guessed}/{emotes.length}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <EmoteList emotes={emotes}></EmoteList>
        </div>
      </div>
    </>
  );
}
