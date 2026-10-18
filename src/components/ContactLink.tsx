import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { getBrokerWhatsAppUrl } from '../config/broker';

export default function ContactLink({ children, className, message, onClick }: {
  children: ReactNode;
  className?: string;
  message?: string;
  onClick?: () => void;
}) {
  const url = getBrokerWhatsAppUrl(message);
  if (url) return <a href={url} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>;
  return <Link to="/contato" className={className} onClick={onClick}>{children}</Link>;
}
