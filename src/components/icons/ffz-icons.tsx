import Image from "next/image";
import ffzIcon from "../../../public/ffz-icon.png";

export default function FfzIcon() {
  return (
    <>
      <Image src={ffzIcon} width="32" height="32" alt="ffz icon"></Image>
    </>
  );
}
