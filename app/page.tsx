"use client";

import Logo from "@/components/Logo";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-44 h-44 relative mb-4">
        <Logo />
      </div>
      <p className="text-2xl mb-2">
        Welcome <span className="font-bold">{session?.user?.name}</span>. Signed
        In As
      </p>
      <p className="font-bold mb-4">{session?.user?.email}</p>
      <button
        className="bg-red-600 py-2 px-6 rounded-md"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
