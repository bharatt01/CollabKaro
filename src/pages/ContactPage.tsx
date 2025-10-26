import { FC, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactVideo = "/Videos/contact.mp4";

const ContactPage: FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      inquiry: (form.elements.namedItem("inquiry") as HTMLInputElement).value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby5GE3CukyVt-oF0RQrudt813PL_pkMN0O26f05qR-Ps-xvO6nmRBRHVzaasSZYWmmr/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      toast.success(" Form submitted successfully!");
      form.reset();
    } catch (error) {
      toast.error(" Something went wrong! Try again.");
    }
  };

  return (
    <>
      <Navbar />

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />

      <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={contactVideo}
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl w-full mx-auto px-6 py-32 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8">
            Get in Touch
          </h1>

          <form
            ref={formRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-4 rounded-xl bg-white/20 text-white border border-white/30"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="p-4 rounded-xl bg-white/20 text-white border border-white/30"
            />

            <select
              name="subject"
              required
              className="md:col-span-2 p-4 rounded-xl bg-white/20 text-black border border-white/30"
            >
              <option value="" disabled selected className="text-white">
                Select Inquiry Type
              </option>
              <option value="Collaboration">Collaboration</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Partnership">Partnership</option>
              <option value="General Question">General Question</option>
            </select>

            <input
              type="text"
              name="inquiry"
              placeholder="Short Note (Optional)"
              className="md:col-span-2 p-4 rounded-xl bg-white/20 text-white border border-white/30"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="md:col-span-2 px-10 py-4 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold rounded-full shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
