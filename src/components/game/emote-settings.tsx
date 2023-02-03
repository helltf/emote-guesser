import { useState } from "react";

export default function EmoteSettingsButton(props: {
  children: any;
  icon: any;
}) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`p-4 px-9 text-white border-[1px] border-neutral-700 rounded-lg flex flex-col cursor-pointer items-center transition gap-1 ${
        selected ? "bg-purple-900" : "hover:bg-neutral-600"
      }`}
    >
      <props.icon></props.icon>
      <p className="select-none">{props.children}</p>
    </div>
  );
}
