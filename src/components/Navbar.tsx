import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "For Influencers", path: "/for-influencers" },
    { label: "For Brands", path: "/for-brands" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70 border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shadow-sm">
              <img
                src="/Images/logo.png"
                alt="CollabKaroo Logo"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-extrabold text-black tracking-tight">
              CollabKaroo
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => navigate(link.path)}
                className="relative text-gray-800 hover:text-black font-semibold transition-colors group py-1 px-1 cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-300 shadow-sm"
              onClick={() => navigate("/contact/brand")}
            >
              I'm a Brand
            </Button>
            <Button
              className="bg-black text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              onClick={() => navigate("/contact/influencer")}
            >
              I'm an Influencer
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-black/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - FULL WIDTH */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-md py-6 space-y-5 animate-fade-in">
          <div className="px-4">
            {navLinks.map((link, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(link.path);
                  setIsOpen(false);
                }}
                className="block py-2 text-gray-900 hover:text-black font-semibold transition-colors cursor-pointer"
              >
                {link.label}
              </div>
            ))}

            <div className="pt-6 space-y-4">
              <Button
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white font-semibold transition-all duration-300 shadow-sm"
                onClick={() => {
                  navigate("/contact/brand");
                  setIsOpen(false);
                }}
              >
                I'm a Brand
              </Button>
              <Button
                className="w-full bg-black text-white font-bold hover:scale-105 transition-all duration-300 shadow-md"
                onClick={() => {
                  navigate("/contact/influencer");
                  setIsOpen(false);
                }}
              >
                I'm an Influencer
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
