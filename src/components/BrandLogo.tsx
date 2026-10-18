import { BROKER } from '../config/broker';

export default function BrandLogo({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <span className={`brand-logo ${light ? 'brand-logo-light' : ''}`} aria-label={`${BROKER.name}, ${BROKER.title}`}>
      <img src={BROKER.symbol} width="76" height="32" alt="" className="brand-symbol" />
      {!compact && (
        <span className="brand-wordmark">
          <span className="brand-firstname">SOLANGE <span className="brand-surname">Oliveira</span></span>
          <span className="brand-profession">Corretora de imóveis</span>
        </span>
      )}
    </span>
  );
}
