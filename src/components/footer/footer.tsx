import NavIcons from '../nav/nav-icons';
import FooterIcons from './footer-icons';

export default function Footer() {
  return (
    <div className="px-8 flex justify-between items-center h-[60px] bg-neutral-800  ">
      <p className="text-gray-500">Created by @helltf</p>
      <div className="flex gap-2">
        <p className="text-gray-500">Built with </p>
        <FooterIcons />
      </div>
    </div>
  );
}
