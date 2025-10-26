import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
  const formRef = useRef<HTMLFormElement | null>(null);
  // const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  const form = formRef.current;
  const formData = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    industry: (form.elements.namedItem("industry") as HTMLInputElement).value,
    requirement: (form.elements.namedItem("requirement") as HTMLSelectElement).value,
    contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
  };

  // **Toast Notification While Submitting**
  toast.info("Submitting your details...", {
    position: "top-right",
    autoClose: 1400,
    pauseOnHover: false,
  });

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyBvHdS6SH690ti9KgTVpsPHJoYcS07xctOTgRIyXBLPoGA2fSPiOTwQhd9KztyxxVcVg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // **Success Toast**
    toast.success("✅ Submitted Successfully!", {
      position: "top-right",
      autoClose: 2500,
      theme: "colored",
    });

    form.reset();
  } catch (error) {
    console.error(error);

    // **Error Toast**
    toast.error("❌ Something went wrong. Try again.", {
      position: "top-right",
      autoClose: 2500,
      theme: "colored",
    });
  }
};

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-[#FAFAFA] min-h-screen flex flex-col items-center overflow-hidden">
        {/* Animated social media icons */}
        <AnimatedIcon Icon={Instagram} delay="0ms" style={{ top: 40, left: 20, animationDirection: "alternate" }} />
        <AnimatedIcon Icon={Twitter} delay="3000ms" style={{ top: 120, right: 40, animationDirection: "alternate-reverse" }} />
        <AnimatedIcon Icon={Linkedin} delay="6000ms" style={{ bottom: 80, left: 30, animationDirection: "alternate" }} />
        <AnimatedIcon Icon={Youtube} delay="9000ms" style={{ bottom: 50, right: 20, animationDirection: "alternate-reverse" }} />

        <h1 className={`text-4xl font-extrabold mb-6 text-center transition-transform duration-700 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Contact Us <br />
          <span className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] bg-clip-text text-transparent">
            for Brands
          </span>
        </h1>

        <p className={`max-w-xl text-center mb-10 text-gray-700 px-6 transition-opacity duration-700 ease-out ${animate ? "opacity-100" : "opacity-0"}`}>
          Reach out to us by filling the form below and start your brand’s growth journey.
        </p>

        <form
          ref={formRef}
          className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg relative z-10"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Brand Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your brand name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Industry</span>
            <input
              type="text"
              name="industry"
              required
              placeholder="Industry/sector"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Requirement</span>
            <select
              name="requirement"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
            >
              <option value="" disabled selected>Select your requirement</option>
              <option value="Brand Awareness">Brand Awareness</option>
              <option value="Influencer Marketing">Influencer Marketing</option>
              <option value="Sales Campaign">Sales Campaign</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="block mb-8">
            <span className="block text-gray-700 font-semibold mb-1">Contact Info</span>
            <input
              type="text"
              name="contact"
              required
              placeholder="Email or phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none transition"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white rounded-full w-full py-4 font-semibold text-lg hover:brightness-110 transition transform hover:scale-105"
          >
            Submit
          </button>

          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </section>
      <ToastContainer
  position="top-right"
  autoClose={2500}
  pauseOnHover={false}
  newestOnTop={true}
  theme="light"
/>

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
