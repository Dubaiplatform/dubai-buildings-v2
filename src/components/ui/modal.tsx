"use client";

import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-white w-[100%] md:w-[60%]  max-h-[90vh] overflow-y-auto relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:text-black transition-colors"
        >
          <X className="text-black w-4 h-4" />
        </button>

        <div className="">{children}</div>
      </div>
    </div>
  );
}
