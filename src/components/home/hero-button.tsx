import Link from "next/link";

export default function HeroButton(props: { href: string; children: any }) {
  return (
    <Link
      className="md:px-8 md:p-3 px-4 p-2 text-white md:text-2xl text-xl border-2 border-white m-4 hover:bg-white 
	  hover:text-purple-600 transition duration-500 hover:border-purple-700 rounded-sm"
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
