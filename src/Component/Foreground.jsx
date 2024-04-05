import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "This file contains just some random stuff. Don't click it, It won't Work",
      fileSize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        title: "Download",
        color: "green",
      },
    },
    {
      desc: "This file contains just some random stuff. Don't click it, It won't Work",
      fileSize: "0.7mb",
      close: false,
      tag: {
        isOpen: true,
        title: "Downloaded",
        color: "blue",
      },
    },
    {
      desc: "This file contains just some random stuff. Don't click it, It won't Work",
      fileSize: "2.2mb",
      close: false,
      tag: {
        isOpen: false,
        title: "Upload",
        color: "green",
      },
    },
  ];
  const ref = useRef(null);
  return (
    <>
      <div
        id="fore-layer" ref={ref}
        className="w-full h-screen absolute z-[3] top-0 left-0 p-4  flex flex-wrap  gap-6"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
