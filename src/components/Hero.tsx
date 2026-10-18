import { ArrowUpRight, ArrowRight, MapPin, House, Search, BadgeCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { BROKER } from '../config/broker';
import ContactLink from './ContactLink';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set('q', searchQuery.trim());
    if (type) params.set('type', type);
    if (purpose) params.set('purpose', purpose);
    navigate(`/imoveis${params.size ? `?${params}` : ''}`);
  };

  return (
    <section className="broker-hero">
      <div className="hero-decoration" aria-hidden="true" />
      <div className="site-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Corretora Solange Oliveira</p>
            <h1>Realizando sonhos,<br /><em>abrindo portas</em><br />para o seu futuro.</h1>
            <p className="hero-description">Compra e venda de imóveis com atendimento personalizado, segurança e transparência. O seu novo capítulo começa aqui.</p>
            <div className="hero-actions">
              <Link to="/imoveis" className="broker-button broker-button-dark">Encontre seu imóvel <ArrowUpRight size={20} /></Link>
              <ContactLink className="hero-contact">Fale com a Solange <ArrowRight size={18} /></ContactLink>
            </div>
            <div className="hero-promise"><span className="promise-line" /> {BROKER.promise}</div>
          </div>
          <div className="hero-person">
            <div className="portrait-outline" aria-hidden="true" />
            <div className="hero-portrait">
              <img src={BROKER.portrait} alt="Solange Oliveira, corretora de imóveis — CRECI-SP 229989" width="398" height="766" fetchPriority="high" />
              <div className="portrait-caption"><span>Solange Oliveira</span><small>Um atendimento feito para você.</small></div>
            </div>
            <div className="hero-creci"><BadgeCheck size={25} strokeWidth={1.45} /><div><span>Corretora de imóveis</span><strong>{BROKER.creci}</strong></div></div>
          </div>
        </div>
        <form className="hero-search" onSubmit={handleSearch} aria-label="Encontre seu imóvel">
          <div className="search-field search-location"><MapPin size={20} strokeWidth={1.5} /><div><label htmlFor="hero-location">Onde você quer morar?</label><input id="hero-location" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Cidade, bairro ou código" /></div></div>
          <div className="search-field"><House size={20} strokeWidth={1.5} /><div><label htmlFor="hero-type">Tipo de imóvel</label><select id="hero-type" value={type} onChange={event => setType(event.target.value)}><option value="">Todos os tipos</option><option value="HOUSE">Casa</option><option value="APARTMENT">Apartamento</option><option value="PENTHOUSE">Cobertura</option><option value="LAND">Terreno</option><option value="COMMERCIAL">Comercial</option></select></div></div>
          <div className="search-field"><div><label htmlFor="hero-purpose">O que você procura?</label><select id="hero-purpose" value={purpose} onChange={event => setPurpose(event.target.value)}><option value="">Comprar ou alugar</option><option value="SALE">Comprar</option><option value="RENT">Alugar</option></select></div></div>
          <button type="submit" className="broker-button broker-button-gold"><Search size={19} /> Buscar imóveis</button>
        </form>
      </div>
    </section>
  );
}
