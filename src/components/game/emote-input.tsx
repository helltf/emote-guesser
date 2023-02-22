import { useState } from "react";

export default function EmoteInput({
  checkEmote,
}: {
  checkEmote: (emote: string) => boolean;
}) {
  const [emoteInput, setEmoteInput] = useState("");

  function onEnter(e: any) {
    if (e.key !== "Enter") return;

    const input = e.target.value;

    const correct = checkEmote(input);
    if (correct) {
      setEmoteInput("");
    }
  }

  return (
    <input
      className="w-1/2 outline-none p-2 border-purple-700 rounded-md border-2"
      placeholder="enter emote"
      onChange={(e) => {
        setEmoteInput(e.target.value);
      }}
      value={emoteInput}
      onKeyDown={onEnter}
    ></input>
  );
}
