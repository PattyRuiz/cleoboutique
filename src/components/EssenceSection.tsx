import natureImage from "@/assets/nature-essence.jpg";

const EssenceSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-gradient-to-r from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-nature rounded-3xl opacity-20 blur-2xl transform group-hover:scale-105 transition-luxury"></div>
            <div className="relative rounded-3xl overflow-hidden golden-glow">
              <img 
                src={natureImage} 
                alt="Esencia Natural - Elementos de la Naturaleza" 
                className="w-full h-auto object-cover rounded-3xl transition-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-forest/20 to-sea-deep/20 rounded-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                Nuestra 
                <span className="text-gradient-rose-gold"> Esencia</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-rose-gold rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                <strong className="text-primary">Filosofía Cleo:</strong> cosmética artesanal 
                que une la sabiduría ancestral con la innovación moderna.
              </p>
              <p>
                Cada producto nace de extractos botánicos cuidadosamente seleccionados, 
                aceites esenciales puros, flores silvestres, raíces milenarias y 
                minerales naturales que conservan toda su potencia vital.
              </p>
              <p>
                Creamos rituales sensoriales únicos que despiertan la conexión 
                profunda entre tu piel y los dones más puros de la naturaleza.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 glass-effect rounded-2xl">
                <div className="text-2xl font-serif font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl">
                <div className="text-2xl font-serif font-bold text-secondary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Químicos Dañinos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssenceSection;