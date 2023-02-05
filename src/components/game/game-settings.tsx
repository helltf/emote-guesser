import Image from "next/image";
import Link from "next/link";
import ffzIcon from "../../../public/ffz-icon.png";
import EmoteSettingsButton from "./emote-settings";
import { useGameSettings, useGameSettingUpdate } from "./game-settings-context";
import TimePicker from "./time-picker";

export default function GameSettings(props: { onClose: () => void }) {
  const settings = useGameSettings();
  const updateSettings = useGameSettingUpdate();
  return (
    <div className="w-full h-full flex align-middle justify-center items-center">
      <div className="p-6 rounded-md bg-neutral-900 flex flex-col gap-5 border-[1px] border-gray-600">
        <h2 className="text-white text-2xl">Game Settings</h2>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-purple-400">Enter channel name</p>
            <input
              value={settings.channelName}
              onChange={(e) => updateSettings("channelName", e.target.value)}
              type="text"
              placeholder="channel"
              className="p-3 text-xl focus-visible:outline-none bg-black rounded-md border-[1px] border-neutral-700 focus-visible:border-purple-600 transition text-white"
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
            <div className="flex gap-4 w-full justify-center items-center">
              <TimePicker type="min" limit={60} start={0} />
              <p className="text-white text-4xl">:</p>
              <TimePicker type="sec" limit={60} start={0} />
            </div>
          </div>
          <div className="flex gap-4">
            <Link
              href="/"
              className="p-2 px-5 border-[1px] border-neutral-700 rounded-lg text-white hover:bg-neutral-600 transition"
            >
              Back
            </Link>
            <button
              onClick={() => props.onClose()}
              className="rounded-lg p-2 w-[70%] bg-purple-600 text-white"
            >
              Play
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const SevenTvIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109.6 80.9"
        width="32"
        height="32"
        data-v-8f74835b=""
      >
        <g>
          <path
            d="M84.1,22.2l5-8.7,2.7-4.6L86.8.2V0H60.1l5,8.7,5,8.7,2.8,4.8H84.1"
            fill="#ffffff"
          ></path>
          <path
            d="M29,80.6l5-8.7,5-8.7,5-8.7,5-8.7,5-8.7,5-8.7L62.7,22l-5-8.7-5-8.7L49.9.1H7.7l-5,8.7L0,13.4l5,8.7v.2h32l-5,8.7-5,8.7-5,8.7-5,8.7-5,8.7L8.5,72l5,8.7v.2H29"
            fill="#ffffff"
          ></path>
          <path
            d="M70.8,80.6H86.1l5-8.7,5-8.7,5-8.7,5-8.7,3.5-6-5-8.7v-.2H89.2l-5,8.7-5,8.7-.7,1.3-5-8.7-5-8.7-.7-1.3-5,8.7-5,8.7L55,53.1l5,8.7,5,8.7,5,8.7.8,1.4"
            fill="#ffffff"
          ></path>
        </g>
      </svg>
    </>
  );
};

const FfzIcon = () => {
  return (
    <>
      <Image src={ffzIcon} width="32" height="32" alt="ffz icon"></Image>
    </>
  );
};

const BttvIcon = () => {
  return (
    <>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
      >
        <path
          fill="transparent"
          d="M249.771 150A99.771 99.922 0 0 1 150 249.922 99.771 99.922 0 0 1 50.229 150 99.771 99.922 0 0 1 150 50.078 99.771 99.922 0 0 1 249.771 150Z"
        ></path>
        <path
          fill="currentColor"
          d="M150 1.74C68.409 1.74 1.74 68.41 1.74 150S68.41 298.26 150 298.26h148.26V150.17h-.004c0-.057.004-.113.004-.17C298.26 68.409 231.59 1.74 150 1.74zm0 49c55.11 0 99.26 44.15 99.26 99.26 0 55.11-44.15 99.26-99.26 99.26-55.11 0-99.26-44.15-99.26-99.26 0-55.11 44.15-99.26 99.26-99.26z"
        ></path>
        <path
          fill="currentColor"
          d="M161.388 70.076c-10.662 0-19.42 7.866-19.42 17.67 0 9.803 8.758 17.67 19.42 17.67 10.662 0 19.42-7.867 19.42-17.67 0-9.804-8.758-17.67-19.42-17.67zm45.346 24.554-.02.022-.004.002c-5.402 2.771-11.53 6.895-18.224 11.978l-.002.002-.004.002c-25.943 19.766-60.027 54.218-80.344 80.33h-.072l-1.352 1.768c-5.114 6.69-9.267 12.762-12.098 18.006l-.082.082.022.021v.002l.004.002.174.176.052-.053.102.053-.07.072c30.826 30.537 81.213 30.431 111.918-.273 30.783-30.784 30.8-81.352.04-112.152l-.005-.004zM87.837 142.216c-9.803 0-17.67 8.758-17.67 19.42 0 10.662 7.867 19.42 17.67 19.42 9.804 0 17.67-8.758 17.67-19.42 0-10.662-7.866-19.42-17.67-19.42z"
        ></path>
      </svg>
    </>
  );
};
