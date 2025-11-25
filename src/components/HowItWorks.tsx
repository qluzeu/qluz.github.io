import { Smartphone, Map, Gamepad2 } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Download & Sign Up",
    description: "Get the qluz app and create your profile in seconds. No complicated setup required.",
  },
  {
    icon: Map,
    title: "Explore Your Area",
    description: "Open the app and discover games and challenges near you. The city becomes your game board.",
  },
  {
    icon: Gamepad2,
    title: "Start Playing",
    description: "Join or create games with friends. Complete challenges, earn points, and have fun!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Started in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the adventure in minutes. It's easy, fun, and free to start!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
                
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow mx-auto transform hover:scale-110 transition-transform duration-300">
                    <Icon className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
