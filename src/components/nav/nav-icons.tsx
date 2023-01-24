import Image from "next/image";

export default function NavIcons() {
  return (
    <div className="flex gap-3 border-l-gray-500 border-l-2 ml-5 pl-5">
      <a href="https://github.com/helltf">
        <Image
          src="/github.png"
          width="32"
          height="32"
          alt="github image"
        ></Image>
      </a>
      <a href="https://twitch.tv/helltf">
        <Image
          src="/twitch.png"
          width="32"
          height="32"
          alt="twitch image"
        ></Image>
      </a>
      <a href="https://twitter.com/helltfx">
        <Image
          src="/twitter.png"
          width="32"
          height="32"
          alt="twitter image"
        ></Image>
      </a>
    </div>
  );
}
