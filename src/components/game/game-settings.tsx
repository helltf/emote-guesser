import Link from "next/link";
import EmoteSettingsButton from "./emote-settings";

export default function GameSettings() {
  return (
    <div className="w-full h-full flex align-middle justify-center items-center ">
      <div className="p-6 rounded-md bg-neutral-900 flex flex-col gap-5 border-[1px] border-gray-600">
        <h2 className="text-white text-2xl">Game Settings</h2>
        <div className="flex flex-col gap-7">
          <input type="text" placeholder="channel" className="p-2" />
          <div className="flex gap-5">
            <EmoteSettingsButton>FFZ</EmoteSettingsButton>
            <EmoteSettingsButton>BTTV</EmoteSettingsButton>
            <EmoteSettingsButton>7tv</EmoteSettingsButton>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="p-2 px-5 border-[1px] border-neutral-700 rounded-lg text-white"
            >
              Back
            </Link>
            <button className="rounded-lg p-2 w-[70%] bg-purple-600 text-white">
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
