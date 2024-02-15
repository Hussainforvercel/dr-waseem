"use client";
import Image from "next/image";

const images = [
  "/kidney.png",
  "/stethoscope.png",

];
export default function MarqueeSlider() {
  return (
    <div>
      <div className="text-center mt-10 text-2xl md:text-4xl text-[#36A5B8] font-bold bouns animate-bounce ">
        <h1>Drink Water Save Life</h1>
      </div>
    <div className="w-full overflow-hidden bg-white mt-10">
      <div className="flex whitespace-nowrap animate-scroll">
        <div className="flex flex-wrap items-center justify-center"></div>

        <div className="grid grid-cols-6 space-x-40">
          {images.map((image, index) => ( 
            <div
              key={index}
              className="bg-white w-44 h-20 flex items-center justify-center"
            >
              <Image src={image} className="p-14" width={1} height={1} layout="responsive" />
            </div>

          ))}
        </div>
        {/* Add more slides as needed */}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
    </div>
  );
}
