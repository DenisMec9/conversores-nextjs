# Conversores Pro

Aplicação em Next.js 15 com arquitetura modular para conversores de moeda, temperatura e distância.

## Stack

- Next.js App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Vitest + Testing Library

## Estrutura

- `src/app`: rotas e composição de páginas
- `src/components`: componentes de layout e UI
- `src/features/converters`: regras de negócio por domínio
- `src/config`: configurações de navegação
- `src/styles`: tokens visuais do tema

## Rotas

- `/` Página inicial
- `/sobre` Informações do projeto
- `/conversores/moeda` BRL e USD com cotação em tempo real
- `/conversores/temperatura` Celsius e Fahrenheit
- `/conversores/distancia` Metros, pés e polegadas

Rotas antigas continuam funcionando via redirecionamento:
- `/conversor-dolar`
- `/conversor-temperatura`
- `/conversor-distancia`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run test:watch
```
