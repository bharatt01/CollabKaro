import { useState } from "react";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const links = {
    platform: [
      { label: "For Influencers", href: "#" },
      { label: "For Brands", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Pricing", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  };

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-300 pt-16 pb-8 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent mb-3">
                CollabKaro
              </h3>
              <p className="text-gray-600">
                Connecting brands with influencers to create authentic partnerships that drive real results.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@collabkaro.com" className="hover:text-[#E0523D] transition-colors">
                  hello@collabkaro.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin className="h-4 w-4" />
                San Francisco, CA
              </div>
            </div>

            {/* Newsletter Signup */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex mt-6 max-w-md"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Your email to stay updated"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow rounded-l-full border border-gray-300 px-4 py-2 outline-none focus:ring focus:ring-[#E0523D]/50"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white rounded-r-full px-6 font-semibold hover:brightness-110 transition"
              >
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gradient-to-br hover:from-[#E0523D] hover:to-[#FFD580] hover:text-white transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links + Insights + Contact columns */}
          <div className="md:col-span-1 lg:col-span-4 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-gray-800 capitalize">Platform</h4>
              <ul className="space-y-3">
                {links.platform.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#E0523D] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800 capitalize">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#E0523D] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-800 capitalize">Latest Insights</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#E0523D] transition-colors">
                    How Influencer Marketing Amplifies ROI in 2025
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#E0523D] transition-colors">
                    Top Creator Collaboration Trends to Watch
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#E0523D] transition-colors">
                    Measuring Campaign Success: What Really Matters
                  </a>
                </li>
              </ul>

              <h4 className="font-semibold mt-8 mb-4 text-gray-800 capitalize">Contact Us</h4>
              <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600">Mon - Fri: 9 AM - 6 PM PST</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CollabKaro. All rights reserved.</p>
          <p>Driven by creators and brands worldwide ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
