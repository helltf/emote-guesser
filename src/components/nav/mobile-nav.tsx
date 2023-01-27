import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(true)} className="md:hidden cursor-pointer">
      {isOpen ? <OpenMenuIcon /> : <MenuIcon />}
    </div>
  );
}

function MenuIcon() {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H20"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
        />

        <path
          d="M5 17H20"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
        />

        <path
          d="M5 7H20"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
}

function OpenMenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
    </svg>
  );
}
