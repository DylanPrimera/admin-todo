import { Sidebar, TopMenu } from "@/components";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth();
  if(!session?.user) {
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
