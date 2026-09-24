# Homenagem ao Irmão Pedro • Equipa Técnica do SALS

Aplicação web em React (Vite + Tailwind CSS + Lucide Icons) dedicada como homenagem ao irmão Pedro pela sua passagem na manutenção técnica do Salão de Assembleias de Luanda Sul (SALS) antes de partir para a sua nova designação.

Feito com dedicação e carinho por **Tito Capewando** e toda a equipa técnica.

---

## 🛠️ Tecnologias Utilizadas

- **React 18** com **TypeScript**
- **Vite** (Build tool rápida e leve)
- **Tailwind CSS** (Design system sóbrio, elegante e mobile-first)
- **Lucide Icons**
- **Canvas Confetti**
- **Web Audio API**

---

## 🚀 Como Executar Localmente

1. Clone o repositório ou aceda à pasta do projeto:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd Pedro
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Aceda a `http://localhost:3000`.

4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

---

## ☁️ Como Subir na Vercel

O projeto já contém o ficheiro `vercel.json` configurado para rotas de SPA e cache de ficheiros estáticos.

### Opção 1: Via GitHub (Recomendado)
1. Suba o código para o GitHub (veja o guia abaixo).
2. Aceda a [vercel.com](https://vercel.com/) e clique em **"Add New... -> Project"**.
3. Importe o repositório do GitHub.
4. O framework **Vite** será detetado automaticamente:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **"Deploy"** e em segundos o site estará online!

### Opção 2: Via Vercel CLI
```bash
npx vercel
```

---

## 🐳 Como Executar com Docker

O projeto já possui `Dockerfile`, `nginx.conf` e `.dockerignore` prontos para build em múltiplos estágios (*multi-stage build*).

1. Construir a imagem Docker:
   ```bash
   docker build -t homenagem-pedro .
   ```

2. Executar o contentor:
   ```bash
   docker run -d -p 8080:80 --name site-pedro homenagem-pedro
   ```
   Aceda no navegador a `http://localhost:8080`.

---

## 📦 Como Subir no GitHub

Execute os seguintes comandos no terminal:

```bash
# 1. Inicializar o repositório Git
git init

# 2. Adicionar os ficheiros
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: site de homenagem ao irmao Pedro - SALS"

# 4. Renomear o branch principal para main
git branch -M main

# 5. Associar ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/<SEU_UTILIZADOR>/<NOME_DO_REPOSITORIO>.git

# 6. Enviar para o GitHub
git push -u origin main
```

---

Feito de ❤️ por Tito Capewando
