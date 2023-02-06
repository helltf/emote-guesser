import { EmoteType } from "@/api/types";
import { EmoteInfo } from "./guesser";

export default function EmoteList({
  emotes,
  type,
}: {
  emotes: EmoteInfo[];
  type: EmoteType;
}) {
  return (
    <>
      {emotes?.map((v) => (
        <p key={v.name} className="text-white">
          {v.name}
        </p>
      ))}
    </>
  );
}
