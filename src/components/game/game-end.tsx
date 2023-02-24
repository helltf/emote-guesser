import Image from "next/image";
import { useGameSettings } from "./game-settings-context";
import { GameEndType } from "./guesser";

export default function GameEndModal(props: {
  emoteGuessed: number;
  emoteCount: number;
  endType: GameEndType;
  currentTime: number;
}) {
  const settings = useGameSettings();
  const title = getTitle(props.endType);
  const seconds = props.currentTime % 60;
  const minutes = Math.floor(props.currentTime / 60);
  return (
    <div className="fixed top-1/2 left-1/2 flex w-96 translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-md border-[1px] border-gray-600 bg-neutral-900 p-5">
      <h2 className="text-3xl text-white">{title}</h2>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="text-sm text-purple-400">Channel</p>
            <p className="text-3xl text-white">{settings.channelName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-purple-400">Time left</p>
            <p className="text-3xl text-white">
              {minutes}min {seconds}s
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-purple-400">Emotes guessed</p>
            <p className="text-3xl text-white">
              {props.emoteGuessed}/{props.emoteCount}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-purple-400">Emotetypes</p>
            <p className="text-3xl text-white">{settings.ffz ? "ffz" : ""}</p>
            <p className="text-3xl text-white">{settings.bttv ? "bttv" : ""}</p>
            <p className="text-3xl text-white">
              {settings.seventv ? "seventv" : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <button className="rounded-md bg-purple-600">
            <ShareIcon></ShareIcon>
          </button>
          <button className="rounded-md bg-purple-600">
            <RestartIcon></RestartIcon>
          </button>
        </div>
      </div>
    </div>
  );
}

function RestartIcon() {
  return (
    <svg className="fill-white" width="48" height="48" viewBox="-7.5 0 32 32">
      <path d="M15.88 13.84c-1.68-3.48-5.44-5.24-9.040-4.6l0.96-1.8c0.24-0.4 0.080-0.92-0.32-1.12-0.4-0.24-0.92-0.080-1.12 0.32l-1.96 3.64c0 0-0.44 0.72 0.24 1.040l3.64 1.96c0.12 0.080 0.28 0.12 0.4 0.12 0.28 0 0.6-0.16 0.72-0.44 0.24-0.4 0.080-0.92-0.32-1.12l-1.88-1.040c2.84-0.48 5.8 0.96 7.12 3.68 1.6 3.32 0.2 7.32-3.12 8.88-1.6 0.76-3.4 0.88-5.080 0.28s-3.040-1.8-3.8-3.4c-0.76-1.6-0.88-3.4-0.28-5.080 0.16-0.44-0.080-0.92-0.52-1.080-0.4-0.080-0.88 0.16-1.040 0.6-0.72 2.12-0.6 4.36 0.36 6.36s2.64 3.52 4.76 4.28c0.92 0.32 1.84 0.48 2.76 0.48 1.24 0 2.48-0.28 3.6-0.84 4.16-2 5.92-7 3.92-11.12z"></path>
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      fill="none"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 13L20 18C20 19.1046 19.1046 20 18 20L6 20C4.89543 20 4 19.1046 4 18L4 13"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 8L12 4M12 4L8 8M12 4L12 16"
        stroke="#ffffff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function getTitle(endType: GameEndType) {
  if (endType === GameEndType.TIME_UP) return "Time's up!";
  if (endType === GameEndType.STOPPED) return "Stopped";
  return "Emotes guessed!";
}
