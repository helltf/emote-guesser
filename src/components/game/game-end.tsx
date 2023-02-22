export default function GameEndModal(props: {
  time: number;
  emoteGuessed: number;
  emoteCount: number;
  channel: string;
}) {
  const title = "End";
  return (
    <div className="absolute left-1/2 top-1/2 flex flex-col rounded-sm border-black bg-neutral-500 p-7 px-10 text-white">
      <p>{title}</p>
      <p>{props.channel}</p>
      <p>{props.time}</p>
      <p>
        {props.emoteGuessed}/{props.emoteCount}
      </p>
    </div>
  );
}
