import React from "react";
import Header from "./components/Header";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {/* HEADER */}
      <Header />
      {/* HEADER */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
