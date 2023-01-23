import Image from "next/image";
import Link from "next/link";
import icon from "../../../public/emote_guesser_icon.gif";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-500 h-[80px] flex flex-row px-20 items-center justify-between">
      <div className="flex flex-row h-[64px] align-middle gap-2">
        <Image
          className=""
          src={icon}
          alt="emote guesser icon"
          width="64"
          height="64"
        ></Image>
        <p className="text-5xl text-center m-0 text-purple-700 italic">
          Emote Guesser
        </p>
      </div>
      <div>
        <Link href="/play">Play</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
