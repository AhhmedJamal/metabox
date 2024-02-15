"use client";
import exampleImage from "../../../../public/assets/MetaBox.png";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        localStorage.setItem("user", user.uid);
        router.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="m-auto w-[60%] mt-[120px] md:mt-[200px]">
      <div className="flex flex-col justify-center items-center">
        <Image src={exampleImage} alt="Logo image" className="w-[130px]" />
        <h2 className="font-bold text-[25px]">MetaBox</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 mt-[50px] md:w-[400px] m-auto"
      >
        <input
          className="bg-zinc-800 rounded-lg border p-2 border-gray-500 outline-none"
          type="email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Email Address"
          required
        />
        <input
          className="bg-zinc-800 rounded-lg border p-2 border-gray-500 outline-none"
          type="password"
          value={pass}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPass(e.target.value)
          }
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="bg-primary p-2 rounded-3xl font-bold text-[17px] mt-[10px] flex justify-center items-center"
        >
          {!loading ? (
            " Sign In"
          ) : (
            <span className="animate-spin w-[25px] h-[25px] border-[5px] border-[solid] border-[#FFF] [border-bottom-color:transparent] rounded-[50%] inline-block box-border]"></span>
          )}
        </button>
      </form>
      <div className="flex gap-4 mt-6 justify-center items-center">
        <FaGoogle size={34} className="bg-zinc-700 p-[6px] rounded-full" />
        <ImAppleinc
          size={35}
          className="bg-zinc-700 p-[6px] rounded-full pl-[5px]"
        />
      </div>
      <div className="text-[13px] md:text-[17px]  text-zinc-400 mt-6 flex gap-2 justify-center items-center">
        Don{"'"}t have an account?{" "}
        <Link href="/signup" className="text-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
