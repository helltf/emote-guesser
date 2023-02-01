import { useState } from "react";

export default function GameSettings() {
  return (
    <div className="w-full h-full flex align-middle justify-center items-center ">
      <div className=" p-5 rounded-sm bg-neutral-900 flex flex-col gap-5">
        <h2 className="text-white">Game Settings</h2>
        <div className="flex flex-col gap-5">
          <input type="text" />
          <button className="rounded-sm p-2 px-10 self-end bg-purple-600 text-white">
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
