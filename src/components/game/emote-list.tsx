import { EmoteInfo } from "@/api/types";
import Image from "next/image";

export default function EmoteList({ emotes }: { emotes: EmoteInfo[] }) {
  return (
    <div className="flex w-[95%] flex-wrap items-center gap-x-4">
      {emotes?.map((v) => (
        <div key={`${v.id}_${v.name}`} className="relative">
          <Image
            className="h-fit"
            src={v.src}
            width={v.width}
            height={v.height}
            alt={`emote_${v.id}`}
          ></Image>
          {v.guessed ? (
            <p className="absolute bg-neutral-600 bg-opacity-60 text-white text-xs bottom-0 right-0 ">
              {v.displayName ?? v.name}
            </p>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
