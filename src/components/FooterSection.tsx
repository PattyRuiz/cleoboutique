const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-foreground to-sea-deep text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-40 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          {/* Main Message */}
          <div className="text-center space-y-12 mb-16">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="text-secondary">Cleo</span> es más que cosmética
              </h2>
              <p className="text-2xl lg:text-3xl font-light text-white/80 leading-relaxed max-w-4xl mx-auto">
                es un ritual sensorial para mujeres elegantes y fuertes
              </p>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto"></div>

            <div className="space-y-6">
              <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                Descubre una nueva dimensión en el cuidado personal, 
                donde cada producto es una invitación a conectar con tu esencia más auténtica.
              </p>
              
              <button className="group relative px-10 py-4 bg-gradient-to-r from-secondary to-accent text-foreground font-semibold rounded-full transition-luxury hover:scale-105 golden-glow shimmer-effect">
                <span className="relative z-10">Conócenos</span>
              </button>
            </div>
          </div>

          {/* Brand Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 p-6 glass-effect rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-secondary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-serif font-semibold">Naturaleza Pura</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Ingredientes seleccionados con los más altos estándares de calidad y pureza natural.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 glass-effect rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-serif font-semibold">Artesanía Premium</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cada producto es creado con técnicas artesanales y atención meticulosa al detalle.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 glass-effect rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-accent rounded-lg"></div>
              </div>
              <h3 className="text-xl font-serif font-semibold">Experiencia Única</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Rituales sensoriales que transforman el cuidado personal en momentos de lujo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-serif font-bold text-secondary mb-2">Cleo</div>
              <div className="text-sm text-white/60">
                Cosmética Natural de Lujo © 2024
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-white/60">
                Creado con amor para mujeres extraordinarias
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-rose-gold rounded-full animate-pulse"></div>
              <div className="w-6 h-6 bg-secondary/60 rounded-full animate-pulse delay-500"></div>
              <div className="w-4 h-4 bg-accent/60 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;