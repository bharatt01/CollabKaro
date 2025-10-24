import { FC } from "react";

export const MeetTheTeam: FC = () => (
  <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-12 text-[#E0523D] text-center">Meet The Team</h2>
    <div className="grid md:grid-cols-3 gap-12 text-center">
      <div className="flex flex-col items-center">
        <img src="/team/sarah.jpg" alt="Sarah - Head of Design" className="mx-auto rounded-full w-32 h-32 mb-6 shadow-lg border-4 border-[#FFD580]" />
        <h3 className="text-xl font-semibold mb-2">Sarah</h3>
        <p className="text-gray-700">Our creative visionary, turning ideas into engaging visuals. Also loves rescuing stray animals.</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/team/alex.jpg" alt="Alex - Marketing Lead" className="mx-auto rounded-full w-32 h-32 mb-6 shadow-lg border-4 border-[#FFD580]" />
        <h3 className="text-xl font-semibold mb-2">Alex</h3>
        <p className="text-gray-700">The marketing guru who connects brands and stories with passion and strategy.</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="/team/rahul.jpg" alt="Rahul - Tech Lead" className="mx-auto rounded-full w-32 h-32 mb-6 shadow-lg border-4 border-[#FFD580]" />
        <h3 className="text-xl font-semibold mb-2">Rahul</h3>
        <p className="text-gray-700">The tech wizard shaping powerful, smooth platform experiences. Chess enthusiast on weekends.</p>
      </div>
    </div>
  </section>
);
