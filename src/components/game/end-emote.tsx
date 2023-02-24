export default function EndEmoteIcon(props: {
  icon: any;
  highlighted: boolean;
}) {
  return (
    <div
      className={`flex w-1/3 cursor-pointer flex-col items-center gap-1 rounded-lg border-[1px] border-neutral-700 p-4 px-9 text-white transition ${
        props.highlighted ? "bg-purple-900" : ""
      }`}
    >
      <props.icon></props.icon>
    </div>
  );
}
