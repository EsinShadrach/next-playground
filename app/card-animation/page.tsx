"use client";

import { ArrowRightIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import vercel from "~/public/vercel.svg";

interface GlowingCardProps {
  img: StaticImageData;
  title?: string;
  subtitle?: string;
}

export default function Page() {
  return (
    <section className="flex items-center justify-center bg-black min-h-svh">
      <GlowingCard img={vercel} title="Vercel" subtitle="Creators Of NextJs" />
    </section>
  );
}

export function GlowingCard({
  img,
  title = "",
  subtitle = "",
}: GlowingCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const { clientX, clientY } = event;

    const cardRect = event.currentTarget.getBoundingClientRect();
    const xRotation = ((clientY - cardRect.top) / cardRect.height) * 25 - 10;
    const cardWidth = event.currentTarget.offsetWidth;
    const mouseXFromCenter = clientX - cardRect.left - cardWidth / 2;
    const maxRotationValue = 50;
    const yRotation = (mouseXFromCenter / cardWidth) * maxRotationValue;

    setRotation({ x: xRotation, y: yRotation });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: isHovered ? "1000px" : "none",
        transition: "perspective 0.3s ease-out",
      }}
    >
      <div
        className="relative rounded-xl bg-[#13111CCC] shadow-[-5px_-5px_20px_rgba(170,_63,_255,_0.25),_5px_5px_20px_2px_rgba(170,_63,_255,_0.3)] backdrop-blur-md text-white border border-[#AA3FFF] w-full max-w-xl sm:p-10 sm:py-16 overflow-hidden p-4 mx-auto"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : "rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.3s ease-out",
        }}
      >
        <Image
          className="absolute bottom-6 right-6"
          width={122}
          alt=""
          draggable={false}
          src={img}
        />
        <div className="sm:space-y-7 text-[#AA3FFF] space-y-4">
          <div className="text-2xl text-white sm:text-3xl">{title}</div>
          <div className="text-sm leading-normal sm:max-w-sm max-w-[14rem] relative text-white/70">
            {subtitle}
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 hover:bg-[#AA3FFF]/10 w-fit rounded-full p-1.5 justify-center px-2 transition-all duration-300 text-white text-sm"
          >
            Learn More{" "}
            <span>
              <ArrowRightIcon className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
