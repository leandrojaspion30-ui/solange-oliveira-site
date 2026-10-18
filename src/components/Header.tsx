import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, MessageCircle, X, Heart, User, LogOut, LayoutDashboard, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import BrandLogo from './BrandLogo';
import ContactLink from './ContactLink';
import { BROKER } from '../config/broker';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Comprar', href: '/imoveis?purpose=SALE' },
  { name: 'Alugar', href: '/imoveis?purpose=RENT' },
  { name: 'A Solange', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, isAdmin, isBroker, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname, search]);
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', handleKey);
      menuButton.current?.focus();
    };
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    try { await logout(); setIsMobileMenuOpen(false); navigate('/'); }
    catch (error) { console.error('Erro ao sair:', error); }
  };
  const active = (href: string) => href.includes('?') ? `${pathname}${search}` === href : pathname === href;

  return (
    <>
      <header className="broker-header">
        <div className="site-container header-inner">
          <Link to="/" aria-label="Solange Oliveira — início" className="header-brand"><BrandLogo /></Link>
          <nav className="desktop-nav" aria-label="Menu principal">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={active(link.href) ? 'active' : ''} aria-current={active(link.href) ? 'page' : undefined}>{link.name}</Link>)}
          </nav>
          <div className="header-actions">
            <Link to="/favoritos" className="header-icon" aria-label="Meus imóveis favoritos"><Heart size={20} strokeWidth={1.65} /></Link>
            {currentUser ? (
              <>
                {(isAdmin || isBroker) && <Link to="/dashboard" className="header-icon" aria-label="Abrir painel administrativo"><LayoutDashboard size={20} /></Link>}
                <button onClick={handleLogout} className="header-icon" aria-label="Sair da conta"><LogOut size={20} /></button>
              </>
            ) : <Link to="/login" className="header-icon" aria-label="Entrar na conta"><User size={20} strokeWidth={1.65} /></Link>}
            <ContactLink className="header-contact"><MessageCircle size={17} /> Vamos conversar</ContactLink>
            <button ref={menuButton} className="mobile-menu-button" onClick={() => setIsMobileMenuOpen(true)} aria-label="Abrir menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation"><Menu size={27} strokeWidth={1.6} /></button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div className="mobile-navigation" id="mobile-navigation" ref={dialogRef} role="dialog" aria-modal="true" aria-label="Navegação">
          <div className="mobile-navigation-top"><Link to="/" onClick={() => setIsMobileMenuOpen(false)}><BrandLogo /></Link><button ref={closeButton} onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu"><X size={28} /></button></div>
          <nav aria-label="Menu para celular">{navLinks.map((link, index) => <Link key={link.href} to={link.href} onClick={() => setIsMobileMenuOpen(false)}><span>0{index + 1}</span>{link.name}<ArrowUpRight size={22} /></Link>)}</nav>
          <div className="mobile-navigation-bottom">
            {(isAdmin || isBroker) && <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Painel administrativo</Link>}
            {currentUser ? <button onClick={handleLogout}>Sair da conta</button> : <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}><User size={18} /> Entrar na conta</Link>}
            <ContactLink className="broker-button broker-button-dark" onClick={() => setIsMobileMenuOpen(false)}>Fale com a Solange <MessageCircle size={18} /></ContactLink>
            <small>{BROKER.creci} · {BROKER.promise}</small>
          </div>
        </div>
      )}
    </>
  );
}
