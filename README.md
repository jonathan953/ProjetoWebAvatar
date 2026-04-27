# 🌍 Projeto Web Avatar — Hospedagens em Pandora

<p align="center">
  <b>Uma experiência de reservas inspirada no universo de Avatar 🌿</b>
</p>

---

## 📌 Sobre o projeto

O **Projeto Web Avatar** é uma aplicação front-end desenvolvida com Angular que simula um sistema de **reservas de hospedagens no mundo de Pandora**, inspirado no universo do filme *Avatar*.

A proposta do projeto é oferecer uma experiência imersiva onde o usuário pode explorar diferentes tipos de hospedagens fictícias, como:

- 🌳 Casas nas árvores dos Na'vi  
- 🏞️ Refúgios naturais em meio à floresta bioluminescente  
- 🌌 Ambientes integrados à natureza de Pandora  
- 🧘 Espaços de conexão espiritual com Eywa  

Além de simular a navegação e visualização dessas hospedagens, o sistema permite representar fluxos comuns de uma aplicação real, como cadastro e listagem de opções.

---

## 🎯 Objetivo

Este projeto foi criado com foco em:

- Praticar arquitetura front-end moderna com Angular  
- Simular um sistema real de reservas  
- Aplicar boas práticas de organização e componentização  
- Criar uma aplicação com contexto temático (Avatar/Pandora)  

---

## 🚀 Tecnologias utilizadas

- Angular  
- TypeScript  
- SCSS  
- RxJS  
- HTML5  

---

## ⚙️ Como executar o projeto

### 1️⃣ Instalar dependências

    npm install

### 2️⃣ Rodar a aplicação

    npm start

ou

    ng serve

### 3️⃣ Acessar no navegador

    http://localhost:4200

---

## 🧪 Testes

Para rodar os testes unitários:

    npm test

---

## 📊 Estrutura do projeto

O projeto segue uma arquitetura inspirada em **Clean Architecture**, separando responsabilidades de forma clara:


```
src/
 ├── app/
 │   ├── core/
 │   │   ├── components/
 │   │   │   ├── header/          → Componente de cabeçalho da aplicação
 │   │   │   └── footer/          → Componente de rodapé da aplicação
 │   │   └── services/
 │   │       └── travel-booking.service.ts → Serviço central de hospedagens/reservas
 │   │
 │   ├── features/
 │   │   ├── home/                → Página inicial do projeto
 │   │   ├── hospedagens/         → Página de listagem de hospedagens
 │   │   └── cadastro/            → Página de cadastro
 │   │
 │   ├── shared/
 │   │   ├── components/
 │   │   │   └── scenic-section/  → Componente visual reutilizável
 │   │   ├── data/
 │   │   │   └── hospedagens.data.ts → Dados mockados das hospedagens
 │   │   └── models/
 │   │       └── travel-booking.model.ts → Modelo/tipagem das hospedagens
 │   │
 │   ├── app.component.html
 │   ├── app.component.scss
 │   ├── app.component.spec.ts
 │   ├── app.component.ts
 │   ├── app.config.ts           → Configuração principal da aplicação
 │   └── app.routes.ts           → Rotas da aplicação
 │
 ├── public/
 │   └── images/                 → Imagens utilizadas no projeto
 │
 ├── index.html
 ├── main.ts
 └── styles.scss
```

---

## 🌿 Conceito das hospedagens

As hospedagens foram pensadas para refletir o universo de Pandora, trazendo uma experiência diferenciada:

- 🌳 **Tree Houses Na'vi** — moradias suspensas conectadas à natureza  
- 🌊 **Refúgios próximos a rios bioluminescentes**  
- 🌌 **Ambientes integrados ao ecossistema espiritual de Eywa**  
- 🌿 **Hospedagens sustentáveis e naturais**  

Os dados atualmente são simulados (mock), mas representam como seria uma API real de reservas.

---

## 🔌 Serviços

### 📌 travel-booking.service.ts

Responsável por:

- Centralizar a lógica de hospedagens  
- Fornecer dados para os componentes  
- Simular comportamento de uma API  

Pode ser facilmente adaptado para integração com backend real via `HttpClient`.

---

## 📦 Dados mockados

Arquivo:

    shared/data/hospedagens.data.ts

Contém:

- Lista de hospedagens  
- Informações como nome, localização e características  

---

## 🎨 Estilização

- SCSS por componente  
- Estilo global em `styles.scss`  
- Layout visual inspirado em natureza e imersão  

---

## 🧠 Boas práticas aplicadas

✔ Arquitetura modular  
✔ Separação de responsabilidades  
✔ Componentização  
✔ Uso de serviços para lógica de negócio  
✔ Tipagem forte com TypeScript  

---

## 📈 Possíveis melhorias futuras

- Integração com API real  
- Sistema de autenticação  
- Reserva real de hospedagens  
- Filtros e busca avançada  
- Melhorias de UX/UI com tema imersivo  

---

## 👨‍💻 Autor

Projeto desenvolvido para estudo, prática e evolução técnica em Angular, com foco em criação de aplicações modernas e bem estruturadas.

---

🌌 *“Toda energia está conectada. Assim como em Pandora, este projeto representa conexão entre tecnologia, organização e criatividade.”*