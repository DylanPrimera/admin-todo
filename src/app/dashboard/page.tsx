import { WidgetItem } from "@/components";
import { auth } from "../../../auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if(!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="User logged">
        <div className="text-center p-6">
          <div className="h-24 w-24 text-white rounded-full mx-auto">
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <p className="pt-2 text-lg font-semibold ">{session?.user?.name}</p>
          <p className="text-sm ">{session?.user?.email}</p>
          <div className="mt-5">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold ">
              Manage your Account
            </a>
          </div>
        </div>
      </WidgetItem>
    </div>
  );
}
