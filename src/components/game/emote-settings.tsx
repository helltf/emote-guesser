import { useGameSettings, useGameSettingUpdate } from "./game-settings-context";
import { EmoteSet } from "./game-settings-context";

export default function EmoteSettingsButton(props: {
  children: any;
  icon: any;
  type: EmoteSet;
}) {
  const updateSettings = useGameSettingUpdate();
  const settings = useGameSettings();
  return (
    <div
      onClick={() => updateSettings(props.type, !settings[props.type])}
      className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg border-[1px] border-neutral-700 p-4 px-9 text-white transition ${
        settings[props.type] ? "bg-purple-900" : "hover:bg-neutral-600"
      }`}
    >
      <props.icon></props.icon>
      <p className="select-none">{props.children}</p>
    </div>
  );
}
