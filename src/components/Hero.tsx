import { Button } from "@/components/ui/button";
import { MapPin, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <MapPin className="w-12 h-12 text-primary opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Users className="w-16 h-16 text-secondary opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Trophy className="w-14 h-14 text-primary opacity-20" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Real World Gaming 🎮
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turn Your City Into a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Playground
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join your friends in epic geospatial adventures. Explore real locations, 
              complete challenges, and compete for glory in the ultimate location-based gaming experience.
            </p>
            
            <div className="flex justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Games Played</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={heroImage} 
                alt="Friends playing geospatial games together in real life with qluz app"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-elevated animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Challenge Complete!</div>
                  <div className="text-sm text-muted-foreground">+500 XP Earned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
