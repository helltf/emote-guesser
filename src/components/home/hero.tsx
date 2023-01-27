import Image from "next/image";
import typingGif from "../../../public/typing.gif";
import HeroButton from "./hero-button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-1">
      <Image
        priority={true}
        alt="typing gif"
        width="384"
        height="128"
        src={typingGif}
      ></Image>
      <div className="flex flex-col w-[420px]">
        <h1 className="text-purple-600 text-8xl italic self-start font-serif">
          Emote
        </h1>
        <h1 className="text-purple-600 text-8xl italic self-end"> Guesser</h1>
      </div>
      <div className="flex gap-2">
        <HeroButton href="/play">Play a game</HeroButton>
        <HeroButton href="/stats">View statistics</HeroButton>
      </div>
    </div>
  );
}
