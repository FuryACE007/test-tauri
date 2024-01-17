import { useState } from "react";
import { Inter } from "next/font/google";
import { invoke } from "@tauri-apps/api/tauri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [message, setMessage] = useState("--------");

  const callHelloWorld = async () => {
    const response = (await invoke("hello_world")) || "";
    setMessage(response.toString());
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-1/3 h-1/3">
          <h1>Click to print message using C++ api</h1>
          <span className=" text-teal-300">{message}</span>
          <button className=" p-2 bg-purple-500 hover:bg-purple-600 transition-all rounded-sm" onClick={callHelloWorld}>
            Print Message
          </button>
        </div>
      </div>
    </main>
  );
}
