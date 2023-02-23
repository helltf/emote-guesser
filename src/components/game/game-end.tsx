import { GameEndType } from "./guesser";

export default function GameEndModal(props: {
  time: number;
  emoteGuessed: number;
  emoteCount: number;
  channel: string;
  endType: GameEndType;
}) {
  const title = getTitle(props.endType);
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time % 60;
  return (
    <div className="fixed top-1/2 left-1/2 flex w-1/3 translate-x-[-50%] translate-y-[-50%] flex-col gap-5 rounded-md border-[1px] border-gray-600 bg-neutral-900 p-5">
      <h2 className="text-3xl text-white">{title}</h2>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="text-sm text-purple-400">Channel</p>
            <p className="text-3xl text-white">{props.channel}</p>
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
