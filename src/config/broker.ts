// Informações transcritas do material fornecido pela proprietária do site.
// Contatos não aparecem na imagem: só preencher após confirmação.
export const BROKER = {
  name: 'Solange Oliveira',
  title: 'Corretora de imóveis',
  creci: 'CRECI-SP 229989',
  slogan: 'Realizando sonhos, abrindo portas para o seu futuro.',
  promise: 'Seu sonho, meu compromisso!',
  invitation: 'Vamos realizar esse sonho juntos!',
  portrait: '/images/solange-oliveira-retrato.webp',
  avatar: '/images/solange-oliveira-perfil.webp',
  symbol: '/images/solange-oliveira-simbolo.png',
  whatsapp: '', // Número completo com código do país e DDD, apenas dígitos.
  phone: '',
  email: '',
  address: '',
};

export const BROKER_SERVICES = [
  { title: 'Compra e venda', description: 'O primeiro passo para encontrar seu novo lar ou apresentar seu imóvel a novas possibilidades.' },
  { title: 'Atendimento personalizado', description: 'Uma conversa sobre seus planos, suas necessidades e o que realmente importa para você.' },
  { title: 'Segurança e transparência', description: 'Clareza nas informações e cuidado em cada etapa da sua jornada imobiliária.' },
  { title: 'As melhores opções para você', description: 'A busca por um imóvel que faça sentido para seu momento de vida e seus sonhos.' },
];

export function getBrokerWhatsAppUrl(message = 'Olá, Solange! Gostaria de conversar sobre um imóvel.') {
  const phone = BROKER.whatsapp.replace(/\D/g, '');
  return phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : null;
}
