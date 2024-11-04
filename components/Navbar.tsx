"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-white/0"
      }`}
    >
      <div className="mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg lg:text-2xl font-extralight tracking-wider text-primary-orange"
          >
            IFP
          </Link>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-[#ff5722]"
                    : "text-zinc-600 hover:text-orange-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden" aria-label="Menu">
              <Menu className="w-6 h-6 text-zinc-700" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 mt-16">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-[#ff5722]"
                        : "text-zinc-600 hover:text-orange-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
