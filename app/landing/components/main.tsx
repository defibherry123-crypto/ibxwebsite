"use client";

import { useState } from "react";

export default function AdoptionBox() {
  const [expanded, setExpanded] = useState(false);

  const text =
    "Bringing education and tools directly to communities. IBX drives adoption by taking blockchain knowledge straight to the people who need it most not waiting for them to find it. Through on-ground workshops, grassroots activations, and multilingual community sessions, we simplify blockchain concepts, demystify Web3, and provide practical tools that help everyday Africans participate confidently in the digital economy. Bringing blockchain education and tools directly to communities.";

  return (
    <div
      className="bg-white rounded-xl p-6 w-[350px] 
      border border-gray-300 shadow-sm transition-all duration-300"
    >
      <h3 className="font-bold text-2xl text-black mb-4">ADOPTION</h3>

      <p
        className={`text-base text-gray-700 leading-relaxed transition-all duration-300 overflow-hidden
          ${expanded ? "line-clamp-none" : "line-clamp-4"}
        `}
      >
        {text}
      </p>

      {/* Read More / Show Less Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-blue-600 font-semibold hover:underline"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
