import Link from "next/link";
import SevenTvIcon from "../icons/7tv-icons";
import BttvIcon from "../icons/bttv-icon";
import FfzIcon from "../icons/ffz-icons";
import EmoteSettingsButton from "./emote-settings";
import { useGameSettings, useGameSettingUpdate } from "./game-settings-context";
import TimePicker from "./time-picker";

export default function GameSettings(props: { onClose: () => void }) {
  const settings = useGameSettings();
  const updateSettings = useGameSettingUpdate();
  return (
    <div className="flex h-[calc(100vh-120px)] w-full animate-fade-in items-center justify-center align-middle">
      <div className="flex flex-col gap-5 rounded-md border-[1px] border-gray-600 bg-neutral-900 p-6">
        <h2 className="text-2xl text-white">Game Settings</h2>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-purple-400">Enter channel name</p>
            <input
              value={settings.channelName}
              onChange={(e) => updateSettings("channelName", e.target.value)}
              type="text"
              placeholder="channel"
              className="rounded-md border-[1px] border-neutral-700 bg-black p-3 text-xl text-white transition focus-visible:border-purple-600 focus-visible:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-purple-400">Select emoteset</p>
            <div className="flex gap-5">
              <EmoteSettingsButton type="ffz" icon={FfzIcon}>
                FFZ
              </EmoteSettingsButton>
              <EmoteSettingsButton type="bttv" icon={BttvIcon}>
                BTTV
              </EmoteSettingsButton>
              <EmoteSettingsButton type="seventv" icon={SevenTvIcon}>
                7tv
              </EmoteSettingsButton>
            </div>
          </div>
          <div>
            <p className="text-sm text-purple-400">Set timer</p>
            <div className="flex w-full items-center justify-center gap-4">
              <TimePicker type="min" limit={60} start={0} />
              <p className="text-4xl text-white">:</p>
              <TimePicker type="sec" limit={60} start={0} />
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="rounded-lg border-[1px] border-neutral-700 p-2 px-5 text-white transition hover:bg-neutral-600"
            >
              Home
            </Link>
            <button
              onClick={() => props.onClose()}
              className="w-[70%] rounded-lg bg-purple-600 p-2 text-white"
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
