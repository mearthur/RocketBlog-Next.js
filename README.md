# Projeto Next.js com Tailwind CSS e TypeScript

Este é um projeto desenvolvido com [Next.js](https://nextjs.org/), utilizando [Tailwind CSS](https://tailwindcss.com/) para estilização, [React Icons](https://react-icons.github.io/react-icons/) para ícones, [TypeScript](https://www.typescriptlang.org/) para tipagem e [pnpm](https://pnpm.io/) para gerenciamento de pacotes.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para SSR e SSG.
- [React](https://reactjs.org/) - Biblioteca para criação de interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida e responsiva.
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones para React.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript para tipagem estática e melhor desenvolvimento.
- [pnpm](https://pnpm.io/) - Gerenciador de pacotes rápido e eficiente.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (>= 12.22.0)
- [pnpm](https://pnpm.io/)

## Instalação

1. Clone o repositório:
   git clone https://github.com/seu-usuario/seu-repositorio.git
Acesse o diretório do projeto:

cd seu-repositorio
Instale as dependências com pnpm:

pnpm install
Executando o Projeto em Desenvolvimento
Inicie o servidor de desenvolvimento:

pnpm dev
O projeto estará acessível em http://localhost:3000.

Estrutura do Projeto

├── pages               # Páginas da aplicação, com roteamento automático.
│   ├── api             # Rotas de API.
│   └── index.tsx       # Página inicial.
├── public              # Arquivos públicos como imagens, favicon, etc.
├── styles              # Estilos globais e configurações do Tailwind.
├── components          # Componentes reutilizáveis.
├── types               # Definições de tipos e interfaces TypeScript.
├── README.md           # Documentação do projeto.
└── tsconfig.json       # Configurações do TypeScript.
Tailwind CSS
Este projeto utiliza o Tailwind CSS para estilização. As configurações do Tailwind estão no arquivo tailwind.config.js. Para mais detalhes sobre o uso do Tailwind, consulte a documentação oficial.

Tipos e TypeScript
Com TypeScript, o projeto ganha tipagem estática para melhor controle e redução de erros. As definições de tipos e interfaces estão na pasta types.

Adicionando Ícones com React Icons
Para adicionar ícones, importe-os diretamente de react-icons em seu componente:

import { FaBeer } from 'react-icons/fa';

const MyComponent = () => {
  return <FaBeer />;
};
Build e Produção
Para criar uma versão de produção:

pnpm build
Depois de construído, você pode iniciar o servidor de produção com:

pnpm start
