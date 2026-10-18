import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, Mail, Phone } from 'lucide-react';
import { BROKER } from '../config/broker';
import BrandLogo from './BrandLogo';
import ContactLink from './ContactLink';

export default function Footer() {
  return (
    <footer className="broker-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand"><Link to="/" aria-label="Solange Oliveira — início"><BrandLogo light /></Link><p>{BROKER.slogan}</p><span className="footer-creci"><BadgeCheck size={18} />{BROKER.creci}</span></div>
          <div className="footer-navigation"><h3>Encontre seu caminho</h3><Link to="/imoveis?purpose=SALE">Imóveis à venda</Link><Link to="/imoveis?purpose=RENT">Imóveis para alugar</Link><Link to="/sobre">Conheça a Solange</Link><Link to="/contato">Atendimento</Link></div>
          <div className="footer-invitation"><h3>Seu sonho, meu compromisso!</h3><p>Compra e venda com atendimento personalizado, segurança e transparência.</p>{BROKER.email && <a href={`mailto:${BROKER.email}`}><Mail size={17} />{BROKER.email}</a>}{BROKER.phone && <a href={`tel:${BROKER.phone.replace(/[^\d+]/g, '')}`}><Phone size={17} />{BROKER.phone}</a>}<ContactLink className="footer-contact-link">Vamos realizar esse sonho juntos <ArrowUpRight size={18} /></ContactLink></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} {BROKER.name}. Todos os direitos reservados.</p><span>Corretora de imóveis · {BROKER.creci}</span></div>
      </div>
    </footer>
  );
}
