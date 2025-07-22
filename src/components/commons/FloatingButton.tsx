"use client";

import { Ellipsis } from "lucide-react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
        <Ellipsis className="w-5 h-5" />
      </button>
    </div>
  );
}
