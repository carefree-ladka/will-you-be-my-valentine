# 💝 Will You Be My Valentine? 

A heartfelt, interactive Valentine's Day proposal website built with React, TypeScript, Three.js, and Tailwind CSS.

## ✨ Features

- **3D Animated Scene** - Boy kneeling and proposing to girl with realistic features using Three.js
- **100 Apology Reasons** - Sincere apology messages displayed in a beautiful carousel
- **Heartfelt Messages** - 7 romantic message cards with smooth transitions
- **Interactive Proposal** - Dynamic "Yes" and "Sochne do" buttons with playful interactions
- **Love Letter** - Handwritten PDF letter that can be read and downloaded
- **Background Music** - Romantic music that plays throughout the experience
- **Confetti Celebration** - Explosive confetti animation when she says "Yes"
- **Success Message** - Beautiful success screen with heartfelt messages
- **Responsive Design** - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/will-you-be-my-valentine.git

# Navigate to project directory
cd will-you-be-my-valentine

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Update Messages

Edit `/src/config/index.ts` to customize:
- Apology reasons
- Romantic messages
- Button texts
- Success messages

### Change Colors

Modify the color scheme in `/src/config/index.ts`:
```typescript
colors: {
  background: "#0a0a0a",
  heartPrimary: "#ff0844",
  heartSecondary: "#ff6b9d",
  particleColor: "#ff1744",
  textGlow: "rgba(255, 8, 68, 0.8)",
}
```

### Replace Love Letter

Replace `/src/assets/letter-to-her.pdf` with your own handwritten letter.

### Change Music

Replace `/src/assets/music-for-valentine-cinematic-love-462815.mp3` with your preferred romantic song.

## 📁 Project Structure

```
src/
├── assets/          # Images, music, and PDF files
├── components/      # React components
├── config/          # Configuration and content
├── hooks/           # Custom React hooks
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── App.tsx          # Main application component
```

## 🛠️ Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Confetti** - Confetti effects

## 💖 Flow

1. **Start Screen** - Beautiful welcome screen
2. **Transition** - Smooth transition animation
3. **Apology Section** - 100 heartfelt apology messages (optional)
4. **Message Cards** - 7 romantic message cards
5. **Proposal Question** - The big question with interactive buttons
6. **Success & Letter** - Celebration with downloadable love letter

## 📝 License

This project is open source and available under the MIT License.

## 💌 Made with Love

Created with love for Shruti 💕

---

**Note:** This is a personal project meant to express love and affection. Feel free to fork and customize it for your own special someone!
