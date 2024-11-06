'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const SidebarItem = ({ name, path, icon }: Props) => {
  const pathName = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl text-black hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${
          path === pathName &&
          "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
        }`}
      >
        {icon}
        <span className="-mr-1 font-medium">{name}</span>
      </Link>
    </li>
  );
};
