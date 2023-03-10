import { EmoteInfo } from "@/api/types";
import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { useEffect, useState } from "react";
import EmoteInput from "./emote-input";
import EmoteList from "./emote-list";
import GameEndModal, { SettingsIcon } from "./game-end";
import { useGameSettings } from "./game-settings-context";
import Timer from "./game-timer";

export enum GameEndType {
  TIME_UP = "time_up",
  EMOTES_GUESSED = "emotes_guessed",
  STOPPED = "stopped",
}

export default function EmoteGuesser(props: { openSettings: () => any }) {
  const settings = useGameSettings();
  const [emotes, setEmotes] = useState<EmoteInfo[]>([]);
  const [guessed, setGuessedEmotes] = useState(0);
  const [finished, setFinished] = useState<GameEndType | null>(null);
  const [seconds, setSeconds] = useState(settings.sec + settings.min * 60);

  function finish(endType: GameEndType) {
    setFinished(endType);
  }

  function reset() {
    setGuessedEmotes(0);
    setFinished(null);
    setSeconds(settings.sec + settings.min * 60);
    const resetEmotes = [
      ...emotes.map((e) => {
        return {
          ...e,
          guessed: false,
        };
      }),
    ];
    setEmotes(resetEmotes);
  }

  function showNames() {
    setFinished(null);
    const shownEmotes = [
      ...emotes.map((e) => {
        return { ...e, guessed: true };
      }),
    ];
    setEmotes(shownEmotes);
  }

  const checkFinish = (newGuessed: number) => {
    if (newGuessed === emotes.length) {
      finish(GameEndType.EMOTES_GUESSED);
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
        data.forEach((e) => console.log(e.displayName));
      });
  }, [settings]);

  if (!emotes.length) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-row justify-between gap-5 p-5">
        <EmoteInput finished={!!finished} checkEmote={checkEmote}></EmoteInput>
        <div className="flex gap-5 ">
          <div className="flex h-full items-center rounded-md border-[1px] border-neutral-700 bg-purple-600 p-2 px-5">
            <Timer
              seconds={seconds}
              setSeconds={setSeconds}
              finished={!!finished}
              onFinish={() => {
                finish(GameEndType.TIME_UP);
              }}
            />
          </div>
          <div className="flex h-full items-center rounded-md border-[1px] border-neutral-700 bg-purple-600 p-2 px-5">
            <p className="text-white">
              {guessed}/{emotes.length}
            </p>
          </div>

              <button
                onClick={() => props.openSettings()}
                className="rounded-md bg-purple-600"
              >
                <SettingsIcon></SettingsIcon>
              </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <EmoteList emotes={emotes}></EmoteList>
      </div>
      {finished ? (
        <GameEndModal
          emoteCount={emotes.length}
          emoteGuessed={guessed}
          endType={finished}
          currentTime={seconds}
          resetGame={reset}
          showNames={showNames}
          openSettings={() => props.openSettings()}
        ></GameEndModal>
      ) : (
        <></>
      )}
    </>
  );
}
