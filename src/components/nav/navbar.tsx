import MobileNavbar from "./mobile-nav";
import NavIcons from "./nav-icons";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";

export default function Navbar() {
  return (
    <nav className="w-full h-[60px] flex flex-row px-28 items-center justify-between bg-neutral-900 border-b border-gray-500">
      <div className="flex flex-row h-[48px] align-middle gap-2">
        <NavLogo />
      </div>
      <MobileNavbar />
      <div className="md:flex hidden">
        <div className="flex flex-row gap-7">
          <NavLinks></NavLinks>
        </div>
        <div>
          <NavIcons></NavIcons>
        </div>
      </div>
    </nav>
  );
}
