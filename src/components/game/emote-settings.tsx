export default function EmoteSettingsButton(props: {
  children: any;
  icon: any;
  onChange: any;
  selected: boolean;
}) {
  return (
    <div
      onClick={props.onChange}
      className={`p-4 px-9 text-white border-[1px] border-neutral-700 rounded-lg flex flex-col cursor-pointer items-center transition gap-1 ${
        props.selected ? "bg-purple-900" : "hover:bg-neutral-600"
      }`}
    >
      <props.icon></props.icon>
      <p className="select-none">{props.children}</p>
    </div>
  );
}
