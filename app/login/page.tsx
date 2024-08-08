"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);
  
  if (session) {
    return null;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-2xl mb-2">Not Signed In</p>
      <button
        className="bg-blue-600 py-2 px-6 rounded-md mb-2"
        onClick={() => signIn("google")}
      >
        Sign in with google
      </button>
      <button
        className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
        onClick={() => signIn("github")}
      >
        Sign in with github
      </button>
    </div>
  );
}

export default Login;
