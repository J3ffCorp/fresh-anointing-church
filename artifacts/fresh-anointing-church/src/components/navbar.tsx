import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ministries", href: "#ministries" },
    { name: "Messages", href: "#messages" },
    { name: "Give", href: "#give" },
    { name: "Visit", href: "#visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 text-stone-900" 
          : "bg-gradient-to-b from-black/60 to-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Fresh Anointing <span className="block text-xs font-sans font-normal opacity-80 tracking-widest uppercase">Church</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                isScrolled ? "text-stone-600" : "text-stone-200"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant={isScrolled ? "gold" : "white"} 
            className={!isScrolled ? "bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white" : ""}
            asChild
          >
            <a href="#visit">Plan a Visit</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-6 flex flex-col gap-4 md:hidden text-stone-900 border-t border-stone-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-stone-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="gold" className="w-full mt-4" asChild>
            <a href="#visit" onClick={() => setMobileMenuOpen(false)}>Plan a Visit</a>
          </Button>
        </div>
      )}
    </header>
  );
}
