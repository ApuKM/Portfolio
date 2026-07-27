"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Download, Eye } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-foreground overflow-hidden text-surface"
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-40 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Side: Text & Actions */}
        <div className="w-full md:w-1/2 pt-10 pb-24 md:py-0 text-center md:text-left z-20">
          <h2 className="text-accent font-semibold tracking-wide uppercase mb-3 text-sm md:text-base">
            Full Stack Developer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-surface">
            Hello, I am <br />
            <span className="text-primary-foreground">Apu Kumar</span>
          </h1>
          <p className="text-foreground-subtle text-lg mb-8 max-w-md mx-auto md:mx-0">
            Turning complex, real-world problems into scalable, high-performance
            web applications using modern web technologies and AI workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {/* View Resume Button */}
            <a href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold shadow-lg shadow-primary/20"
              >
                <Eye size={20} />
                View Resume
              </Button>
            </a>

            {/* Download Resume Button */}
            <a href="/files/MOHAT KUMAR APU-Resume.pdf" download="Mohat_Kumar_Apu_Resume.pdf">
              <Button
                size="lg"
                variant="outline"
                className="border-foreground-subtle text-surface hover:bg-surface/10 font-medium"
              >
                <Download size={20} />
                Download
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Professional Photo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-20 mt-10 md:mt-0">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[420px] md:h-[420px] ">
            <Image
              src="/files/hero.png"
              alt="Apu Kumar"
              fill
              priority
              className="object-cover object-top rounded-2xl border-4 border-foreground"
              sizes="(max-width: 768px) 288px, 450px"
            />
          </div>
        </div>
      </div>

      {/* SVG Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
      <svg
  className="block w-full h-16 md:h-24"
  viewBox="0 0 1200 120"
  preserveAspectRatio="none"
>
  <path
    d="M0,70 C250,40 450,40 600,60 C800,85 1000,85 1200,60 L1200,120 L0,120 Z"
    className="fill-background"
  />
</svg>
      </div>
    </section>
  );
}
