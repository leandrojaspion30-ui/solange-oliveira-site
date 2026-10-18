import { House, Handshake, FileCheck2, KeyRound } from 'lucide-react';
import { BROKER_SERVICES } from '../config/broker';

const icons = [House, Handshake, FileCheck2, KeyRound];

export default function BrokerServices({ detailed = false }: { detailed?: boolean }) {
  return (
    <section className={`broker-services ${detailed ? 'broker-services-detailed' : ''}`} aria-label="Como posso ajudar você">
      <div className="site-container services-grid">
        {BROKER_SERVICES.map((service, index) => {
          const Icon = icons[index];
          return (
            <div className="service-item" key={service.title}>
              <Icon className="service-icon" size={30} strokeWidth={1.45} aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                {detailed && <p>{service.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
