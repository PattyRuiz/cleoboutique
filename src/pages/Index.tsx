import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EssenceSection from "@/components/EssenceSection";
import CollectionsSection from "@/components/CollectionsSection";
import IngredientsSection from "@/components/IngredientsSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Cleo - Cosmética Natural de Lujo | Belleza Premium Artesanal";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Descubre Cleo: cosmética natural de lujo que conecta ciencia, naturaleza y arte. Extractos botánicos, aceites esenciales y fórmulas exclusivas para tu ritual de belleza premium.'
      );
    }

    // Add structured data for luxury beauty brand
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Brand",
      "name": "Cleo Cosmética Natural",
      "description": "Marca de cosmética natural de lujo con ingredientes botánicos premium",
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.ico`,
      "sameAs": [],
      "founder": {
        "@type": "Organization",
        "name": "Cleo Beauty"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Essence Section */}
      <EssenceSection />
      
      {/* Collections Section */}
      <CollectionsSection />
      
      {/* Ingredients Section */}
      <IngredientsSection />
      
      {/* Craftsmanship Section */}
      <CraftsmanshipSection />
      
      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};

export default Index;
