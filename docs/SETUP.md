# 🚀 Proje Kurulum Kılavuzu

Bu doküman, microfrontend mimarisine sahip Dashboard projesinin kurulumu, geliştirme, derleme ve dağıtımıyla ilgili tüm adımları içermektedir.

---

## 📦 Gereksinimler

- Node.js ≥ 16.x
- npm ≥ 8.x (veya yarn)
- Git

---

## 📁 Proje Yapısı

dashboard-microfrontends/
├── packages/
│   ├── shell/                # Container App
│   ├── user-card/            # User Card Mikro Frontend
│   └── content-bar/          # Content Bar Mikro Frontend
├── docs/
│   └── SETUP.md              # Kurulum dokümantasyonu
├── package.json              # Root package.json
└── README.md                 # Bu dosya

## 🛠️ Kurulum Adımları

### 1. Repoyu Klonlayın

```bash
git clone https://github.com/burak88/dashboard-microfrontends
cd dashboard-microfrontends

cd shell && npm install
cd ../user-card && npm install
cd ../content-bar && npm install

Terminal 1:
cd user-card
npm run dev

Terminal 2: 
cd content-bar
npm run dev

Terminal 3:
cd shell
npm run dev