"use client";

import Image from "next/image";
import { useState } from "react";
import nextjsImage from "~/public/next.svg";

export default function AnimatedCard() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="container p-3 mx-auto">
      <button
        onClick={() => setToggle(!toggle)}
        className="px-6 py-1 bg-green-200 rounded-md text-green-950"
      >
        Toggle
      </button>
      <div
        className={mergeClasses(
          "w-full max-w-md min-w-0 p-3 border shadow-xl rounded-md bg-green-50 grid transition-all duration-300 place-content-center",
          toggle ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        <div className="p-2 border-b">
          <div className="w-10 h-10 bg-green-500" />
        </div>
        <div>NextJs</div>
      </div>
    </section>
  );
}

function mergeClasses(...classes: string[]) {
  return classes.join(" ");
}
