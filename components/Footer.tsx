import React from "react";
import NextLink from "next/link";
import {  Mail, Heart } from "lucide-react";
import { DiGithub } from "react-icons/di";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: DiGithub, url: "https://github.com/ApuKM" },
    { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/apu-kumar" },
    { name: "Facebook", icon: FiFacebook, url: "https://www.facebook.com/Apukm180" },
  ];

  return (
    <footer className="w-full bg-foreground text-surface py-12 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <NextLink href="/" className="text-2xl font-extrabold tracking-widest hover:text-accent transition-colors">
            APU KUMAR
          </NextLink>
          <p className="text-foreground-subtle text-sm">
            © {currentYear} Apu Kumar. All rights reserved.
          </p>
        </div>

        {/* Built With (Optional but a nice touch) */}
        <div className="flex items-center gap-1.5 text-sm text-foreground-subtle font-medium">
          Built with <Heart size={14} className="text-primary fill-primary" /> using Next.js
        </div>

        {/* Social Icons & Email */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full bg-surface/5 flex items-center justify-center text-foreground-subtle hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            );
          })}
          
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=apukumar180@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Me"
            className="w-10 h-10 rounded-full bg-surface/5 flex items-center justify-center text-foreground-subtle hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={18} strokeWidth={2} />
          </a>
        </div>

      </div>
    </footer>
  );
}