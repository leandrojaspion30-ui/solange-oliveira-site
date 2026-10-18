import { ArrowUpRight, HouseHeart } from 'lucide-react';
import ContactLink from './ContactLink';

export default function ContactCallout() {
  return (
    <section className="contact-callout">
      <div className="site-container callout-inner">
        <div className="callout-icon"><HouseHeart size={38} strokeWidth={1.2} /></div>
        <div className="callout-copy">
          <p className="eyebrow">Uma nova história começa com uma conversa</p>
          <h2 className="editorial-heading">Vamos realizar <em>esse sonho juntos?</em></h2>
          <p>Entre em contato comigo para realizar o sonho da casa própria.</p>
        </div>
        <ContactLink className="broker-button broker-button-gold">Fale com a Solange <ArrowUpRight size={19} /></ContactLink>
      </div>
    </section>
  );
}
