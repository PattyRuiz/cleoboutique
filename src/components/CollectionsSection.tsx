import perfumeImage from "@/assets/perfume-collection.jpg";

const CollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: "Perfumería Cleo Boutique Mystique",
      description: "Fragancias de autor con estética premium que capturan la esencia de la feminidad moderna.",
      features: ["Notas florales exclusivas", "Frascos de cristal artesanal", "Duración prolongada"],
      color: "primary"
    },
    {
      id: 2,
      title: "Brisas Aromáticas",
      description: "Body Mist con frescura sensorial, aceites esenciales y extractos florales puros.",
      features: ["Hidratación instantánea", "Aromas naturales", "Spray ultra fino"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Shampoo Cleo",
      description: "Fórmulas nutritivas con aloe vera, extractos vegetales y aceites naturales.",
      features: ["Cabello sedoso", "Ingredientes orgánicos", "Sin sulfatos"],
      color: "accent"
    },
    {
      id: 4,
      title: "Tónicos Premium",
      description: "Tónicos faciales y capilares creados con extractos y minerales de la naturaleza.",
      features: ["Equilibrio natural", "Poros refinados", "Hidratación profunda"],
      color: "forest"
    },
    {
      id: 5,
      title: "Cremas de Lujo",
      description: "Emulsiones suaves corporales y faciales con mantecas y aceites vegetales selectos.",
      features: ["Textura sedosa", "Absorción rápida", "Nutrición intensa"],
      color: "sea-deep"
    },
    {
      id: 6,
      title: "Sérums Exclusivos",
      description: "Revital It y Elixir Nocturno con fórmulas premium y extractos botánicos concentrados.",
      features: ["Regeneración celular", "Antioxidantes naturales", "Resultados visibles"],
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold">
            Colecciones 
            <span className="text-gradient-rose-gold"> Principales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada línea representa una experiencia sensorial única, 
            diseñada para elevar tu ritual de belleza diario.
          </p>
          <div className="w-24 h-1 bg-gradient-rose-gold rounded-full mx-auto"></div>
        </div>

        {/* Featured Collection */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center glass-effect rounded-3xl p-8 lg:p-12 luxury-glow">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-primary">
                Perfumería Cleo Mystique
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Nuestra colección insignia de fragancias exclusivas, 
                cada perfume cuenta una historia única a través de 
                notas cuidadosamente orquestadas que despiertan emociones.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Exclusividad", "Artesanía", "Elegancia"].map((feature) => (
                  <span key={feature} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-rose-gold rounded-2xl opacity-20 blur-xl group-hover:blur-2xl transition-luxury"></div>
              <img 
                src={perfumeImage} 
                alt="Perfumería Cleo Mystique" 
                className="relative w-full h-auto object-cover rounded-2xl transition-luxury group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className="group p-8 rounded-3xl bg-card border border-border/50 transition-luxury hover:luxury-glow hover:scale-105 shimmer-effect"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 rounded-2xl bg-${collection.color}/10 flex items-center justify-center`}>
                  <div className={`w-8 h-8 rounded-lg bg-${collection.color}/20`}></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-luxury">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {collection.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;