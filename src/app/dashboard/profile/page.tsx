import { ProfileCard } from "@/profile";
import { SessionProvider } from "next-auth/react";

export default function ProfilePage() {
  return (
    <SessionProvider>
      <h1>Hello Page</h1>
      <ProfileCard />
    </SessionProvider>
  );
}
