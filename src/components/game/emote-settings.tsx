import { EmoteSet } from "@/api/7tv";
import { useGameSettings, useGameSettingUpdate } from "./game-settings-context";

export default function EmoteSettingsButton(props: {
  children: any;
  icon: any;
  type: EmoteSet;
}) {
  const updateSettings = useGameSettingUpdate();
  const settings = useGameSettings();
  return (
    <div
      className={`p-4 px-9 text-white border-[1px] border-neutral-700 rounded-lg flex flex-col cursor-pointer items-center transition gap-1 ${
        settings[props.type] ? "bg-purple-900" : "hover:bg-neutral-600"
      }`}
    >
      <props.icon></props.icon>
      <p className="select-none">{props.children}</p>
    </div>
  );
}
