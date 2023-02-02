import { useState } from "react";

export default function EmoteSettingsButton(props: { children: any }) {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <button
        className={`p-2 px-4 text-white border-[1px] border-neutral-700 rounded-lg ${
          selected ? "border-purple-600" : ""
        }`}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        {props.children}
      </button>
    </div>
  );
}
