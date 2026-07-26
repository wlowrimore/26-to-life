"use client";

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface InsideScoopModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InsideScoopModal: React.FC<InsideScoopModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sync animation states when parent opens/closes modal
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Brief delay to allow DOM mounting before triggering CSS transition
      const timer = setTimeout(() => setIsAnimating(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      // Wait for 300ms fade-out transition before unmounting from DOM
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className={`relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl transition-all duration-300 transform ${
          isAnimating ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <IoClose size={24} />
        </button>

        {/* Modal Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-light tracking-wide text-white">
            Get the Inside Scoop
          </h2>
          <p className="text-sm text-zinc-400">
            Get the inside scoop on our latest products and releases! It&apos;s
            100% free. We never share your email and we do not believe in spam!
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-3 pt-2">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-zinc-800 text-white rounded border border-zinc-700 focus:outline-none focus:border-indigo-400 transition-colors text-sm placeholder:text-zinc-500"
                required
              />
            </div>
            <button
              type="submit"
              onClick={onClose}
              className="w-full py-2.5 bg-indigo-300 text-black rounded font-medium hover:bg-indigo-200 transition-colors text-sm cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
