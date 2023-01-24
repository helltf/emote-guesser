import Image from "next/image";
import icon from "../../../public/emote_guesser_icon.gif";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full h-[80px] flex flex-row px-20 items-center justify-between bg-neutral-900">
      <div className="flex flex-row h-[64px] align-middle gap-2">
        <Image
          className=""
          src={icon}
          alt="emote guesser icon"
          width="64"
          height="64"
        ></Image>
        <p className="text-5xl text-center align-middle text-purple-600 italic">
          Emote Guesser
        </p>
      </div>
      <div className="flex flex-row gap-5">
        <NavLink href="/play">Play</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stats">Stats</NavLink>
        <NavLink href="/login">Login</NavLink>
      </div>
    </nav>
  );
}
