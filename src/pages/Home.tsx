import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import BrokerServices from '../components/BrokerServices';
import BrokerAbout from '../components/BrokerAbout';
import ContactCallout from '../components/ContactCallout';
import { MOCK_PROPERTIES } from '../data';

export default function Home() {
  const featuredProperties = MOCK_PROPERTIES.filter(property => property.featured);
  return (
    <div>
      <Hero />
      <BrokerServices />
      <section className="featured-section">
        <div className="site-container">
          <div className="section-intro"><div><p className="eyebrow">Um lugar para chamar de seu</p><h2 className="editorial-heading">Encontre o seu <em>próximo lar.</em></h2><p className="section-description">Cada novo começo merece o endereço certo. Conheça as opções do catálogo.</p></div><Link to="/imoveis" className="text-link">Ver todos os imóveis <ArrowUpRight size={19} /></Link></div>
          <div className="catalog-notice">Catálogo de demonstração</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">{featuredProperties.map(property => <PropertyCard key={property.id} property={property} />)}</div>
        </div>
      </section>
      <BrokerAbout />
      <section className="care-section"><div className="site-container care-intro"><p className="eyebrow">Muito além de encontrar um imóvel</p><h2 className="editorial-heading">Cuidado em cada <em>nova conquista.</em></h2></div><BrokerServices detailed /></section>
      <ContactCallout />
    </div>
  );
}
