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
    <>
      {emotes?.map((v) => (
        <div key={v.name}>
          <Image
            src={v.src}
            width="32"
            height="32"
            alt={`emote_${v.name}`}
          ></Image>
          {/*<p className="text-white">{v.name}</p>*/}
        </div>
      ))}
    </>
  );
}
