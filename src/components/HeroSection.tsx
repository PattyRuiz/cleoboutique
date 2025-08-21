import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero sparkle-bg overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-sparkle opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-sparkle delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-sparkle delay-2000"></div>
        <div className="absolute bottom-40 right-40 w-1 h-1 bg-primary-glow rounded-full animate-sparkle delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                <span className="text-gradient-rose-gold">Cleo</span>
                <span className="block text-foreground mt-2">
                  Cosmética Natural de Lujo
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
                que conecta ciencia, naturaleza y arte
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Extractos, aceites esenciales y fórmulas exclusivas creadas con el alma, 
                para elevar tu experiencia de cuidado personal.
              </p>
            </div>

            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-gradient-rose-gold text-white font-medium rounded-full transition-luxury hover:scale-105 luxury-glow shimmer-effect">
                <span className="relative z-10">Descubre Cleo</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl transform scale-110"></div>
            <div className="relative luxury-glow rounded-3xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Colección Cleo - Cosmética Natural de Lujo" 
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;