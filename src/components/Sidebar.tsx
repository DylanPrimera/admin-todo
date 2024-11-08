import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import {
  IoBagOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";

import { PiCookieDuotone } from "react-icons/pi";
import { auth, signOut } from "../../auth";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <IoCalendarOutline size={20} />,
  },
  {
    name: "Rest Todos",
    path: "/dashboard/rest-todos",
    icon: <IoCheckboxOutline size={20} />,
  },
  {
    name: "Server Actions",
    path: "/dashboard/server-todos",
    icon: <IoListOutline size={20} />,
  },
  {
    name: "Cookies",
    path: "/dashboard/cookies",
    icon: <PiCookieDuotone size={20} />,
  },
  {
    name: "Products",
    path: "/dashboard/products",
    icon: <IoBagOutline size={20} />,
  },
];

export const Sidebar = async () => {
  const session = await auth();
  if (!session?.user) {
    return null;
  }
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Image
            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
            className="w-32"
            alt="tailus logo"
            width={32}
            height={32}
          />
        </div>

        <div className="mt-8 text-center">
          {session?.user !== undefined ? (
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
              width={150}
              height={150}
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
          ) : (
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150}
              height={150}
            />
          )}

          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name !== null ? session?.user?.name : "Not logged"}
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <form
        className="px-6 -mx-6 pt-4 flex justify-between items-center border-t"
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </form>
    </aside>
  );
};
