# 🎭 3D Character Posing App

AI-powered 3D character posing aplikace - napiš popis pozice a AI ji vytvoří!

## 🌟 Vlastnosti

- ✨ **Text-to-Pose** - Napiš popis pozice, AI ji vytvoří
- 🎬 **3D Viewer** - Real-time 3D preview postavy
- 📚 **Pose History** - Uchovávání všech vytvořených pozic
- 📱 **Mobilní Optimalizace** - Funguje na mobilu i počítači
- 🎨 **Moderní Design** - Krásné UI s gradientem

## 🚀 Rychlý Start

### Požadavky
- Node.js 14+
- npm nebo yarn

### Instalace

```bash
# Klonuj repozitář
git clone https://github.com/sirmikey50/3d-character-posing-app.git
cd 3d-character-posing-app

# Nainstaluj závislosti
npm install

# Spusť vývojový server
npm start
```

Aplikace se otevře na `http://localhost:3000`

## 📖 Jak Používat

1. **Napiš Popis Pozice** - V textovém poli napiš, co má postava dělat
   - Příklady: "sedí se zkříženýma nohama", "ruce nahoru", "běh"

2. **Klikni na Vytvořit Poza** - Aplikace zpracuje tvůj popis

3. **Prohlížej 3D Model** - Podívej se, jak se postava pohnula

4. **Prochází Historii** - V kartě "Historie" vidíš všechny předchozí pozice

## 🛠️ Technologický Stack

- **React** - Frontend framework
- **Three.js** - 3D grafika
- **CSS3** - Styling a animace
- **JavaScript ES6+** - Logika aplikace

## 📁 Struktura Projektu

```
├── public/
│   └── index.html          # HTML šablona
├── src/
│   ├── components/
│   │   ├── CharacterViewer.jsx     # 3D viewer
│   │   ├── PoseInput.jsx           # Zadávání pozic
│   │   └── PoseGallery.jsx         # Historie pozic
│   ├── App.jsx             # Hlavní komponenta
│   ├── index.js            # Entry point
│   └── styles.css          # Globální styly
├── package.json            # Závislosti
└── README.md              # Tato dokumentace
```

## 🎯 Příští Kroky

- [ ] Připojení k AI backendu (Python + Flask/FastAPI)
- [ ] Advanced IK (Inverse Kinematics) systém
- [ ] Modelů postavy (humanoid, zvířata, roboty)
- [ ] Export pozic (FBX, JSON)
- [ ] Multiplayer mode

## 🔧 Vývoj

### Vytvoření nové komponenty

```bash
# Nová komponenta v src/components/
touch src/components/MyComponent.jsx
```

### Build pro produkci

```bash
npm run build
```

## 📞 Kontakt & Podpora

Máš dotaz nebo nový nápad?
- 📧 Email: [tvůj-email@example.com]
- 🐙 GitHub: [sirmikey50](https://github.com/sirmikey50)

## 📄 Licence

MIT License - vidíš `LICENSE` soubor pro detaily

---

**Vytvořeno s ❤️ pro 3D nadšence** 🎬✨
