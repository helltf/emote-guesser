import Link from "next/link";

export default function NavLink(props: { children: string; href: string }) {
  return (
    <Link
      className="text-white text-xl no-underline border-white transition hover:text-purple-600"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
