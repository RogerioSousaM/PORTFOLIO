# Portfólio - Desenvolvedor Criativo

## Sobre o Projeto

Este é um portfólio pessoal desenvolvido com tecnologias modernas para mostrar projetos e habilidades de desenvolvimento.

## Tecnologias Utilizadas

Este projeto é construído com:

- **Vite** - Build tool e dev server
- **TypeScript** - Linguagem de programação tipada
- **React** - Biblioteca para interfaces de usuário
- **shadcn/ui** - Componentes de UI modernos
- **Tailwind CSS** - Framework CSS utilitário

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd Portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── lib/           # Utilitários e configurações
└── main.tsx       # Ponto de entrada da aplicação
```

## Deploy

Para fazer o deploy do projeto:

1. Execute o build de produção:
```bash
npm run build
```

2. Os arquivos de produção estarão na pasta `dist/`

3. Faça o upload dos arquivos para seu servidor de hospedagem

## Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são sempre bem-vindas!

## Licença

Este projeto está sob a licença MIT.
