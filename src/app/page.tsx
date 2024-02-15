"use client";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const tokenId = localStorage.getItem("user");
        if (tokenId !== user.uid) {
          signOut(auth).then(() => {
            router.replace("/signin");
          });
        } else {
          router.replace("/");
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <button
        onClick={() => {
          signOut(auth).then(() => {
            localStorage.removeItem("user");
            router.replace("/signin");
          });
        }}
      >
        LogOut
      </button>
    </main>
  );
}
