"use client";

import Link from "next/link";

export default function navbar() {
    return (
    <nav className="flex flex-col items-center justify-between px-3 py-2 gap-2 sm:px-5 sm:py-3 sm:flex-row bg-gray-800">
        <h1 className="text-white font-semibold text-xl">My Website</h1>

        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <li><a href="#/" className="text-gray-200 hover:text-white px-3 py-1">Home</a></li>
          <li><a href="#/" className="text-gray-200 hover:text-white px-3 py-1">About</a></li>
          <li><a href="#/" className="text-gray-200 hover:text-white px-3 py-1">Contact</a></li>
          <li><a href="/#" className="text-gray-200 hover:text-white px-3 py-1">News</a></li>
        </ul>
      </nav>
    );
}