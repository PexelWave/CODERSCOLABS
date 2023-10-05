"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  const Loading = status === "loading" && <h1>Loading...</h1>;

  return (
    <main className="pt-24">
      {status === "loading" ? <h1>Loading</h1> : <h1>Profile Page</h1>}
    </main>
  );
};

export default ProfilePage;
