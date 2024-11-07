import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const selectedTab = cookieStore.get("selectedTab")?.value;
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2  gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={parseInt(selectedTab || "1")} />
      </div>
    </div>
  );
}
