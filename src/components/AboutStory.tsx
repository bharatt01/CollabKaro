import { FC } from "react";
import storyImage from "@/assets/about.png";

const AboutStory: FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our Journey
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            From humble beginnings, CollabKaro has grown into a platform that
            empowers creators and brands alike. We believe in authentic
            collaborations that create meaningful impact.
          </p>
        </div>
        <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={storyImage}
            alt="Our journey"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
