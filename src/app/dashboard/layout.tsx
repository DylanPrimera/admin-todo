import { Sidebar, TopMenu } from "@/components";
import { redirect } from "next/navigation";
import { getServerSessionUser } from "@/auth";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getServerSessionUser()
  if(!user) {
    redirect('/api/auth/signin');
  }
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
