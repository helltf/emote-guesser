import { useGameSettings } from "./game-settings-context";
import { GameEndType } from "./guesser";

export default function GameEndModal(props: {
  emoteGuessed: number;
  emoteCount: number;
  endType: GameEndType;
}) {
  const settings = useGameSettings();
  const title = getTitle(props.endType);
  const time = settings.sec + settings.min * 60;
  return (
    <div className="fixed top-1/2 left-1/2 flex w-80 translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-md border-[1px] border-gray-600 bg-neutral-900 p-5">
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
        </div>
        <div>
          <button>Restart Game</button>
          <button>Share Stats</button>
        </div>
      </div>
    </div>
  );
}

function getTitle(endType: GameEndType) {
  if (endType === GameEndType.TIME_UP) return "Time's up!";
  if (endType === GameEndType.STOPPED) return "Stopped";
  return "Emotes guessed!";
}
