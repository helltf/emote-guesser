import Link from "next/link";

export default function NavLink(props: { children: string; href: string }) {
  return (
    <Link
      className="text-gray-200 text-xl no-underline border-white transition hover:text-purple-600"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
