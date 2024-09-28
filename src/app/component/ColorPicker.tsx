"use client";
import React, { ChangeEvent } from "react";
import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#0000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    window.alert("Copy to clipboard!");
  };

  return (
    <div className="bg-black w-[800px] h-[450px] z-40 rounded-lg p-5 flex justify-between gap-7">
      <div className="w-1/2 h-[450px] flex items-center justify-center flex-col gap-7">
        {" "}
        <h1 className="text-white text-5xl font-extrabold">Color Picker.</h1>
        <div className="w-full h-48 border-purple-900 border-4 rounded-lg" style={{ backgroundColor: color }} />
        <p className="text-white">
          {" "}
          Select a color and copy the hex and RGB values.
        </p>
      </div>
      <div className="w-1/2 h-[450px] flex items-center justify-center flex-col gap-9">
        <div className="text-white font-bold text-4xl">{color}</div>
        <div className="text-white text-xl">
          RGB:{parseInt(color.slice(1, 3), 16)},
          {parseInt(color.slice(3, 5), 16)},{parseInt(color.slice(5, 7), 16)}
        </div>
        <button className="p-[3px] relative" onClick={copyToClipboard}>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Copy to clipboard
          </div>
        </button>
        <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-[300px] h-12 rounded-lg"

        />
        <p className="text-purple-700 text-lf font-semibold">Made by @Saher Saleem</p>
      </div>
    </div>
  );
};

export default ColorPicker;
