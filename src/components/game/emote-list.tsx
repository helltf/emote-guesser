import { EmoteType, EmoteInfo } from "@/api/types";
import Image from "next/image";

export default function EmoteList({
  emotes,
  type,
}: {
  emotes: EmoteInfo[];
  type: EmoteType;
}) {
  return (
    <div className="flex w-screen flex-wrap items-center gap-x-2">
      {emotes?.map((v) => (
        <Image
          className="h-fit"
          key={`${v.id}_${v.name}`}
          src={v.src}
          width={v.width}
          height={v.height}
          alt={`emote_${v.id}`}
        ></Image>
      ))}
    </div>
  );
}
