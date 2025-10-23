import { Button } from "@/components/ui/button";

const InfluencerCTA = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-r from-primary/90 via-primary to-primary/80 text-white">
      <div className="container mx-auto px-6 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to <span className="italic">Collaborate?</span>
        </h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Let’s create campaigns that connect, inspire, and convert. Join thousands of influencers already earning with CollabKaro.
        </p>
        <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default InfluencerCTA;
