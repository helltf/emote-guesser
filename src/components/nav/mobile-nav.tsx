import { useEffect, useState } from "react";
import NavIcons from "./nav-icons";
import NavLinks from "./nav-links";

export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    });
  });

  return (
    <>
      <div
        onClick={() => setOpen(!isOpen)}
        className="md:hidden cursor-pointer relative"
      >
        {isOpen ? <OpenMenuIcon /> : <MenuIcon />}
      </div>
      {isOpen ? <NavContent /> : <></>}
    </>
  );
}

function NavContent() {
  return (
    <div className="absolute top h-[calc(100vh-60px)] top-[60px] left-0 w-screen bg-neutral-700">
      <div className="h-full w-full flex flex-col justify-end">
        <div className="flex flex-col items-center gap-5 mb-5">
          <NavLinks />
        </div>
        <div className="flex gap-5 justify-center mb-2">
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <>
      <svg
        className="transition "
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H20"
          stroke="#666666"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M5 17H20"
          stroke="#666666"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M5 7H20"
          stroke="#666666"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

function OpenMenuIcon() {
  return (
    <svg
      className="transition"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      fill="#666666"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
    </svg>
  );
}
