"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-foreground text-surface border-b border-foreground-muted/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="text-xl font-extrabold tracking-wider z-50">
          <AnchorLink href="#hero" className="text-surface hover:text-accent transition-colors">
            APU KUMAR
          </AnchorLink>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <AnchorLink 
              key={link.name} 
              href={link.href}
              className="text-foreground-subtle hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </AnchorLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-surface hover:text-accent transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-foreground border-b border-foreground-muted/30 shadow-xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <AnchorLink 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-foreground-subtle hover:text-accent font-medium text-lg w-full text-center transition-colors"
            >
              {link.name}
            </AnchorLink>
          ))}
        </nav>
      </div>
    </header>
  );
}