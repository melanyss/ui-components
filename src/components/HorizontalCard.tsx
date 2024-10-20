import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HorizontalCard() {
  return (
    <div className="flex justify-center w-full px-4 mb-20">
      <div
        className="bg-[radial-gradient(100%_200%_at_51%_152%,_rgb(222,_222,_222)_5.3%,_rgb(222,_222,_222)_20.1%,_rgb(89,_163,_189)_30.5%,_rgb(28,_68,_96)_50%,_rgb(11,_17,_23)_70%)] box-border text-white cursor-pointer text-lg h-52 relative w-full max-w-[76.25rem] rounded-3xl overflow-hidden p-10 bg-neutral-800 md:min-h-[auto]">
        <Link href="https://solotoolbox.xyz/?utm_source=ui.melanys.me&ref=ui.melanys.me" target="_blank">
          <p className="bg-clip-text bg-[linear-gradient(rgb(255,_255,_255)_30%,_rgb(45,_130,_164))] text-3xl font-bold h-9 mb-3 w-full text-transparent"
            style={{
              backgroundSize: "250%",
            }}>
            SoloToolBox
          </p>
          <p className="h-6 mb-7 mt-3 opacity-80 w-full">Find the best tools and resources for your next project.</p>
          <p className="h-6 w-full hover:underline textCta">Learn more →</p>
          <Image className="bottom-[-5%] right-[2%] top-[1.75rem] w-64 rounded-xl overflow-clip absolute cardImg"
            src="https://solotoolbox.xyz/images/thumbnails/solotoolbox.svg" 
            style={{
              overflowClipMargin: "content-box",
            }} 
            alt="SoloToolBox" 
            width={200} 
            height={100} 
          />
        </Link>
      </div>
    </div>
  );
}