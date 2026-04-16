<div align="center">

# 🍃 Mineiro Gourmet

### *Do Fogo de Lenha Para Sua Mesa*

**Delivery de culinária mineira gourmet com pedidos pelo WhatsApp**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## ✨ Funcionalidades

- 🎬 **Hero com vídeo** da Cachoeira de São Tomé das Letras (loop de minutagem customizada via YouTube API)
- 🎥 **Navbar com vídeo de fundo** quando no topo da página
- 🍽️ **Cardápio com 17 pratos mineiros** autênticos, com busca e filtros por categoria
- ☕ **Seção Café da Manhã Mineiro** — pão de queijo, doce de leite e café Canastra
- 🛒 **Carrinho persistente** com Zustand (sobrevive ao refresh da página)
- 📱 **Finalização pelo WhatsApp** com mensagem formatada e negrito
- 🟢 **Registro de pedidos no Supabase** com histórico completo
- 🎨 **Paleta de cores mineira** inspirada em pedra-sabão, terra vermelha e milho

---

## 🖥️ Screenshots

> *Cachoeira de São Tomé como hero · Grade de pratos · Drawer do carrinho · Seção café*

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.2 | Framework React (Pages Router) |
| [TypeScript](https://typescriptlang.org) | 5.9 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Estilização com tokens CSS |
| [Zustand](https://zustand-demo.pmnd.rs) | 5.0 | Estado global do carrinho |
| [Supabase](https://supabase.com) | 2.x | Banco de dados de pedidos |
| [Lucide React](https://lucide.dev) | 1.7 | Ícones |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Classes condicionais |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.5 | Merge seguro de classes Tailwind |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- [Node.js 18+](https://nodejs.org)
- [pnpm](https://pnpm.io) (`npm install -g pnpm`)

### 1. Clone o repositório

```bash
git clone https://github.com/Menephyl/delivery-gourmet.git
cd delivery-gourmet
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_SUPABASE_URL=https://dtuiqyahnzzgsyzbiwrx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_anon_key_aqui
```

> Obtenha sua chave em: **Supabase Dashboard → Settings → API**

### 4. Configure o banco de dados

Acesse o [Supabase SQL Editor](https://supabase.com/dashboard/project/dtuiqyahnzzgsyzbiwrx/sql/new) e rode:

```sql
-- Criar tabela de pedidos
create table public.pedidos (
  id           uuid primary key default gen_random_uuid(),
  status       text not null default 'novo',
  total        numeric(10,2) not null,
  canal        text not null default 'whatsapp',
  created_at   timestamptz default now()
);

-- Criar tabela de itens
create table public.pedido_itens (
  id           uuid primary key default gen_random_uuid(),
  pedido_id    uuid not null references public.pedidos(id) on delete cascade,
  produto_id   text not null,
  nome         text not null,
  preco_unit   numeric(10,2) not null,
  quantidade   int not null,
  created_at   timestamptz default now()
);

-- Habilitar RLS e permitir inserção anônima
alter table public.pedidos      enable row level security;
alter table public.pedido_itens enable row level security;

create policy "anon insert pedidos"
  on public.pedidos for insert to anon with check (true);
create policy "anon insert itens"
  on public.pedido_itens for insert to anon with check (true);
```

### 5. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/            # Navbar com vídeo de fundo e carrinho
│   ├── HeroSection/       # Hero com vídeo da cachoeira (YouTube API)
│   ├── ProdutoCard/       # Card de produto com fallback de imagem
│   └── CardapioCategories # Grade de categorias do cardápio
├── data/
│   └── products.ts        # Todos os pratos do cardápio
├── hooks/
│   └── useCart.ts         # Estado global do carrinho (Zustand + persist)
├── lib/
│   └── supabase.ts        # Cliente Supabase (singleton)
├── pages/
│   ├── index.tsx          # Home page
│   └── cardapio.tsx       # Página do cardápio com drawer do carrinho
└── styles/
    └── globals.css        # Tokens de cor mineira + Tailwind v4
```

---

## 🛒 Fluxo do Pedido

```
Cliente navega pelo cardápio
        ↓
Adiciona pratos ao carrinho (Zustand → localStorage)
        ↓
Abre o drawer do carrinho
        ↓
Clica "Finalizar no WhatsApp"
        ↓
┌─────────────────────────────────┐
│  Salva no Supabase (pedidos +   │
│  pedido_itens) — fire & forget  │
└─────────────────────────────────┘
        ↓
Abre WhatsApp com mensagem formadata
(número: (35) 99214-4176)
```

---

## 🌐 Deploy

### Vercel (recomendado)

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Framework detectado automaticamente: **Next.js**
3. Adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Clique em **Deploy**

> O Vercel detecta o `pnpm-lock.yaml` e usa pnpm automaticamente.

---

## 🎨 Paleta de Cores

| Token | Cor | Hex | Inspiração |
|---|---|---|---|
| `mineiro-gold` | 🟡 | `#D4A017` | Milho-verde do cerrado |
| `mineiro-green` | 🟢 | `#3A5F2A` | Mata Atlântica |
| `mineiro-terracotta` | 🟤 | `#8B4513` | Terra vermelha |
| `mineiro-dark` | ⬛ | `#3D1F0D` | Mogno mineiro |
| `mineiro-cream` | 🟫 | `#F5EDD8` | Papel de pão |
| `mineiro-pedra` | 🔘 | `#C4A882` | Pedra-sabão de Ouro Preto |

---

## 📱 Contato & Pedidos

**WhatsApp:** [(35) 99214-4176](https://wa.me/553592144176)

---

## 📄 Licença

Este projeto é privado e de uso exclusivo do **Mineiro Gourmet**.

---

<div align="center">

Feito com ❤️ e muito pão de queijo 🧀

*"A cozinha é o coração da nossa casa"*

</div>
