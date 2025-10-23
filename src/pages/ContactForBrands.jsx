import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const animDuration = 15000;

const AnimatedIcon = ({ Icon, style, delay }) => {
  return (
    <div
      className="absolute"
      style={{
        ...style,
        animation: `floatMove ${animDuration}ms ease-in-out infinite`,
        animationDelay: delay,
        willChange: "transform",
      }}
    >
      <Icon
        className="text-[#E0523D]"
        size={36}
        strokeWidth={1.5}
        style={{ filter: "drop-shadow(0 0 2px #FFD580)" }}
      />
    </div>
  );
};

const ContactForBrands = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    marketingGoal: "",
    message: "",
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We will reach out to you soon.");
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-[#FAFAFA] min-h-screen flex flex-col items-center overflow-hidden">
        {/* Animated social media icons moving around */}
        <AnimatedIcon
          Icon={Instagram}
          delay="0ms"
          style={{ top: 40, left: 20, animationDirection: "alternate" }}
        />
        <AnimatedIcon
          Icon={Twitter}
          delay="3000ms"
          style={{ top: 120, right: 40, animationDirection: "alternate-reverse" }}
        />
        <AnimatedIcon
          Icon={Linkedin}
          delay="6000ms"
          style={{ bottom: 80, left: 30, animationDirection: "alternate" }}
        />
        <AnimatedIcon
          Icon={Youtube}
          delay="9000ms"
          style={{ bottom: 50, right: 20, animationDirection: "alternate-reverse" }}
        />

        <h1
          className={`text-4xl font-extrabold mb-6 text-center transition-transform duration-700 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Contact Us <br />
          <span className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] bg-clip-text text-transparent">
            for Brands
          </span>
        </h1>

        <p
          className={`max-w-xl text-center mb-10 text-gray-700 px-6 transition-opacity duration-700 ease-out ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          Looking for authentic influencer marketing solutions? Reach out to us by filling the form below and begin your brand’s growth journey.
        </p>

        <form
          className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg relative z-10"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Company Name</span>
            <input
              type="text"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
              placeholder="Your company name"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Contact Person</span>
            <input
              type="text"
              name="contactPerson"
              required
              value={formData.contactPerson}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
              placeholder="Name of the contact person"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
              placeholder="Email address"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Marketing Goal</span>
            <input
              type="text"
              name="marketingGoal"
              value={formData.marketingGoal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
              placeholder="Brand awareness, engagement, sales, etc."
            />
          </label>

          <label className="block mb-8">
            <span className="block text-gray-700 font-semibold mb-1">Message</span>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
              placeholder="Additional information or questions"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white rounded-full w-full py-4 font-semibold text-lg hover:brightness-110 transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />

      <style>{`
        @keyframes floatMove {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(8px); }
        }
      `}</style>
    </>
  );
};

export default ContactForBrands;
