"use client";
import { auth } from "@/config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Story from "@/components/Story";
import Posts from "@/components/Posts";
import NewPost from "@/components/NewPost";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   // Prevent navigating back in the browser
  //   const handleBackButton = () => history.pushState(null, "", document.URL);
  //   window.addEventListener("popstate", handleBackButton);

  //   // If there is no user token, redirect the user to the login page
  //   if (!localStorage.getItem("token")) {
  //     return router.replace("/signin");
  //   }

  //   // Check if a user is found
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (localStorage.getItem("token") !== user?.uid) {
  //       toast.error("Authorization Failed !!");
  //       setTimeout(() => router.replace("/signin"), 6000);
  //     }
  //   });

  //   // Unsubscribe when the component is removed
  //   return () => {
  //     window.removeEventListener("popstate", handleBackButton);
  //     unsubscribe();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const tokenId = localStorage.getItem("user");
        if (tokenId !== user.uid) {
          signOut(auth).then(() => {
            toast.error("Authorization Failed !!");
            setTimeout(() => router.replace("/signin"), 6000);
          });
        } else {
          router.replace("/");
        }
      } else {
        toast.error("Authorization Failed !!");
        setTimeout(() => router.replace("/signin"), 6000);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [router]);
  return (
    <main>
      <ToastContainer />
      <Story />
      <NewPost/>
      <Posts />
      {/* <button
        onClick={() => {
          signOut(auth).then(() => {
            localStorage.removeItem("user");
            router.replace("/signin");
          });
        }}
      >
        LogOut
      </button> */}
    </main>
  );
}
