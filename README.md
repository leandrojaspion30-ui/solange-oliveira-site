# Solange Oliveira — Corretora de imóveis

Projeto importado para edição no Arena em 18/10/2026.

- Origem: https://github.com/testesimct-sys/eliteimoveis-app
- Cópia personalizada: https://github.com/leandrojaspion30-ui/solange-oliveira-site
- Commit de origem: `d66f31bdbcb5b5df418cc4da1968119248b873ec`
- Esta é uma cópia de trabalho. Nenhuma alteração foi enviada ao repositório de origem.

## Executar

Use **Node.js 22** (algumas dependências exigem essa versão).

```sh
npm ci
npm run dev
```

O servidor Express e o Vite usam a mesma porta, `3000` por padrão, e aceitam conexões em `0.0.0.0`. É possível mudar a porta com a variável `PORT`. A prévia do Arena utiliza o endereço HTTPS fornecido pela plataforma, e não o localhost do computador do usuário.

No ambiente do Arena, se a versão padrão do Node for anterior à 22:

```sh
npm exec --yes --package=node@22 -- npm run dev
```

### Verificações

```sh
npm run lint
npm run build
```

Para executar o build de produção em um ambiente compatível:

```sh
NODE_ENV=production npm start
```

## Estrutura

- `src/pages/`: site público, busca, detalhe dos imóveis e autenticação.
- `src/pages/admin/`: painel administrativo e CRM.
- `src/components/`: componentes visuais.
- `src/data.ts`: imóveis de demonstração já existentes no projeto original.
- `src/services/` e `src/firebase/`: integrações de dados e autenticação.
- `server.ts` e `server/`: servidor Express e recursos de IA.
- `api/`: handlers existentes para a implantação Vercel.

Rotas principais: `/`, `/imoveis`, `/login` e `/dashboard`.

## Integrações e limites desta importação

### Gemini

A chave privada não acompanha o repositório. Para habilitar os recursos de IA em um ambiente seguro, configure `GEMINI_API_KEY` somente no servidor. O `.env.example` contém apenas nomes de variáveis, sem credenciais. Não use prefixo `VITE_` para chaves privadas.

Sem essa configuração, o site continua executando e as rotas Express de IA respondem HTTP 503 com uma mensagem de indisponibilidade. Não foram realizadas chamadas ao Gemini nem validados os modelos configurados no projeto original.

### Firebase

A configuração pública do Firebase já estava incluída no repositório e foi preservada. Isso não equivale a importar dados ou obter acesso administrativo ao banco. A cópia ainda referencia o projeto Firebase original; ela não é uma base de testes isolada. Login, permissões, uploads e persistência precisam de validação específica. Não envie formulários ou faça operações de cadastro/exclusão com dados reais sem verificar o ambiente de destino.

**Antes de publicar:** o código original possui acesso administrativo de teste e regras de autorização que aceitam certos padrões de e-mail. Esses mecanismos precisam ser revisados; a importação não constitui uma auditoria de segurança. Não foram modificadas ou implantadas regras no serviço Firebase.

## Ajustes feitos para a execução aqui

- Liberação do domínio de prévia `.e2b.app` na configuração Vite.
- Compartilhamento do servidor HTTP com o HMR do Vite, para usar a mesma porta na prévia.
- Carregamento antecipado de variáveis de ambiente do servidor.
- Inicialização do cliente Gemini somente quando necessário, com resposta explícita se faltar a chave.
- Inclusão de `package-lock.json`, `.nvmrc` e documentação de execução.

Na importação inicial, o layout original foi preservado. Em seguida, a identidade e as páginas públicas foram personalizadas conforme a imagem fornecida (detalhes abaixo). A versão personalizada é mantida no fork `leandrojaspion30-ui/solange-oliveira-site`. O repositório de origem e os dados de serviços externos não foram alterados. O envio do código ao GitHub não equivale à implantação em uma hospedagem.


## Personalização para Solange Oliveira

Informações fornecidas na imagem `WA_1792360469275.jpeg`:

- **Corretora Solange Oliveira — CRECI-SP 229989**.
- “Realizando sonhos, abrindo portas para o seu futuro.”
- “Seu sonho, meu compromisso!”
- “Vamos realizar esse sonho juntos!”
- Compra e venda, atendimento personalizado, segurança e transparência e as melhores opções para você.

A foto e o símbolo da marca foram recortados da imagem original, sem geração de uma nova pessoa ou alteração do rosto. Os recortes estão em `public/images/`.

### Onde editar os dados

`src/config/broker.ts` centraliza o nome, o CRECI, os textos, as imagens e os contatos. A identidade foi aplicada à página inicial, cabeçalho, rodapé, página sobre, detalhes dos imóveis, interface administrativa, assistente virtual e metadados.

O telefone, WhatsApp, e-mail, endereço e redes sociais **não constam na imagem**. Os contatos antigos de exemplo foram removidos da apresentação profissional. A página `/contato` informa que os canais estão em atualização. Após confirmar o número, preencha `BROKER.whatsapp` (código do país + DDD + número, somente dígitos); os botões de contato passarão a abrir o WhatsApp. Não foi inventado um contato em nome da corretora.

Depoimentos de exemplo, números de vendas e o perfil de corretor fictício foram retirados. O catálogo original continua disponível e está identificado como demonstração. As credenciais e identificadores técnicos do ambiente de teste/Firebase foram preservados, não migrados.

As fontes Allura, Cormorant Garamond e Plus Jakarta Sans são servidas localmente. Suas licenças OFL acompanham os arquivos em `public/fonts/`.
