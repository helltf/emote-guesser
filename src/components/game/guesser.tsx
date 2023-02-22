import { EmoteInfo } from "@/api/types";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import EmoteInput from "./emote-input";
import EmoteList from "./emote-list";
import GameEndModal from "./game-end";
import { useGameSettings } from "./game-settings-context";
import Timer from "./game-timer";

export default function EmoteGuesser() {
  const settings = useGameSettings();
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

  function checkEmote(input: string): boolean {
    const nextEmotes = [...emotes];
    const emote = nextEmotes.find(
      (e) =>
        !e.guessed &&
        (e.displayName?.toLowerCase() === input.toLowerCase() ||
          e.name.toLowerCase() === input.toLowerCase())
    );

    if (!emote) return false;

    emote.guessed = true;
    const newGuessed = guessed + 1;
    setGuessedEmotes(newGuessed);
    checkFinish(newGuessed);
    setEmotes(nextEmotes);
    return true;
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
      <div className="flex flex-row justify-between gap-5 p-5">
        <div className="flex gap-5 ">
          <EmoteInput checkEmote={checkEmote}></EmoteInput>
          <div className="flex h-full items-center rounded-md border-[1px] border-neutral-700 bg-purple-600 p-2 px-5">
            <Timer
              sec={settings.sec}
              min={settings.min}
              onFinish={() => {
                finish();
              }}
            />
          </div>
          <div className="flex h-full items-center rounded-md border-[1px] border-neutral-700 bg-purple-600 p-2 px-5">
            <p className="text-white">
              {guessed}/{emotes.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <EmoteList emotes={emotes}></EmoteList>
      </div>
      {open ? (
        <GameEndModal
          emoteCount={emotes.length}
          channel={settings.channelName}
          time={settings.sec + settings.min * 60}
          emoteGuessed={guessed}
        ></GameEndModal>
      ) : (
        <></>
      )}
    </>
  );
}
