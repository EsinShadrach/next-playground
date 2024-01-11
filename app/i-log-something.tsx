"use client";

import { useEffect } from "react";

export default function LogSomething() {
  useEffect(() => {
    console.log("something");
  }, []);

  console.log("something");
  return <></>;
}
