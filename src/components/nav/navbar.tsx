import Image from 'next/image';
import icon from '../../../public/emote_guesser_icon.gif';
import NavIcons from './nav-icons';
import NavLink from './nav-link';

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] flex flex-row px-28 items-center justify-between bg-neutral-900 border-b border-gray-500">
      <div className="flex flex-row h-[48px] align-middle gap-2">
        <Image
          className=""
          src={icon}
          alt="emote guesser icon"
          width="48"
          height="48"
        ></Image>
        <p className="text-4xl text-center align-middle text-purple-600 italic leading-[48px]">
          Emote Guesser
        </p>
      </div>
      <div className="flex ">
        <div className="flex flex-row gap-7">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/play">Play</NavLink>
          <NavLink href="/stats">Stats</NavLink>
          <NavLink href="/login">Login</NavLink>
        </div>
        <div>
          <NavIcons></NavIcons>
        </div>
      </div>
    </nav>
  );
}
