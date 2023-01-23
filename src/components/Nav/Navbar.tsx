import Image from "next/image";
import icon from "../../../public/emote_guesser_icon.gif";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-500 h-[80px] flex flex-row px-20 items-center">
      <div className="flex flex-row h-[64px] align-middle gap-2">
        <Image
          className=""
          src={icon}
          alt="emote guesser icon"
          width="64"
          height="64"
        ></Image>
        <p className="text-5xl text-center">Emote Guesser</p>
      </div>
    </nav>
  );
}
