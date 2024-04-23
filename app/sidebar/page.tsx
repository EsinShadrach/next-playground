"use client";
import React from "react";

type SideBarPageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

export default function SideBarPage({
  params,
  searchParams,
}: SideBarPageProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <main>
      <section className="container p-2 mx-auto">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 bg-red-200 rounded-md active:scale-95 transition-all duration-300"
        >
          Open
        </button>
      </section>

      <aside
        className={`fixed inset-y-0 w-full max-w-md p-2 bg-red-50 transition-all duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="p-2 bg-red-200 rounded-md active:scale-95 transition-all duration-300"
        >
          Close
        </button>
        <div>content</div>
      </aside>
    </main>
  );
}
