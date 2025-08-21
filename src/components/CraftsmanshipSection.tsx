const CraftsmanshipSection = () => {
  const craftSteps = [
    {
      step: "01",
      title: "Selección Artesanal",
      description: "Cada ingrediente es cuidadosamente seleccionado en su momento óptimo de potencia y pureza."
    },
    {
      step: "02", 
      title: "Extracción Delicada",
      description: "Procesos suaves que preservan la integridad molecular y las propiedades activas naturales."
    },
    {
      step: "03",
      title: "Formulación Exclusiva", 
      description: "Mezclas únicas desarrolladas con precisión científica y sensibilidad artística."
    },
    {
      step: "04",
      title: "Envasado Premium",
      description: "Frascos elegantes diseñados para preservar la calidad y realzar la experiencia sensorial."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-l from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold">
            Artesanía y 
            <span className="text-gradient-rose-gold"> Diseño</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cleo une la cosmética artesanal tradicional con un estilo premium contemporáneo, 
            creando productos que son verdaderas obras de arte funcional.
          </p>
          <div className="w-24 h-1 bg-gradient-rose-gold rounded-full mx-auto"></div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">
                El Arte de la Creación
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Cada producto Cleo nace de un proceso meticuloso que combina 
                la sabiduría ancestral con las técnicas más avanzadas de 
                cosmética natural premium.
              </p>
            </div>

            <div className="space-y-8">
              {craftSteps.map((step, index) => (
                <div 
                  key={step.step} 
                  className="group relative p-6 rounded-2xl transition-luxury hover:bg-card hover:luxury-glow"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-rose-gold rounded-2xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-luxury">
                      {step.step}
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-luxury">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Design Elements */}
              <div className="space-y-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl glass-effect flex items-center justify-center group hover:scale-105 transition-luxury">
                  <div className="w-16 h-16 bg-gradient-rose-gold rounded-2xl animate-float"></div>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-mineral/40 rounded-3xl glass-effect flex items-center justify-center group hover:scale-105 transition-luxury">
                  <div className="space-y-3">
                    <div className="w-12 h-2 bg-primary/60 rounded-full"></div>
                    <div className="w-8 h-2 bg-secondary/60 rounded-full"></div>
                    <div className="w-10 h-2 bg-accent/60 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 mt-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-forest/20 to-sea-deep/20 rounded-3xl glass-effect flex items-center justify-center group hover:scale-105 transition-luxury">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-3 h-3 bg-gradient-rose-gold rounded-full animate-sparkle"
                        style={{ animationDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl glass-effect flex items-center justify-center group hover:scale-105 transition-luxury">
                  <div className="w-20 h-20 border-4 border-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-rose-gold rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Central Floating Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-rose-gold rounded-full luxury-glow animate-float opacity-80"></div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="p-12 glass-effect rounded-3xl space-y-6">
            <div className="text-6xl text-primary/20 font-serif">"</div>
            <blockquote className="text-2xl lg:text-3xl font-serif font-medium text-foreground leading-relaxed italic">
              En Cleo, cada frasco contiene no solo ingredientes excepcionales, 
              sino el alma de quienes los crearon con pasión y dedicación.
            </blockquote>
            <div className="text-sm text-muted-foreground tracking-wider">
              — FILOSOFÍA CLEO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;