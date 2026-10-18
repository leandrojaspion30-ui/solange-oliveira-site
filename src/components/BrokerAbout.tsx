import { ArrowUpRight, BadgeCheck } from 'lucide-react';
import { BROKER } from '../config/broker';
import ContactLink from './ContactLink';

export default function BrokerAbout({ page = false }: { page?: boolean }) {
  const Heading = page ? 'h1' : 'h2';
  return (
    <section className={`broker-about ${page ? 'broker-about-page' : ''}`} id="sobre">
      <div className="site-container about-grid">
        <div className="about-identity">
          <div className="about-photo-wrap">
            <img src={BROKER.portrait} alt="Solange Oliveira, corretora de imóveis" loading={page ? 'eager' : 'lazy'} width="398" height="766" />
          </div>
          <div className="about-signature">
            <span>Solange Oliveira</span>
            <small>Corretora de imóveis</small>
          </div>
        </div>
        <div className="about-content">
          <p className="eyebrow">Muito prazer, sou a Solange.</p>
          <Heading className="editorial-heading">Seu sonho,<br /><em>meu compromisso!</em></Heading>
          <p>Sou <strong>{BROKER.name}</strong>, corretora de imóveis. Acredito que encontrar um lar começa com uma boa conversa e com atenção ao que é importante para você.</p>
          <p>Meu compromisso é oferecer atendimento personalizado na compra e venda de imóveis, com segurança e transparência em cada etapa. Vamos encontrar as melhores opções para o seu próximo passo.</p>
          <div className="about-registration"><BadgeCheck size={23} strokeWidth={1.6} /><span>{BROKER.creci}</span></div>
          <ContactLink className="text-link">Vamos realizar esse sonho juntos <ArrowUpRight size={19} /></ContactLink>
        </div>
      </div>
    </section>
  );
}
