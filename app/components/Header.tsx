'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full py-6 px-4 bg-white text-black dark:text-white dark:bg-black border-b border-zinc-800">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <h1 className="text-left text-2xl md:text-3xl font-normal">StepStyle - Premium Footwear</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 text-lg font-normal">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Collections</a>
          <a href="#" className="hover:underline">New Arrivals</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 space-y-3 text-sm font-normal border-t border-zinc-800 pt-4">
          <a href="#" className="block hover:underline">Home</a>
          <a href="#" className="block hover:underline">Collections</a>
          <a href="#" className="block hover:underline">New Arrivals</a>
        </nav>
      )}
    </div>
  );
}