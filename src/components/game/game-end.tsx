export default function GameEndModal(props: {
  time: number;
  emoteGuessed: number;
  emoteCount: number;
  channel: string;
}) {
  return (
    <div className="text-white flex flex-col">
      <p>{props.channel}</p>
      <p>{props.time}</p>
      <p>
        {props.emoteGuessed}/{props.emoteCount}
      </p>
    </div>
  );
}
