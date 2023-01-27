import Image from "next/image";
import icon from "../../../public/emote_guesser_icon.gif";

export default function NavLogo() {
  return (
    <>
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
    </>
  );
}
