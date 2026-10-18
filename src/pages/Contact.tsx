import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, Mail, Phone, MessageCircle, Clock3 } from 'lucide-react';
import { BROKER, getBrokerWhatsAppUrl } from '../config/broker';

export default function Contact() {
  const whatsappUrl = getBrokerWhatsAppUrl();
  const hasContact = Boolean(whatsappUrl || BROKER.email || BROKER.phone);
  return (
    <section className="contact-page">
      <div className="site-container contact-page-grid">
        <div><p className="eyebrow">Atendimento personalizado</p><h1 className="editorial-heading">Vamos realizar<br /><em>esse sonho juntos!</em></h1><p className="contact-page-intro">Entre em contato comigo para realizar o sonho da casa própria. Seu sonho, meu compromisso!</p><Link to="/imoveis" className="text-link">Explore os imóveis <ArrowUpRight size={19} /></Link></div>
        <div className="contact-profile-card"><div className="contact-profile-heading"><img src={BROKER.avatar} alt="Corretora Solange Oliveira" width="88" height="88" /><div><h2>{BROKER.name}</h2><p>Corretora de imóveis</p><span><BadgeCheck size={16} />{BROKER.creci}</span></div></div>
          {hasContact ? <div className="contact-channels">{whatsappUrl && <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="broker-button broker-button-dark"><MessageCircle size={19} />Conversar no WhatsApp<ArrowUpRight size={18} /></a>}{BROKER.phone && <a href={`tel:${BROKER.phone.replace(/[^\d+]/g, '')}`}><Phone size={18} />{BROKER.phone}</a>}{BROKER.email && <a href={`mailto:${BROKER.email}`}><Mail size={18} />{BROKER.email}</a>}{BROKER.address && <p>{BROKER.address}</p>}</div> : <div className="contact-pending"><Clock3 size={23} strokeWidth={1.5} /><div><h3>Canais de contato em atualização</h3><p>O telefone e o e-mail da Solange serão disponibilizados aqui assim que confirmados.</p></div></div>}
          <div className="contact-profile-note">Atendimento com segurança, transparência e atenção ao que é importante para você.</div>
        </div>
      </div>
    </section>
  );
}
