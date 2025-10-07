"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { name: "Results", href: "#results" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function HeaderNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-3 left-0 right-0 z-50 
  w-[70%] mx-auto
  bg-white/10 backdrop-blur-xl
 
  shadow-[0_4px_30px_rgba(255,255,255,0.2)]
  rounded-full
  transition-all duration-300"
    >
      <div className="container mx-auto -px-14">
        <nav className="relative flex h-[77px] items-center justify-between ml-0 md:ml-0">
          <Link
            href="/"
            className="relative z-20 flex items-center justify-start shrink-0 ml-0 md:-ml-10"
          >
            <Image
              src="/logo2.png"
              alt="ScaleUp Media Logo"
              width={200}
              height={800}
              className="h-[130px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className=" p-px">
              <div className="flex items-center gap-x-1 rounded-full  py-2 pl-2 pr-6 ">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="rounded-full px-4 py-2.5 text-lg font-normal text-primary-foreground transition-colors hover:text-[#6BA3FF]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 hidden md:block">
            <a
              href="#contact"
              className="bg-gradient-to-r via-[#d38312] to-[#a83279]  md:rounded-full px-8 py-4"
            >
              <span
                className="text-white font-bold"
                style={{ fontFamily: "Space Grotesk", fontStyle: "" }}
              >
                Apply To Work With Us
              </span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="relative z-20 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="bg-transparent ">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] border-r-border bg-background p-6"
              >
                <div className="mt-8 flex flex-col items-start gap-y-6 ">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-xl font-medium text-muted-foreground transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 w-full rounded-lg bg-primary py-3 text-center text-base font-medium text-primary-foreground"
                  >
                    Apply To Work With Us
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
