const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-primary shadow-glow flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  {/* Magnifying glass circle */}
                  <circle 
                    cx="10" 
                    cy="10" 
                    r="6" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                  {/* Magnifying glass handle */}
                  <line 
                    x1="14.5" 
                    y1="14.5" 
                    x2="19" 
                    y2="19" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  {/* Q tail - small diagonal line inside the circle */}
                  <line 
                    x1="12" 
                    y1="12" 
                    x2="14" 
                    y2="14" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">qluz</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your city into the ultimate gaming playground. 
              Play, explore, and compete with friends in real-world adventures.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 qluz. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Made with ❤️ for gamers worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
