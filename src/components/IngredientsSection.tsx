import ingredientsImage from "@/assets/ingredients.jpg";

const IngredientsSection = () => {
  const extractos = [
    { name: "Lavanda", benefit: "Calma y relajación" },
    { name: "Rosas", benefit: "Hidratación intensa" },
    { name: "Avena Coloidal", benefit: "Suavidad natural" },
    { name: "Aloe Vera", benefit: "Regeneración celular" },
    { name: "Centella Asiática", benefit: "Antioxidante poderoso" },
    { name: "Hibisco", benefit: "Luminosidad natural" },
    { name: "Ginseng", benefit: "Energía y vitalidad" },
    { name: "Goji Berry", benefit: "Antienvejecimiento" }
  ];

  const aceites = [
    { name: "Naranja Dulce", benefit: "Revitalización" },
    { name: "Romero", benefit: "Estimulación circulatoria" },
    { name: "Lavanda", benefit: "Equilibrio emocional" },
    { name: "Melaleuca", benefit: "Purificación natural" },
    { name: "Rosa Mosqueta", benefit: "Regeneración profunda" }
  ];

  return (
    <section className="py-24 bg-gradient-nature text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
                Ingredientes con 
                <span className="text-secondary"> Alma</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Cada producto Cleo contiene la esencia pura de la naturaleza, 
                seleccionada por sus propiedades excepcionales y beneficios únicos.
              </p>
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </div>

            {/* Extractos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-secondary">
                Extractos Botánicos Selectos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {extractos.map((extracto, index) => (
                  <div 
                    key={extracto.name} 
                    className="p-4 glass-effect rounded-2xl transition-luxury hover:bg-white/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                      <div>
                        <h4 className="font-semibold text-white">{extracto.name}</h4>
                        <p className="text-sm text-white/70">{extracto.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aceites Esenciales */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-semibold text-accent">
                Aceites Esenciales Puros
              </h3>
              <div className="space-y-3">
                {aceites.map((aceite, index) => (
                  <div 
                    key={aceite.name} 
                    className="flex justify-between items-center p-3 glass-effect rounded-xl transition-luxury hover:bg-white/10"
                    style={{ animationDelay: `${(extractos.length + index) * 50}ms` }}
                  >
                    <span className="font-medium text-white">{aceite.name}</span>
                    <span className="text-sm text-accent">{aceite.benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-2xl transform scale-110"></div>
            <div className="relative rounded-3xl overflow-hidden golden-glow">
              <img 
                src={ingredientsImage} 
                alt="Ingredientes Naturales Cleo" 
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent rounded-3xl"></div>
              
              {/* Floating Labels */}
              <div className="absolute top-6 left-6 px-4 py-2 glass-effect rounded-full">
                <span className="text-sm font-medium text-white">100% Natural</span>
              </div>
              <div className="absolute bottom-6 right-6 px-4 py-2 glass-effect rounded-full">
                <span className="text-sm font-medium text-white">Orgánico Certificado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center space-y-2">
            <div className="text-3xl font-serif font-bold text-secondary">50+</div>
            <div className="text-sm text-white/70">Extractos Únicos</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-serif font-bold text-accent">25+</div>
            <div className="text-sm text-white/70">Aceites Esenciales</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-serif font-bold text-secondary">100%</div>
            <div className="text-sm text-white/70">Sustentable</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-serif font-bold text-accent">0</div>
            <div className="text-sm text-white/70">Crueldad Animal</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;