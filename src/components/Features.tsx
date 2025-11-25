import { MapPin, Users, Trophy, Zap, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Real-World Exploration",
    description: "Discover hidden gems in your city as you complete location-based challenges and unlock new areas.",
  },
  {
    icon: Users,
    title: "Play With Friends",
    description: "Team up with friends or compete against them in multiplayer games that span entire cities.",
  },
  {
    icon: Trophy,
    title: "Epic Challenges",
    description: "Complete quests, earn rewards, and climb the leaderboards as you master each location.",
  },
  {
    icon: Zap,
    title: "Instant Action",
    description: "Jump into games instantly with our fast matchmaking system. No waiting, just playing.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join thousands of players worldwide in events, tournaments, and seasonal competitions.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy matters. Play safely with our built-in security features and community guidelines.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              qluz
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of social gaming with features designed to bring you and your friends together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
