import SevenTvIcon from "../icons/7tv-icons";
import BttvIcon from "../icons/bttv-icon";
import FfzIcon from "../icons/ffz-icons";
import EndEmoteIcon from "./end-emote";
import { useGameSettings } from "./game-settings-context";
import { GameEndType } from "./guesser";

export default function GameEndModal(props: {
  emoteGuessed: number;
  emoteCount: number;
  endType: GameEndType;
  currentTime: number;
  resetGame: () => void;
  showNames: () => void;
  openSettings: () => void;
}) {
  const settings = useGameSettings();
  const title = getTitle(props.endType);
  const seconds = props.currentTime % 60;
  const minutes = Math.floor(props.currentTime / 60);
  return (
    <div className="fixed top-1/2 left-1/2 w-96 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex animate-fade-in flex-col gap-5 rounded-md border-[1px] border-gray-600 bg-neutral-900 p-6">
        <div className="flex justify-center">
          <h2 className="text-4xl text-white">{title}</h2>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
              <p className="text-sm text-purple-400">Emotetypes</p>
              <div className="flex gap-2">
                <EndEmoteIcon
                  highlighted={settings.ffz}
                  icon={FfzIcon}
                ></EndEmoteIcon>
                <EndEmoteIcon
                  highlighted={settings.bttv}
                  icon={BttvIcon}
                ></EndEmoteIcon>
                <EndEmoteIcon
                  highlighted={settings.seventv}
                  icon={SevenTvIcon}
                ></EndEmoteIcon>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => props.showNames()}
              className="w-36 rounded-md bg-purple-600 text-lg text-white"
            >
              Show Names
            </button>
            <div className="flex flex-row justify-end gap-3">
              <button className="rounded-md bg-purple-600">
                <ShareIcon></ShareIcon>
              </button>
              <button
                onClick={() => props.openSettings()}
                className="rounded-md bg-purple-600"
              >
                <SettingsIcon></SettingsIcon>
              </button>
              <button
                onClick={() => props.resetGame()}
                className="rounded-md bg-purple-600"
              >
                <RestartIcon></RestartIcon>
              </button>
            </div>
          </div>
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

export function SettingsIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z"
        stroke="#fff"
        stroke-width="1.5"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        stroke="#fff"
        stroke-width="1.5"
      />
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
