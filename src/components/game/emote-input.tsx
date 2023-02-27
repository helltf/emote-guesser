import { useState } from "react";

export default function EmoteInput({
  checkEmote,
  finished,
}: {
  checkEmote: (emote: string) => boolean;
  finished: boolean;
}) {
  const [emoteInput, setEmoteInput] = useState("");

  function onEnter(e: any) {
    if (finished) return;
    if (e.key !== "Enter") return;

    const input = e.target.value;

    const correct = checkEmote(input);
    if (correct) {
      setEmoteInput("");
    }
  }

  return (
    <input
      className="w-1/2 rounded-md border-2 border-purple-700 p-2 outline-none"
      placeholder="enter emote"
      onChange={(e) => {
        setEmoteInput(e.target.value);
      }}
      value={emoteInput}
      onKeyDown={onEnter}
    ></input>
  );
}
