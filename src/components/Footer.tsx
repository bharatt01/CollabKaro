import { Instagram, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#1F1F1F] text-white pt-16 pb-8 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E0523D]/10 via-[#FFD580]/10 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6 items-start md:items-center">
          {/* Brand */}
          <div className="space-y-4 max-w-sm">
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent">
              CollabKaro
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We connect brands with influencers to build authentic collaborations that drive real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-400 uppercase text-xs font-semibold">Platform</h4>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">For Influencers</a>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">For Brands</a>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">Pricing</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-gray-400 uppercase text-xs font-semibold">Company</h4>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">About</a>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">Careers</a>
              <a href="#" className="hover:text-[#FFD580] transition text-sm">Contact</a>
            </div>
          </div>

          {/* Newsletter + Socials */}
          <div className="flex flex-col gap-4">
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

            <div className="flex gap-3 mt-2">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#E0523D] hover:to-[#FFD580] hover:text-white transition-transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-3">
          <p>© {new Date().getFullYear()} CollabKaro. All rights reserved.</p>
          <p>Designed for creators & brands. ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
