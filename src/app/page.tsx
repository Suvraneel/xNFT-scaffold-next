'use client'
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

if (typeof window !== 'undefined') {
  window.addEventListener('error', function (event) {
    console.log('Caught via addEventListener', event);
    // Here you could send the error information to an error tracking service
  });
}

const Home: NextPage = () => {
  const notify = () =>
    toast("💛 Almost too EZ !");

  return (
    <>
      <Head>
        <title>Builderz xNFT Scaffold</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full flex flex-col justify-center items-center mt-10'>
        <div className="bg-gradient-to-br from-black to-matte-black m-3 px-3 py-8 mb-40 md:mb-0 rounded-lg shadow-xl shadow-black">
          <div className="flex flex-col justify-center p-2 bg-inherit gap-4">
            <div className='flex flex-row justify-center items-center gap-10'>
              <a
                href="https://suvraneel.software"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <Image
                  src="/suvraneel.svg"
                  height='160'
                  width='150'
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                  alt="suvraneel"
                />
              </a>
            </div>
            <h1 className='text-xl font-bold'>Carry the power of Solana Universe in your xNFT Backpack 🎒</h1>
            <p className='text-base'>
              <b className='font-medium'>xNFT Backpack + Solana Scaffold</b>:<br/>
              Your toolkit for Solana Innovation
            </p>
            <div className="flex flex-row gap-4 justify-around  items-center py-1">
              <button onClick={notify} className="rounded-xl bg-amber-500 text-black hover:shadow-amber-500/50 shadow-xl font-medium py-3 px-8 ring-2 ring-gray-900 ring-offset-4 ring-offset-black transition-all">
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
