"use client";
import { useSession } from "next-auth/react";
export const ProfileCard = () => {
  const { data:session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Unauthenticated</div>;
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col">
        <span>{session?.user?.name}</span>
        <span>{session?.user?.roles[0]}</span>
      </div>
    );
  }
};
