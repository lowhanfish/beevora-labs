# 🐝 Beevora Labs

![Beevora Labs Logo](/public/logo.png)

**Innovating Tomorrow's Technology**

Beevora Labs adalah perusahaan teknologi yang menyediakan solusi SaaS cutting-edge untuk transformasi digital bisnis Anda.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom components dengan Tailwind
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## ✨ Features

### 🌓 Dark Mode & Light Mode

- Toggle switch untuk mengganti tema
- Animasi transisi yang smooth
- Efek neon/glow hanya aktif di dark mode

### 📱 Responsive Design

- Mobile-first approach
- Optimized untuk semua ukuran layar
- Navbar responsive dengan hamburger menu

### 🎨 Modern UI/UX

- Desain futuristik dan profesional
- Efek hover dan transisi yang elegan
- Gradient dan glow effects

### 🧩 Sections

1. **Navbar** - Navigation dengan dark mode toggle
2. **Hero** - Headline, subheadline, dan CTA
3. **Products** - TotO-L dan Orbit-Trace
4. **Features** - Grid fitur unggulan
5. **About** - Tentang Beevora Labs & Team
6. **CTA** - Call-to-action section
7. **Footer** - Links dan social media

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- npm atau yarn

### Setup

1. **Clone repository**

   ```bash
   git clone https://github.com/username/beevora-labs.git
   cd beevora-labs
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build for production                     |
| `npm start`     | Start production server                  |
| `npm run lint`  | Run ESLint                               |

## 📁 Project Structure

```
beevora-labs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout dengan metadata
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Global styles & Tailwind
│   ├── login/             # Login page
│   ├── register/          # Register page
│   ├── terms-of-service/  # Terms page
│   ├── privacy-policy/    # Privacy page
│   └── data-deletion/     # Data deletion page
├── components/             # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Products.tsx       # Products showcase
│   ├── Features.tsx       # Features grid
│   ├── About.tsx          # About & Team section
│   ├── CTASection.tsx     # Call-to-action
│   ├── Footer.tsx         # Footer
│   └── MainContent.tsx    # Main content wrapper
├── public/                # Static assets
│   ├── images/            # Team photos & images
│   └── logo.png           # Company logo
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tailwindcss.config.*   # Tailwind CSS configuration
└── package.json           # Dependencies & scripts
```

## 🎨 Color Palette

| Color            | Hex       | Usage          |
| ---------------- | --------- | -------------- |
| Neon Green       | `#00ff9f` | Primary accent |
| Neon Green Dark  | `#00cc7f` | Hover states   |
| Dark Background  | `#0a0a0a` | Dark mode bg   |
| Light Background | `#ffffff` | Light mode bg  |

## 👥 Team

| Name          | Role             | Photo                |
| ------------- | ---------------- | -------------------- |
| Team Member 1 | Position         | `/images/photo1.png` |
| Team Member 2 | Position         | `/images/photo2.png` |
| Team Member 3 | Position         | `/images/photo3.png` |
| Team Member 4 | Position         | `/images/photo4.png` |
| Team Member 5 | Position         | `/images/photo5.png` |
| Iksan Sinatra | Backend Engineer | `/images/photo6.png` |

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Static Export

```bash
npm run build
# Output: out/ folder
```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by Beevora Labs Team
