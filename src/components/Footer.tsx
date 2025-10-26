import { Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const linkClass = "hover:text-[#FFD580] transition-colors cursor-pointer";

  return (
    <footer className="relative bg-[#1F1F1F] text-white pt-20 pb-12 overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E0523D]/10 via-[#FFD580]/10 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-start md:items-center">
          
          {/* Brand Section */}
          <div className="space-y-3 max-w-sm cursor-pointer" onClick={() => navigate("/")}>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent">
              CollabKaro
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We connect brands with influencers to build authentic collaborations that drive real impact.
            </p>

            {/* Instagram Icon */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#E0523D] hover:to-[#FFD580] hover:text-white transition-transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div className="flex flex-col gap-3">
              <h4 className="text-gray-400 uppercase text-xs font-semibold">Platform</h4>
              <span onClick={() => navigate("/influencers")} className={linkClass}>For Influencers</span>
              <span onClick={() => navigate("/brands")} className={linkClass}>For Brands</span>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-gray-400 uppercase text-xs font-semibold">Company</h4>
              <span onClick={() => navigate("/home")} className={linkClass}>Home</span>
              <span onClick={() => navigate("/about")} className={linkClass}>About</span>
              <span onClick={() => navigate("/contact")} className={linkClass}>Contact</span>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h4 className="text-gray-400 uppercase text-xs font-semibold">Subscribe</h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex bg-white rounded-full overflow-hidden shadow-sm max-w-xs"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 text-black text-sm outline-none"
                required
              />
              <button className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] px-5 text-sm font-semibold text-white hover:brightness-110 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-3">
          <p>© {new Date().getFullYear()} CollabKaro. All rights reserved.</p>
          <p>Designed for creators & brands. ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
