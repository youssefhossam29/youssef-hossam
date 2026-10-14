"use client";

import React, { useState, useEffect } from "react";

const titles = [
  "Backend Engineer (Laravel / PHP)",
  "WordPress & WooCommerce Developer",
];

export default function TypewriterTitle() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 75); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200); // Display pause when fully typed
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 35); // Deleting speed
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        timeout = setTimeout(() => {}, 350); // Brief pause before typing next
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      {/* Line 1: Hi, I'm Youssef Hossam on its own line */}
      <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        Hi, I&apos;m Youssef Hossam
      </span>

      {/* Line 2: Dynamic Typewriter with Blue-to-Purple Gradient & Typing Indicator */}
      <div className="min-h-[1.3em] text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-center lg:text-left leading-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#A855F7]">
          {displayText}
        </span>
        {/* Blinking Typing Cursor Indicator directly trailing the last character */}
        <span
          className="typewriter-cursor inline-block w-[3px] sm:w-[3.5px] lg:w-[4px] h-[0.82em] ml-1 align-baseline translate-y-[-1px] rounded-[1px] bg-gradient-to-b from-[#3B82F6] via-[#818CF8] to-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.9)]"
          aria-hidden="true"
        />
        {/* Screen Reader Accessible Copy */}
        <span className="sr-only">
          Backend Engineer (Laravel / PHP) &amp; WordPress &amp; WooCommerce Developer
        </span>
      </div>
    </div>
  );
}
