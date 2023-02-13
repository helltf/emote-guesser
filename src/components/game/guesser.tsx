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
  const [open, setOpen] = useState(false);

  function finish() {
    setOpen(true);
  }

  const checkFinish = (newGuessed: number) => {
    if (newGuessed === emotes.length) {
      finish();
    }
  };

  function checkEmote(e: any) {
    if (e.key === "Enter") {
      const input = e.target.value;

      const nextEmotes = [...emotes];
      const emote = nextEmotes.find(
        (e) =>
          !e.guessed ||
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
        setEmotes(data);
      });
  }, [settings]);

  if (!emotes.length) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-row p-5 gap-5 justify-between">
        <input
          className="w-1/2 outline-none p-2 border-purple-700 rounded-md border-2"
          placeholder="enter emote"
          onChange={(e) => {
            setEmoteInput(e.target.value);
          }}
          value={emoteInput}
          onKeyDown={checkEmote}
        ></input>
        <div className="flex gap-5 ">
          <div className="h-full rounded-md bg-purple-600 flex items-center p-2 px-5 border-[1px] border-neutral-700">
            <Timer
              onFinish={() => {
                finish();
              }}
            />
          </div>
          <div className="h-full rounded-md bg-purple-600 flex items-center p-2 px-5 border-[1px] border-neutral-700">
            <p className="text-white">
              {guessed}/{emotes.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <EmoteList emotes={emotes}></EmoteList>
      </div>
      {open ? <div></div> : <></>}
    </>
  );
}
