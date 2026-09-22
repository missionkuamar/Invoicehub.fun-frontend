// src/themes/themeConfig.js

export const THEMES = {
  // ================================================================
  // ORIGINAL THEMES (existing — unchanged)
  // ================================================================
  ocean: {
    id: 'ocean', name: 'Ocean Blue', icon: '🌊', fonts: 'font-sans',
    colors: {
      primary: '#0ea5e9', secondary: '#0284c7', accent: '#06b6d4',
      background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-blue-500 to-cyan-500',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-500/30', hover: 'hover:bg-blue-50',
    },
  },
  sunset: {
    id: 'sunset', name: 'Sunset', icon: '🌅', fonts: 'font-sans',
    colors: {
      primary: '#f97316', secondary: '#ea580c', accent: '#f59e0b',
      background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-500 to-rose-500',
      button: 'bg-gradient-to-r from-orange-500 to-rose-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-50',
    },
  },
  forest: {
    id: 'forest', name: 'Forest', icon: '🌿', fonts: 'font-sans',
    colors: {
      primary: '#22c55e', secondary: '#16a34a', accent: '#4ade80',
      background: '#f0fdf4', text: '#14532d',
      gradient: 'from-green-500 to-emerald-500',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-green-200',
      border: 'border-green-200', glow: 'shadow-green-500/30', hover: 'hover:bg-green-50',
    },
  },
  royal: {
    id: 'royal', name: 'Royal', icon: '👑', fonts: 'font-sans',
    colors: {
      primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa',
      background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-purple-500 to-indigo-500',
      button: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-500/30', hover: 'hover:bg-purple-50',
    },
  },
  rose: {
    id: 'rose', name: 'Rose', icon: '🌹', fonts: 'font-sans',
    colors: {
      primary: '#f43f5e', secondary: '#e11d48', accent: '#fb7185',
      background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-500 to-pink-500',
      button: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/30', hover: 'hover:bg-rose-50',
    },
  },
  dark: {
    id: 'dark', name: 'Dark', icon: '🌙', fonts: 'font-sans',
    colors: {
      primary: '#fbbf24', secondary: '#f59e0b', accent: '#fcd34d',
      background: '#111827', text: '#f3f4f6',
      gradient: 'from-amber-400 to-yellow-500',
      button: 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:shadow-lg hover:shadow-amber-500/50 text-gray-900',
      card: 'bg-gray-800/90 backdrop-blur-lg border border-gray-700',
      border: 'border-gray-700', glow: 'shadow-amber-500/30', hover: 'hover:bg-gray-700',
    },
  },
  cyber: {
    id: 'cyber', name: 'Cyberpunk', icon: '🤖', fonts: 'font-mono',
    colors: {
      primary: '#06b6d4', secondary: '#8b5cf6', accent: '#ec4899',
      background: '#0f172a', text: '#f8fafc',
      gradient: 'from-cyan-400 to-fuchsia-500',
      button: 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:shadow-lg hover:shadow-cyan-500/50',
      card: 'bg-slate-800/90 backdrop-blur-lg border border-cyan-500/30',
      border: 'border-cyan-500/30', glow: 'shadow-cyan-500/30', hover: 'hover:bg-slate-700',
    },
  },
  neon: {
    id: 'neon', name: 'Neon', icon: '💫', fonts: 'font-sans',
    colors: {
      primary: '#22d3ee', secondary: '#f472b6', accent: '#a78bfa',
      background: '#030712', text: '#f3f4f6',
      gradient: 'from-cyan-400 via-pink-400 to-purple-400',
      button: 'bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 hover:shadow-lg hover:shadow-cyan-500/50',
      card: 'bg-gray-900/90 backdrop-blur-lg border border-cyan-500/20',
      border: 'border-cyan-500/20', glow: 'shadow-cyan-500/30', hover: 'hover:bg-gray-800',
    },
  },
  vintage: {
    id: 'vintage', name: 'Vintage', icon: '📜', fonts: 'font-serif',
    colors: {
      primary: '#b45309', secondary: '#92400e', accent: '#d97706',
      background: '#fef3c7', text: '#451a03',
      gradient: 'from-amber-700 to-yellow-700',
      button: 'bg-gradient-to-r from-amber-700 to-yellow-700 hover:shadow-lg hover:shadow-amber-700/50',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-700/30', hover: 'hover:bg-amber-100',
    },
  },
  emerald: {
    id: 'emerald', name: 'Emerald', icon: '💎', fonts: 'font-sans',
    colors: {
      primary: '#059669', secondary: '#047857', accent: '#34d399',
      background: '#ecfdf5', text: '#064e3b',
      gradient: 'from-emerald-500 to-teal-500',
      button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-500/30', hover: 'hover:bg-emerald-50',
    },
  },
  indigo: {
    id: 'indigo', name: 'Indigo', icon: '🔮', fonts: 'font-sans',
    colors: {
      primary: '#4f46e5', secondary: '#4338ca', accent: '#6366f1',
      background: '#eef2ff', text: '#1e1b4b',
      gradient: 'from-indigo-500 to-blue-500',
      button: 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:shadow-lg hover:shadow-indigo-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-indigo-200',
      border: 'border-indigo-200', glow: 'shadow-indigo-500/30', hover: 'hover:bg-indigo-50',
    },
  },

  // ================================================================
  // 🆕 50 NEW THEMES
  // ================================================================

  // 🌌 1. GALAXY — Deep space purples and cosmic blues
  galaxy: {
    id: 'galaxy', name: 'Galaxy', icon: '🌌', fonts: 'font-sans',
    colors: {
      primary: '#a855f7', secondary: '#7e22ce', accent: '#c084fc',
      background: '#0c0118', text: '#e9d5ff',
      gradient: 'from-purple-600 via-indigo-600 to-blue-600',
      button: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-purple-500/30',
      border: 'border-purple-500/30', glow: 'shadow-purple-500/40', hover: 'hover:bg-purple-900/50',
    },
  },

  // ☀️ 2. MIDNIGHT SUN — Dark with golden sun accent
  midnightSun: {
    id: 'midnightSun', name: 'Midnight Sun', icon: '☀️', fonts: 'font-sans',
    colors: {
      primary: '#fbbf24', secondary: '#f59e0b', accent: '#fde68a',
      background: '#0c0a09', text: '#fef3c7',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      button: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-stone-900/70 backdrop-blur-lg border border-amber-500/30',
      border: 'border-amber-500/30', glow: 'shadow-amber-500/40', hover: 'hover:bg-stone-800',
    },
  },

  // 🌸 3. SAKURA — Soft pink Japanese cherry blossom
  sakura: {
    id: 'sakura', name: 'Sakura', icon: '🌸', fonts: 'font-serif',
    colors: {
      primary: '#ec4899', secondary: '#db2777', accent: '#f9a8d4',
      background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-400 via-rose-400 to-fuchsia-400',
      button: 'bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 hover:shadow-lg hover:shadow-pink-400/50',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-400/30', hover: 'hover:bg-pink-100',
    },
  },

  // 🌊 4. AQUA — Fresh water blues
  aqua: {
    id: 'aqua', name: 'Aqua', icon: '💧', fonts: 'font-sans',
    colors: {
      primary: '#14b8a6', secondary: '#0d9488', accent: '#5eead4',
      background: '#f0fdfa', text: '#134e4a',
      gradient: 'from-teal-400 to-cyan-500',
      button: 'bg-gradient-to-r from-teal-400 to-cyan-500 hover:shadow-lg hover:shadow-teal-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-400/30', hover: 'hover:bg-teal-50',
    },
  },

  // 🔥 5. LAVA — Volcanic reds and oranges
  lava: {
    id: 'lava', name: 'Lava', icon: '🔥', fonts: 'font-sans',
    colors: {
      primary: '#ef4444', secondary: '#dc2626', accent: '#f97316',
      background: '#1c0a0a', text: '#fecaca',
      gradient: 'from-red-600 via-orange-500 to-yellow-500',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-red-950/60 backdrop-blur-lg border border-red-500/30',
      border: 'border-red-500/30', glow: 'shadow-red-500/40', hover: 'hover:bg-red-900/50',
    },
  },

  // ❄️ 6. ARCTIC — Ice blue and white
  arctic: {
    id: 'arctic', name: 'Arctic', icon: '❄️', fonts: 'font-sans',
    colors: {
      primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc',
      background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-sky-300 via-cyan-400 to-blue-500',
      button: 'bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 hover:shadow-lg hover:shadow-sky-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-sky-200',
      border: 'border-sky-200', glow: 'shadow-sky-400/30', hover: 'hover:bg-sky-50',
    },
  },

  // 🌺 7. TROPICAL — Vibrant tropical vibes
  tropical: {
    id: 'tropical', name: 'Tropical', icon: '🌺', fonts: 'font-sans',
    colors: {
      primary: '#10b981', secondary: '#059669', accent: '#f472b6',
      background: '#f0fdf4', text: '#064e3b',
      gradient: 'from-emerald-400 via-cyan-400 to-pink-400',
      button: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 hover:shadow-lg hover:shadow-emerald-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-400/30', hover: 'hover:bg-emerald-50',
    },
  },

  // 🎨 8. PASTEL DREAM — Soft pastel colors
  pastelDream: {
    id: 'pastelDream', name: 'Pastel Dream', icon: '🎨', fonts: 'font-sans',
    colors: {
      primary: '#a78bfa', secondary: '#c4b5fd', accent: '#fbcfe8',
      background: '#faf5ff', text: '#4c1d95',
      gradient: 'from-purple-200 via-pink-200 to-blue-200',
      button: 'bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 hover:shadow-lg hover:shadow-purple-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-100',
      border: 'border-purple-100', glow: 'shadow-purple-300/30', hover: 'hover:bg-purple-50',
    },
  },

  // 🌙 9. MOONLIGHT — Soft moonlit night
  moonlight: {
    id: 'moonlight', name: 'Moonlight', icon: '🌙', fonts: 'font-serif',
    colors: {
      primary: '#818cf8', secondary: '#6366f1', accent: '#c7d2fe',
      background: '#0f172a', text: '#e0e7ff',
      gradient: 'from-indigo-400 via-blue-500 to-purple-500',
      button: 'bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 hover:shadow-lg hover:shadow-indigo-400/50',
      card: 'bg-indigo-950/50 backdrop-blur-lg border border-indigo-500/30',
      border: 'border-indigo-500/30', glow: 'shadow-indigo-400/40', hover: 'hover:bg-indigo-900/40',
    },
  },

  // 🌺 10. HIBISCUS — Bold pink and red
  hibiscus: {
    id: 'hibiscus', name: 'Hibiscus', icon: '🌺', fonts: 'font-sans',
    colors: {
      primary: '#e11d48', secondary: '#be123c', accent: '#fb7185',
      background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      button: 'bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/30', hover: 'hover:bg-rose-50',
    },
  },

  // 🍋 11. LEMON — Fresh citrus yellow
  lemon: {
    id: 'lemon', name: 'Lemon', icon: '🍋', fonts: 'font-sans',
    colors: {
      primary: '#eab308', secondary: '#ca8a04', accent: '#facc15',
      background: '#fefce8', text: '#713f12',
      gradient: 'from-yellow-400 to-lime-500',
      button: 'bg-gradient-to-r from-yellow-400 to-lime-500 hover:shadow-lg hover:shadow-yellow-400/50 text-gray-900',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-yellow-200',
      border: 'border-yellow-200', glow: 'shadow-yellow-400/30', hover: 'hover:bg-yellow-100',
    },
  },

  // 🍇 12. GRAPE — Rich purple tones
  grape: {
    id: 'grape', name: 'Grape', icon: '🍇', fonts: 'font-sans',
    colors: {
      primary: '#7c3aed', secondary: '#6d28d9', accent: '#a78bfa',
      background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-violet-600 to-purple-700',
      button: 'bg-gradient-to-r from-violet-600 to-purple-700 hover:shadow-lg hover:shadow-violet-600/50',
      card: 'bg-white/80 backdrop-blur-lg border border-violet-200',
      border: 'border-violet-200', glow: 'shadow-violet-500/30', hover: 'hover:bg-violet-50',
    },
  },

  // 🍊 13. ORANGE CRUSH — Bold orange energy
  orangeCrush: {
    id: 'orangeCrush', name: 'Orange Crush', icon: '🍊', fonts: 'font-sans',
    colors: {
      primary: '#f97316', secondary: '#ea580c', accent: '#fdba74',
      background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-400 to-red-500',
      button: 'bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-lg hover:shadow-orange-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-50',
    },
  },

  // 🐳 14. DEEP SEA — Dark ocean depths
  deepSea: {
    id: 'deepSea', name: 'Deep Sea', icon: '🐳', fonts: 'font-sans',
    colors: {
      primary: '#0891b2', secondary: '#0e7490', accent: '#22d3ee',
      background: '#082f49', text: '#cffafe',
      gradient: 'from-cyan-600 to-blue-700',
      button: 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-lg hover:shadow-cyan-600/50',
      card: 'bg-cyan-950/60 backdrop-blur-lg border border-cyan-500/30',
      border: 'border-cyan-500/30', glow: 'shadow-cyan-500/40', hover: 'hover:bg-cyan-900/50',
    },
  },

  // 🏜️ 15. DESERT — Warm sand tones
  desert: {
    id: 'desert', name: 'Desert', icon: '🏜️', fonts: 'font-serif',
    colors: {
      primary: '#d97706', secondary: '#b45309', accent: '#fbbf24',
      background: '#fef3c7', text: '#78350f',
      gradient: 'from-amber-500 to-orange-600',
      button: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-amber-500/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/30', hover: 'hover:bg-amber-100',
    },
  },

  // 🌃 16. TOKYO NIGHT — Neon city vibes
  tokyoNight: {
    id: 'tokyoNight', name: 'Tokyo Night', icon: '🌃', fonts: 'font-mono',
    colors: {
      primary: '#ff6b9d', secondary: '#c44569', accent: '#4ecdc4',
      background: '#1a1a2e', text: '#ffffff',
      gradient: 'from-pink-500 via-purple-500 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-purple-950/50 backdrop-blur-lg border border-pink-500/30',
      border: 'border-pink-500/30', glow: 'shadow-pink-500/40', hover: 'hover:bg-purple-900/50',
    },
  },

  // 🌸 17. BLOSSOM — Spring flower palette
  blossom: {
    id: 'blossom', name: 'Blossom', icon: '🌷', fonts: 'font-serif',
    colors: {
      primary: '#f472b6', secondary: '#ec4899', accent: '#fbcfe8',
      background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-300 via-rose-300 to-purple-300',
      button: 'bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-800',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-300/30', hover: 'hover:bg-pink-100',
    },
  },

  // 🧊 18. ICE — Cool blue ice
  ice: {
    id: 'ice', name: 'Ice', icon: '🧊', fonts: 'font-sans',
    colors: {
      primary: '#67e8f9', secondary: '#06b6d4', accent: '#a5f3fc',
      background: '#ecfeff', text: '#164e63',
      gradient: 'from-cyan-200 via-sky-300 to-blue-400',
      button: 'bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-300/30', hover: 'hover:bg-cyan-50',
    },
  },

  // 🍃 19. MINT — Fresh minty green
  mint: {
    id: 'mint', name: 'Mint', icon: '🍃', fonts: 'font-sans',
    colors: {
      primary: '#34d399', secondary: '#10b981', accent: '#6ee7b7',
      background: '#ecfdf5', text: '#065f46',
      gradient: 'from-emerald-300 to-teal-400',
      button: 'bg-gradient-to-r from-emerald-300 to-teal-400 hover:shadow-lg hover:shadow-emerald-300/50 text-gray-800',
      card: 'bg-emerald-50/90 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-300/30', hover: 'hover:bg-emerald-100',
    },
  },

  // 🪸 20. CORAL — Coral reef colors
  coral: {
    id: 'coral', name: 'Coral', icon: '🪸', fonts: 'font-sans',
    colors: {
      primary: '#fb7185', secondary: '#f43f5e', accent: '#fda4af',
      background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-400 via-pink-400 to-orange-400',
      button: 'bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 hover:shadow-lg hover:shadow-rose-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-400/30', hover: 'hover:bg-rose-50',
    },
  },

  // 🧬 21. MATRIX — Green code rain
  matrix: {
    id: 'matrix', name: 'Matrix', icon: '🧬', fonts: 'font-mono',
    colors: {
      primary: '#22c55e', secondary: '#16a34a', accent: '#4ade80',
      background: '#000000', text: '#22c55e',
      gradient: 'from-green-500 to-emerald-600',
      button: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/60',
      card: 'bg-black/90 backdrop-blur-lg border border-green-500/40',
      border: 'border-green-500/40', glow: 'shadow-green-500/60', hover: 'hover:bg-green-950/50',
    },
  },

  // 👑 22. GOLD — Luxurious gold
  gold: {
    id: 'gold', name: 'Gold', icon: '👑', fonts: 'font-serif',
    colors: {
      primary: '#d4af37', secondary: '#b8860b', accent: '#ffd700',
      background: '#1a1a1a', text: '#fef3c7',
      gradient: 'from-yellow-500 via-amber-400 to-yellow-600',
      button: 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/60 text-gray-900',
      card: 'bg-neutral-900/80 backdrop-blur-lg border border-yellow-500/40',
      border: 'border-yellow-500/40', glow: 'shadow-yellow-500/50', hover: 'hover:bg-neutral-800',
    },
  },

  // 💜 23. AMETHYST — Crystal purple
  amethyst: {
    id: 'amethyst', name: 'Amethyst', icon: '💜', fonts: 'font-sans',
    colors: {
      primary: '#9333ea', secondary: '#7e22ce', accent: '#c084fc',
      background: '#1e1b4b', text: '#e9d5ff',
      gradient: 'from-purple-500 to-violet-700',
      button: 'bg-gradient-to-r from-purple-500 to-violet-700 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-purple-500/40',
      border: 'border-purple-500/40', glow: 'shadow-purple-500/50', hover: 'hover:bg-purple-900/50',
    },
  },

  // 🍫 24. CHOCOLATE — Rich brown tones
  chocolate: {
    id: 'chocolate', name: 'Chocolate', icon: '🍫', fonts: 'font-serif',
    colors: {
      primary: '#a16207', secondary: '#854d0e', accent: '#ca8a04',
      background: '#1c1917', text: '#fef3c7',
      gradient: 'from-amber-700 via-yellow-800 to-amber-900',
      button: 'bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 hover:shadow-lg hover:shadow-amber-700/50',
      card: 'bg-stone-900/70 backdrop-blur-lg border border-amber-700/40',
      border: 'border-amber-700/40', glow: 'shadow-amber-700/50', hover: 'hover:bg-stone-800',
    },
  },

  // 🌊 25. CARIBBEAN — Tropical ocean
  caribbean: {
    id: 'caribbean', name: 'Caribbean', icon: '🏝️', fonts: 'font-sans',
    colors: {
      primary: '#22d3ee', secondary: '#06b6d4', accent: '#67e8f9',
      background: '#ecfeff', text: '#164e63',
      gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
      button: 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-50',
    },
  },

  // 🔮 26. MYSTIC — Mystical purple magic
  mystic: {
    id: 'mystic', name: 'Mystic', icon: '🔮', fonts: 'font-serif',
    colors: {
      primary: '#c084fc', secondary: '#a855f7', accent: '#e9d5ff',
      background: '#1e1b4b', text: '#f3e8ff',
      gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
      button: 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-fuchsia-500/50',
      card: 'bg-purple-950/50 backdrop-blur-lg border border-fuchsia-500/30',
      border: 'border-fuchsia-500/30', glow: 'shadow-fuchsia-500/40', hover: 'hover:bg-purple-900/50',
    },
  },

  // 🍁 27. AUTUMN — Fall foliage
  autumn: {
    id: 'autumn', name: 'Autumn', icon: '🍁', fonts: 'font-serif',
    colors: {
      primary: '#ea580c', secondary: '#c2410c', accent: '#fbbf24',
      background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-600 via-amber-500 to-red-500',
      button: 'bg-gradient-to-r from-orange-600 via-amber-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-100',
    },
  },

  // 🌲 28. PINE — Deep forest green
  pine: {
    id: 'pine', name: 'Pine', icon: '🌲', fonts: 'font-sans',
    colors: {
      primary: '#16a34a', secondary: '#15803d', accent: '#4ade80',
      background: '#052e16', text: '#dcfce7',
      gradient: 'from-green-600 to-emerald-800',
      button: 'bg-gradient-to-r from-green-600 to-emerald-800 hover:shadow-lg hover:shadow-green-600/50',
      card: 'bg-green-950/60 backdrop-blur-lg border border-green-500/30',
      border: 'border-green-500/30', glow: 'shadow-green-500/40', hover: 'hover:bg-green-900/50',
    },
  },

  // ☕ 29. LATTE — Coffee shop vibes
  latte: {
    id: 'latte', name: 'Latte', icon: '☕', fonts: 'font-serif',
    colors: {
      primary: '#92400e', secondary: '#78350f', accent: '#d97706',
      background: '#fffbeb', text: '#451a03',
      gradient: 'from-amber-600 to-orange-700',
      button: 'bg-gradient-to-r from-amber-600 to-orange-700 hover:shadow-lg hover:shadow-amber-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-600/30', hover: 'hover:bg-amber-100',
    },
  },

  // 🌈 30. PRISM — Rainbow spectrum
  prism: {
    id: 'prism', name: 'Prism', icon: '🌈', fonts: 'font-sans',
    colors: {
      primary: '#8b5cf6', secondary: '#ec4899', accent: '#06b6d4',
      background: '#faf5ff', text: '#1e1b4b',
      gradient: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-500/30', hover: 'hover:bg-purple-50',
    },
  },

  // 🌸 31. LAVENDER — Calm lavender fields
  lavender: {
    id: 'lavender', name: 'Lavender', icon: '💐', fonts: 'font-serif',
    colors: {
      primary: '#a78bfa', secondary: '#8b5cf6', accent: '#ddd6fe',
      background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-violet-300 to-purple-400',
      button: 'bg-gradient-to-r from-violet-300 to-purple-400 hover:shadow-lg hover:shadow-violet-300/50 text-gray-800',
      card: 'bg-violet-50/90 backdrop-blur-lg border border-violet-200',
      border: 'border-violet-200', glow: 'shadow-violet-300/30', hover: 'hover:bg-violet-100',
    },
  },

  // 🌋 32. VOLCANO — Erupting lava
  volcano: {
    id: 'volcano', name: 'Volcano', icon: '🌋', fonts: 'font-sans',
    colors: {
      primary: '#dc2626', secondary: '#b91c1c', accent: '#f97316',
      background: '#1c0a0a', text: '#fecaca',
      gradient: 'from-red-700 via-orange-600 to-yellow-500',
      button: 'bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 hover:shadow-lg hover:shadow-red-600/60',
      card: 'bg-red-950/70 backdrop-blur-lg border border-red-500/40',
      border: 'border-red-500/40', glow: 'shadow-red-600/50', hover: 'hover:bg-red-900/50',
    },
  },

  // ⚡ 33. ELECTRIC — Electric blue energy
  electric: {
    id: 'electric', name: 'Electric', icon: '⚡', fonts: 'font-mono',
    colors: {
      primary: '#3b82f6', secondary: '#2563eb', accent: '#60a5fa',
      background: '#0c1424', text: '#dbeafe',
      gradient: 'from-blue-400 via-cyan-400 to-sky-500',
      button: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 hover:shadow-lg hover:shadow-blue-400/60',
      card: 'bg-blue-950/60 backdrop-blur-lg border border-blue-500/40',
      border: 'border-blue-500/40', glow: 'shadow-blue-500/50', hover: 'hover:bg-blue-900/50',
    },
  },

  // 🦄 34. UNICORN — Magical pastels
  unicorn: {
    id: 'unicorn', name: 'Unicorn', icon: '🦄', fonts: 'font-sans',
    colors: {
      primary: '#e879f9', secondary: '#c026d3', accent: '#a5f3fc',
      background: '#fdf4ff', text: '#701a75',
      gradient: 'from-pink-300 via-purple-300 to-cyan-300',
      button: 'bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-800',
      card: 'bg-fuchsia-50/90 backdrop-blur-lg border border-fuchsia-200',
      border: 'border-fuchsia-200', glow: 'shadow-fuchsia-300/30', hover: 'hover:bg-fuchsia-100',
    },
  },

  // 🌅 35. DAWN — Sunrise colors
  dawn: {
    id: 'dawn', name: 'Dawn', icon: '🌅', fonts: 'font-serif',
    colors: {
      primary: '#fb923c', secondary: '#f97316', accent: '#fbbf24',
      background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-amber-300 via-orange-400 to-rose-400',
      button: 'bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 hover:shadow-lg hover:shadow-orange-400/50',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-400/30', hover: 'hover:bg-orange-100',
    },
  },

  // 🌆 36. DUSK — Evening twilight
  dusk: {
    id: 'dusk', name: 'Dusk', icon: '🌆', fonts: 'font-sans',
    colors: {
      primary: '#f472b6', secondary: '#db2777', accent: '#a78bfa',
      background: '#1e1b4b', text: '#fce7f3',
      gradient: 'from-pink-500 via-purple-500 to-indigo-700',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-700 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-pink-500/30',
      border: 'border-pink-500/30', glow: 'shadow-pink-500/40', hover: 'hover:bg-purple-900/50',
    },
  },

  // 🏔️ 37. ALPINE — Mountain fresh
  alpine: {
    id: 'alpine', name: 'Alpine', icon: '🏔️', fonts: 'font-sans',
    colors: {
      primary: '#0891b2', secondary: '#155e75', accent: '#67e8f9',
      background: '#ecfeff', text: '#164e63',
      gradient: 'from-sky-500 via-cyan-500 to-teal-500',
      button: 'bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-sky-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-sky-200',
      border: 'border-sky-200', glow: 'shadow-sky-500/30', hover: 'hover:bg-sky-50',
    },
  },

  // 🍒 38. CHERRY — Bold cherry red
  cherry: {
    id: 'cherry', name: 'Cherry', icon: '🍒', fonts: 'font-sans',
    colors: {
      primary: '#dc2626', secondary: '#b91c1c', accent: '#f87171',
      background: '#fef2f2', text: '#7f1d1d',
      gradient: 'from-red-500 to-rose-600',
      button: 'bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-red-200',
      border: 'border-red-200', glow: 'shadow-red-500/30', hover: 'hover:bg-red-50',
    },
  },

  // 🐚 39. PEARL — Elegant pearl white
  pearl: {
    id: 'pearl', name: 'Pearl', icon: '🦪', fonts: 'font-serif',
    colors: {
      primary: '#a5b4fc', secondary: '#818cf8', accent: '#e0e7ff',
      background: '#f8fafc', text: '#1e293b',
      gradient: 'from-slate-200 via-indigo-200 to-purple-200',
      button: 'bg-gradient-to-r from-slate-300 via-indigo-300 to-purple-300 hover:shadow-lg hover:shadow-indigo-300/50 text-gray-800',
      card: 'bg-white/95 backdrop-blur-lg border border-slate-200',
      border: 'border-slate-200', glow: 'shadow-indigo-300/30', hover: 'hover:bg-slate-50',
    },
  },

  // 🌿 40. BAMBOO — Zen green
  bamboo: {
    id: 'bamboo', name: 'Bamboo', icon: '🎋', fonts: 'font-serif',
    colors: {
      primary: '#65a30d', secondary: '#4d7c0f', accent: '#a3e635',
      background: '#f7fee7', text: '#365314',
      gradient: 'from-lime-500 to-green-600',
      button: 'bg-gradient-to-r from-lime-500 to-green-600 hover:shadow-lg hover:shadow-lime-500/50',
      card: 'bg-lime-50/90 backdrop-blur-lg border border-lime-200',
      border: 'border-lime-200', glow: 'shadow-lime-500/30', hover: 'hover:bg-lime-100',
    },
  },

  // 🎭 41. THEATER — Dramatic red and gold
  theater: {
    id: 'theater', name: 'Theater', icon: '🎭', fonts: 'font-serif',
    colors: {
      primary: '#b91c1c', secondary: '#991b1b', accent: '#fbbf24',
      background: '#1a0a0a', text: '#fef3c7',
      gradient: 'from-red-800 via-amber-600 to-yellow-500',
      button: 'bg-gradient-to-r from-red-800 via-amber-600 to-yellow-500 hover:shadow-lg hover:shadow-red-700/50',
      card: 'bg-red-950/70 backdrop-blur-lg border border-amber-500/40',
      border: 'border-amber-500/40', glow: 'shadow-amber-500/40', hover: 'hover:bg-red-900/50',
    },
  },

  // 🛸 42. UFO — Alien green glow
  ufo: {
    id: 'ufo', name: 'UFO', icon: '🛸', fonts: 'font-mono',
    colors: {
      primary: '#84cc16', secondary: '#65a30d', accent: '#bef264',
      background: '#0a0a0a', text: '#ecfccb',
      gradient: 'from-lime-400 via-green-400 to-emerald-500',
      button: 'bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 hover:shadow-lg hover:shadow-lime-400/60',
      card: 'bg-lime-950/50 backdrop-blur-lg border border-lime-400/40',
      border: 'border-lime-400/40', glow: 'shadow-lime-400/50', hover: 'hover:bg-lime-900/50',
    },
  },

  // 🦋 43. BUTTERFLY — Delicate wings
  butterfly: {
    id: 'butterfly', name: 'Butterfly', icon: '🦋', fonts: 'font-sans',
    colors: {
      primary: '#06b6d4', secondary: '#0891b2', accent: '#c084fc',
      background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-cyan-400 via-blue-400 to-purple-400',
      button: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-50',
    },
  },

  // 🎸 44. RETRO — 80s retro vibes
  retro: {
    id: 'retro', name: 'Retro', icon: '🎸', fonts: 'font-mono',
    colors: {
      primary: '#ff6b9d', secondary: '#f43f5e', accent: '#fde047',
      background: '#1a0033', text: '#fef3c7',
      gradient: 'from-pink-500 via-fuchsia-500 to-yellow-400',
      button: 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 hover:shadow-lg hover:shadow-pink-500/60',
      card: 'bg-fuchsia-950/60 backdrop-blur-lg border border-pink-500/40',
      border: 'border-pink-500/40', glow: 'shadow-pink-500/50', hover: 'hover:bg-fuchsia-900/50',
    },
  },

  // 🍯 45. HONEY — Sweet golden honey
  honey: {
    id: 'honey', name: 'Honey', icon: '🍯', fonts: 'font-serif',
    colors: {
      primary: '#f59e0b', secondary: '#d97706', accent: '#fcd34d',
      background: '#fffbeb', text: '#78350f',
      gradient: 'from-yellow-400 via-amber-500 to-orange-500',
      button: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 hover:shadow-lg hover:shadow-amber-500/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-200',
      border: 'border-amber-200', glow: 'shadow-amber-500/30', hover: 'hover:bg-amber-100',
    },
  },

  // 🗿 46. STONE — Earthy gray tones
  stone: {
    id: 'stone', name: 'Stone', icon: '🗿', fonts: 'font-sans',
    colors: {
      primary: '#78716c', secondary: '#57534e', accent: '#a8a29e',
      background: '#fafaf9', text: '#1c1917',
      gradient: 'from-stone-400 to-stone-600',
      button: 'bg-gradient-to-r from-stone-500 to-stone-700 hover:shadow-lg hover:shadow-stone-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-stone-200',
      border: 'border-stone-200', glow: 'shadow-stone-400/30', hover: 'hover:bg-stone-100',
    },
  },

  // 🎪 47. CARNIVAL — Vibrant carnival colors
  carnival: {
    id: 'carnival', name: 'Carnival', icon: '🎪', fonts: 'font-sans',
    colors: {
      primary: '#ec4899', secondary: '#f59e0b', accent: '#06b6d4',
      background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-pink-500 via-yellow-400 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-500/30', hover: 'hover:bg-pink-50',
    },
  },

  // 🦚 48. PEACOCK — Peacock feather colors
  peacock: {
    id: 'peacock', name: 'Peacock', icon: '🦚', fonts: 'font-sans',
    colors: {
      primary: '#0e7490', secondary: '#0891b2', accent: '#22d3ee',
      background: '#ecfeff', text: '#164e63',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      button: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-teal-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-500/30', hover: 'hover:bg-teal-50',
    },
  },

  // 🧿 49. AZURE — Pure azure blue
  azure: {
    id: 'azure', name: 'Azure', icon: '🧿', fonts: 'font-sans',
    colors: {
      primary: '#2563eb', secondary: '#1d4ed8', accent: '#60a5fa',
      background: '#eff6ff', text: '#1e3a8a',
      gradient: 'from-blue-500 to-indigo-600',
      button: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-500/30', hover: 'hover:bg-blue-50',
    },
  },

  // 🐉 50. DRAGON — Fiery dragon theme
  dragon: {
    id: 'dragon', name: 'Dragon', icon: '🐉', fonts: 'font-sans',
    colors: {
      primary: '#ef4444', secondary: '#b91c1c', accent: '#fbbf24',
      background: '#1a0a0a', text: '#fef2f2',
      gradient: 'from-red-600 via-orange-500 to-amber-400',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 hover:shadow-lg hover:shadow-red-600/60',
      card: 'bg-red-950/70 backdrop-blur-lg border border-orange-500/40',
      border: 'border-orange-500/40', glow: 'shadow-orange-500/50', hover: 'hover:bg-red-900/50',
    },
  },
  ocean: {
    id: 'ocean', name: 'Ocean Blue', icon: '🌊', fonts: 'font-sans',
    colors: {
      primary: '#0ea5e9', secondary: '#0284c7', accent: '#06b6d4',
      background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-blue-500 to-cyan-500',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-500/30', hover: 'hover:bg-blue-50',
    },
  },
  sunset: {
    id: 'sunset', name: 'Sunset', icon: '🌅', fonts: 'font-sans',
    colors: {
      primary: '#f97316', secondary: '#ea580c', accent: '#f59e0b',
      background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-500 to-rose-500',
      button: 'bg-gradient-to-r from-orange-500 to-rose-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-50',
    },
  },
  forest: {
    id: 'forest', name: 'Forest', icon: '🌿', fonts: 'font-sans',
    colors: {
      primary: '#22c55e', secondary: '#16a34a', accent: '#4ade80',
      background: '#f0fdf4', text: '#14532d',
      gradient: 'from-green-500 to-emerald-500',
      button: 'bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-green-200',
      border: 'border-green-200', glow: 'shadow-green-500/30', hover: 'hover:bg-green-50',
    },
  },
  royal: {
    id: 'royal', name: 'Royal', icon: '👑', fonts: 'font-sans',
    colors: {
      primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa',
      background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-purple-500 to-indigo-500',
      button: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-500/30', hover: 'hover:bg-purple-50',
    },
  },
  rose: {
    id: 'rose', name: 'Rose', icon: '🌹', fonts: 'font-sans',
    colors: {
      primary: '#f43f5e', secondary: '#e11d48', accent: '#fb7185',
      background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-500 to-pink-500',
      button: 'bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/30', hover: 'hover:bg-rose-50',
    },
  },
  dark: {
    id: 'dark', name: 'Dark', icon: '🌙', fonts: 'font-sans',
    colors: {
      primary: '#fbbf24', secondary: '#f59e0b', accent: '#fcd34d',
      background: '#111827', text: '#f3f4f6',
      gradient: 'from-amber-400 to-yellow-500',
      button: 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:shadow-lg hover:shadow-amber-500/50 text-gray-900',
      card: 'bg-gray-800/90 backdrop-blur-lg border border-gray-700',
      border: 'border-gray-700', glow: 'shadow-amber-500/30', hover: 'hover:bg-gray-700',
    },
  },
  cyber: {
    id: 'cyber', name: 'Cyberpunk', icon: '🤖', fonts: 'font-mono',
    colors: {
      primary: '#06b6d4', secondary: '#8b5cf6', accent: '#ec4899',
      background: '#0f172a', text: '#f8fafc',
      gradient: 'from-cyan-400 to-fuchsia-500',
      button: 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:shadow-lg hover:shadow-cyan-500/50',
      card: 'bg-slate-800/90 backdrop-blur-lg border border-cyan-500/30',
      border: 'border-cyan-500/30', glow: 'shadow-cyan-500/30', hover: 'hover:bg-slate-700',
    },
  },
  neon: {
    id: 'neon', name: 'Neon', icon: '💫', fonts: 'font-sans',
    colors: {
      primary: '#22d3ee', secondary: '#f472b6', accent: '#a78bfa',
      background: '#030712', text: '#f3f4f6',
      gradient: 'from-cyan-400 via-pink-400 to-purple-400',
      button: 'bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 hover:shadow-lg hover:shadow-cyan-500/50',
      card: 'bg-gray-900/90 backdrop-blur-lg border border-cyan-500/20',
      border: 'border-cyan-500/20', glow: 'shadow-cyan-500/30', hover: 'hover:bg-gray-800',
    },
  },
  vintage: {
    id: 'vintage', name: 'Vintage', icon: '📜', fonts: 'font-serif',
    colors: {
      primary: '#b45309', secondary: '#92400e', accent: '#d97706',
      background: '#fef3c7', text: '#451a03',
      gradient: 'from-amber-700 to-yellow-700',
      button: 'bg-gradient-to-r from-amber-700 to-yellow-700 hover:shadow-lg hover:shadow-amber-700/50',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-700/30', hover: 'hover:bg-amber-100',
    },
  },
  emerald: {
    id: 'emerald', name: 'Emerald', icon: '💎', fonts: 'font-sans',
    colors: {
      primary: '#059669', secondary: '#047857', accent: '#34d399',
      background: '#ecfdf5', text: '#064e3b',
      gradient: 'from-emerald-500 to-teal-500',
      button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-500/30', hover: 'hover:bg-emerald-50',
    },
  },
  indigo: {
    id: 'indigo', name: 'Indigo', icon: '🔮', fonts: 'font-sans',
    colors: {
      primary: '#4f46e5', secondary: '#4338ca', accent: '#6366f1',
      background: '#eef2ff', text: '#1e1b4b',
      gradient: 'from-indigo-500 to-blue-500',
      button: 'bg-gradient-to-r from-indigo-500 to-blue-500 hover:shadow-lg hover:shadow-indigo-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-indigo-200',
      border: 'border-indigo-200', glow: 'shadow-indigo-500/30', hover: 'hover:bg-indigo-50',
    },
  },

  // ================================================================
  // 🆕 100 NEW THEMES — CATEGORIZED
  // ================================================================

  // 🌌 DARK / MYSTERIOUS (1-15)
  galaxy: { id: 'galaxy', name: 'Galaxy', icon: '🌌', fonts: 'font-display',
    colors: { primary: '#a855f7', secondary: '#7e22ce', accent: '#c084fc', background: '#0c0118', text: '#e9d5ff',
      gradient: 'from-purple-600 via-indigo-600 to-blue-600',
      button: 'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-purple-500/30',
      border: 'border-purple-500/30', glow: 'shadow-purple-500/40', hover: 'hover:bg-purple-900/50' } },

  midnightSun: { id: 'midnightSun', name: 'Midnight Sun', icon: '🌒', fonts: 'font-serif',
    colors: { primary: '#fbbf24', secondary: '#f59e0b', accent: '#fde68a', background: '#0c0a09', text: '#fef3c7',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      button: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-stone-900/70 backdrop-blur-lg border border-amber-500/30',
      border: 'border-amber-500/30', glow: 'shadow-amber-500/40', hover: 'hover:bg-stone-800' } },

  deepSea: { id: 'deepSea', name: 'Deep Sea', icon: '🐳', fonts: 'font-sans',
    colors: { primary: '#0891b2', secondary: '#0e7490', accent: '#22d3ee', background: '#082f49', text: '#cffafe',
      gradient: 'from-cyan-600 to-blue-700',
      button: 'bg-gradient-to-r from-cyan-600 to-blue-700 hover:shadow-lg hover:shadow-cyan-600/50',
      card: 'bg-cyan-950/60 backdrop-blur-lg border border-cyan-500/30',
      border: 'border-cyan-500/30', glow: 'shadow-cyan-500/40', hover: 'hover:bg-cyan-900/50' } },

  tokyoNight: { id: 'tokyoNight', name: 'Tokyo Night', icon: '🌃', fonts: 'font-mono',
    colors: { primary: '#ff6b9d', secondary: '#c44569', accent: '#4ecdc4', background: '#1a1a2e', text: '#ffffff',
      gradient: 'from-pink-500 via-purple-500 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-purple-950/50 backdrop-blur-lg border border-pink-500/30',
      border: 'border-pink-500/30', glow: 'shadow-pink-500/40', hover: 'hover:bg-purple-900/50' } },

  matrix: { id: 'matrix', name: 'Matrix', icon: '🧬', fonts: 'font-mono',
    colors: { primary: '#22c55e', secondary: '#16a34a', accent: '#4ade80', background: '#000000', text: '#22c55e',
      gradient: 'from-green-500 to-emerald-600',
      button: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/60',
      card: 'bg-black/90 backdrop-blur-lg border border-green-500/40',
      border: 'border-green-500/40', glow: 'shadow-green-500/60', hover: 'hover:bg-green-950/50' } },

  amethyst: { id: 'amethyst', name: 'Amethyst', icon: '💜', fonts: 'font-display',
    colors: { primary: '#9333ea', secondary: '#7e22ce', accent: '#c084fc', background: '#1e1b4b', text: '#e9d5ff',
      gradient: 'from-purple-500 to-violet-700',
      button: 'bg-gradient-to-r from-purple-500 to-violet-700 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-purple-500/40',
      border: 'border-purple-500/40', glow: 'shadow-purple-500/50', hover: 'hover:bg-purple-900/50' } },

  mystic: { id: 'mystic', name: 'Mystic', icon: '🔮', fonts: 'font-serif',
    colors: { primary: '#c084fc', secondary: '#a855f7', accent: '#e9d5ff', background: '#1e1b4b', text: '#f3e8ff',
      gradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
      button: 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-fuchsia-500/50',
      card: 'bg-purple-950/50 backdrop-blur-lg border border-fuchsia-500/30',
      border: 'border-fuchsia-500/30', glow: 'shadow-fuchsia-500/40', hover: 'hover:bg-purple-900/50' } },

  electric: { id: 'electric', name: 'Electric', icon: '⚡', fonts: 'font-mono',
    colors: { primary: '#3b82f6', secondary: '#2563eb', accent: '#60a5fa', background: '#0c1424', text: '#dbeafe',
      gradient: 'from-blue-400 via-cyan-400 to-sky-500',
      button: 'bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 hover:shadow-lg hover:shadow-blue-400/60',
      card: 'bg-blue-950/60 backdrop-blur-lg border border-blue-500/40',
      border: 'border-blue-500/40', glow: 'shadow-blue-500/50', hover: 'hover:bg-blue-900/50' } },

  volcano: { id: 'volcano', name: 'Volcano', icon: '🌋', fonts: 'font-display',
    colors: { primary: '#dc2626', secondary: '#b91c1c', accent: '#f97316', background: '#1c0a0a', text: '#fecaca',
      gradient: 'from-red-700 via-orange-600 to-yellow-500',
      button: 'bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 hover:shadow-lg hover:shadow-red-600/60',
      card: 'bg-red-950/70 backdrop-blur-lg border border-red-500/40',
      border: 'border-red-500/40', glow: 'shadow-red-600/50', hover: 'hover:bg-red-900/50' } },

  dragon: { id: 'dragon', name: 'Dragon', icon: '🐉', fonts: 'font-display',
    colors: { primary: '#ef4444', secondary: '#b91c1c', accent: '#fbbf24', background: '#1a0a0a', text: '#fef2f2',
      gradient: 'from-red-600 via-orange-500 to-amber-400',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 hover:shadow-lg hover:shadow-red-600/60',
      card: 'bg-red-950/70 backdrop-blur-lg border border-orange-500/40',
      border: 'border-orange-500/40', glow: 'shadow-orange-500/50', hover: 'hover:bg-red-900/50' } },

  ufo: { id: 'ufo', name: 'UFO', icon: '🛸', fonts: 'font-mono',
    colors: { primary: '#84cc16', secondary: '#65a30d', accent: '#bef264', background: '#0a0a0a', text: '#ecfccb',
      gradient: 'from-lime-400 via-green-400 to-emerald-500',
      button: 'bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 hover:shadow-lg hover:shadow-lime-400/60',
      card: 'bg-lime-950/50 backdrop-blur-lg border border-lime-400/40',
      border: 'border-lime-400/40', glow: 'shadow-lime-400/50', hover: 'hover:bg-lime-900/50' } },

  retro: { id: 'retro', name: 'Retro', icon: '🎸', fonts: 'font-mono',
    colors: { primary: '#ff6b9d', secondary: '#f43f5e', accent: '#fde047', background: '#1a0033', text: '#fef3c7',
      gradient: 'from-pink-500 via-fuchsia-500 to-yellow-400',
      button: 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 hover:shadow-lg hover:shadow-pink-500/60',
      card: 'bg-fuchsia-950/60 backdrop-blur-lg border border-pink-500/40',
      border: 'border-pink-500/40', glow: 'shadow-pink-500/50', hover: 'hover:bg-fuchsia-900/50' } },

  midnight: { id: 'midnight', name: 'Midnight', icon: '🌌', fonts: 'font-display',
    colors: { primary: '#6366f1', secondary: '#4f46e5', accent: '#818cf8', background: '#020617', text: '#e0e7ff',
      gradient: 'from-indigo-600 to-blue-800',
      button: 'bg-gradient-to-r from-indigo-600 to-blue-800 hover:shadow-lg hover:shadow-indigo-600/50',
      card: 'bg-slate-900/80 backdrop-blur-lg border border-indigo-500/30',
      border: 'border-indigo-500/30', glow: 'shadow-indigo-500/40', hover: 'hover:bg-slate-800' } },

  obsidian: { id: 'obsidian', name: 'Obsidian', icon: '🖤', fonts: 'font-display',
    colors: { primary: '#a1a1aa', secondary: '#71717a', accent: '#d4d4d8', background: '#09090b', text: '#fafafa',
      gradient: 'from-zinc-700 via-zinc-600 to-zinc-800',
      button: 'bg-gradient-to-r from-zinc-700 to-zinc-900 hover:shadow-lg hover:shadow-zinc-700/50',
      card: 'bg-zinc-950/90 backdrop-blur-lg border border-zinc-800',
      border: 'border-zinc-800', glow: 'shadow-zinc-500/30', hover: 'hover:bg-zinc-900' } },

  phantom: { id: 'phantom', name: 'Phantom', icon: '👻', fonts: 'font-mono',
    colors: { primary: '#8b5cf6', secondary: '#6d28d9', accent: '#a78bfa', background: '#0a0014', text: '#e9d5ff',
      gradient: 'from-violet-600 to-purple-900',
      button: 'bg-gradient-to-r from-violet-600 to-purple-900 hover:shadow-lg hover:shadow-violet-600/60',
      card: 'bg-violet-950/60 backdrop-blur-lg border border-violet-500/40',
      border: 'border-violet-500/40', glow: 'shadow-violet-500/50', hover: 'hover:bg-violet-900/50' } },

  // 🌸 LIGHT / FRESH (16-30)
  sakura: { id: 'sakura', name: 'Sakura', icon: '🌸', fonts: 'font-serif',
    colors: { primary: '#ec4899', secondary: '#db2777', accent: '#f9a8d4', background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-400 via-rose-400 to-fuchsia-400',
      button: 'bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 hover:shadow-lg hover:shadow-pink-400/50',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-400/30', hover: 'hover:bg-pink-100' } },

  aqua: { id: 'aqua', name: 'Aqua', icon: '💧', fonts: 'font-sans',
    colors: { primary: '#14b8a6', secondary: '#0d9488', accent: '#5eead4', background: '#f0fdfa', text: '#134e4a',
      gradient: 'from-teal-400 to-cyan-500',
      button: 'bg-gradient-to-r from-teal-400 to-cyan-500 hover:shadow-lg hover:shadow-teal-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-400/30', hover: 'hover:bg-teal-50' } },

  arctic: { id: 'arctic', name: 'Arctic', icon: '❄️', fonts: 'font-sans',
    colors: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-sky-300 via-cyan-400 to-blue-500',
      button: 'bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-500 hover:shadow-lg hover:shadow-sky-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-sky-200',
      border: 'border-sky-200', glow: 'shadow-sky-400/30', hover: 'hover:bg-sky-50' } },

  tropical: { id: 'tropical', name: 'Tropical', icon: '🌴', fonts: 'font-sans',
    colors: { primary: '#10b981', secondary: '#059669', accent: '#f472b6', background: '#f0fdf4', text: '#064e3b',
      gradient: 'from-emerald-400 via-cyan-400 to-pink-400',
      button: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-400 hover:shadow-lg hover:shadow-emerald-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-400/30', hover: 'hover:bg-emerald-50' } },

  pastelDream: { id: 'pastelDream', name: 'Pastel Dream', icon: '🎨', fonts: 'font-round',
    colors: { primary: '#a78bfa', secondary: '#c4b5fd', accent: '#fbcfe8', background: '#faf5ff', text: '#4c1d95',
      gradient: 'from-purple-200 via-pink-200 to-blue-200',
      button: 'bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 hover:shadow-lg hover:shadow-purple-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-100',
      border: 'border-purple-100', glow: 'shadow-purple-300/30', hover: 'hover:bg-purple-50' } },

  lemon: { id: 'lemon', name: 'Lemon', icon: '🍋', fonts: 'font-sans',
    colors: { primary: '#eab308', secondary: '#ca8a04', accent: '#facc15', background: '#fefce8', text: '#713f12',
      gradient: 'from-yellow-400 to-lime-500',
      button: 'bg-gradient-to-r from-yellow-400 to-lime-500 hover:shadow-lg hover:shadow-yellow-400/50 text-gray-900',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-yellow-200',
      border: 'border-yellow-200', glow: 'shadow-yellow-400/30', hover: 'hover:bg-yellow-100' } },

  ice: { id: 'ice', name: 'Ice', icon: '🧊', fonts: 'font-sans',
    colors: { primary: '#67e8f9', secondary: '#06b6d4', accent: '#a5f3fc', background: '#ecfeff', text: '#164e63',
      gradient: 'from-cyan-200 via-sky-300 to-blue-400',
      button: 'bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 hover:shadow-lg hover:shadow-cyan-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-300/30', hover: 'hover:bg-cyan-50' } },

  mint: { id: 'mint', name: 'Mint', icon: '🍃', fonts: 'font-sans',
    colors: { primary: '#34d399', secondary: '#10b981', accent: '#6ee7b7', background: '#ecfdf5', text: '#065f46',
      gradient: 'from-emerald-300 to-teal-400',
      button: 'bg-gradient-to-r from-emerald-300 to-teal-400 hover:shadow-lg hover:shadow-emerald-300/50 text-gray-800',
      card: 'bg-emerald-50/90 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-300/30', hover: 'hover:bg-emerald-100' } },

  caribbean: { id: 'caribbean', name: 'Caribbean', icon: '🏝️', fonts: 'font-sans',
    colors: { primary: '#22d3ee', secondary: '#06b6d4', accent: '#67e8f9', background: '#ecfeff', text: '#164e63',
      gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
      button: 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-50' } },

  alpine: { id: 'alpine', name: 'Alpine', icon: '🏔️', fonts: 'font-sans',
    colors: { primary: '#0891b2', secondary: '#155e75', accent: '#67e8f9', background: '#ecfeff', text: '#164e63',
      gradient: 'from-sky-500 via-cyan-500 to-teal-500',
      button: 'bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 hover:shadow-lg hover:shadow-sky-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-sky-200',
      border: 'border-sky-200', glow: 'shadow-sky-500/30', hover: 'hover:bg-sky-50' } },

  butterfly: { id: 'butterfly', name: 'Butterfly', icon: '🦋', fonts: 'font-display',
    colors: { primary: '#06b6d4', secondary: '#0891b2', accent: '#c084fc', background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-cyan-400 via-blue-400 to-purple-400',
      button: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-50' } },

  azure: { id: 'azure', name: 'Azure', icon: '🧿', fonts: 'font-sans',
    colors: { primary: '#2563eb', secondary: '#1d4ed8', accent: '#60a5fa', background: '#eff6ff', text: '#1e3a8a',
      gradient: 'from-blue-500 to-indigo-600',
      button: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-500/30', hover: 'hover:bg-blue-50' } },

  peacock: { id: 'peacock', name: 'Peacock', icon: '🦚', fonts: 'font-display',
    colors: { primary: '#0e7490', secondary: '#0891b2', accent: '#22d3ee', background: '#ecfeff', text: '#164e63',
      gradient: 'from-teal-500 via-cyan-500 to-blue-500',
      button: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-teal-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-500/30', hover: 'hover:bg-teal-50' } },

  cottonCandy: { id: 'cottonCandy', name: 'Cotton Candy', icon: '🍬', fonts: 'font-round',
    colors: { primary: '#f9a8d4', secondary: '#c4b5fd', accent: '#a5f3fc', background: '#fdf4ff', text: '#701a75',
      gradient: 'from-pink-300 via-purple-300 to-cyan-300',
      button: 'bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-pink-100',
      border: 'border-pink-100', glow: 'shadow-pink-300/30', hover: 'hover:bg-pink-50' } },

  // 🎨 BOLD / VIBRANT (31-45)
  lava: { id: 'lava', name: 'Lava', icon: '🔥', fonts: 'font-display',
    colors: { primary: '#ef4444', secondary: '#dc2626', accent: '#f97316', background: '#1c0a0a', text: '#fecaca',
      gradient: 'from-red-600 via-orange-500 to-yellow-500',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-red-950/60 backdrop-blur-lg border border-red-500/30',
      border: 'border-red-500/30', glow: 'shadow-red-500/40', hover: 'hover:bg-red-900/50' } },

  hibiscus: { id: 'hibiscus', name: 'Hibiscus', icon: '🌺', fonts: 'font-sans',
    colors: { primary: '#e11d48', secondary: '#be123c', accent: '#fb7185', background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      button: 'bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/30', hover: 'hover:bg-rose-50' } },

  orangeCrush: { id: 'orangeCrush', name: 'Orange Crush', icon: '🍊', fonts: 'font-sans',
    colors: { primary: '#f97316', secondary: '#ea580c', accent: '#fdba74', background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-400 to-red-500',
      button: 'bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-lg hover:shadow-orange-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-50' } },

  coral: { id: 'coral', name: 'Coral', icon: '🪸', fonts: 'font-sans',
    colors: { primary: '#fb7185', secondary: '#f43f5e', accent: '#fda4af', background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-400 via-pink-400 to-orange-400',
      button: 'bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 hover:shadow-lg hover:shadow-rose-400/50',
      card: 'bg-white/80 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-400/30', hover: 'hover:bg-rose-50' } },

  cherry: { id: 'cherry', name: 'Cherry', icon: '🍒', fonts: 'font-sans',
    colors: { primary: '#dc2626', secondary: '#b91c1c', accent: '#f87171', background: '#fef2f2', text: '#7f1d1d',
      gradient: 'from-red-500 to-rose-600',
      button: 'bg-gradient-to-r from-red-500 to-rose-600 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-red-200',
      border: 'border-red-200', glow: 'shadow-red-500/30', hover: 'hover:bg-red-50' } },

  prism: { id: 'prism', name: 'Prism', icon: '🌈', fonts: 'font-display',
    colors: { primary: '#8b5cf6', secondary: '#ec4899', accent: '#06b6d4', background: '#faf5ff', text: '#1e1b4b',
      gradient: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
      button: 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:shadow-lg hover:shadow-purple-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-500/30', hover: 'hover:bg-purple-50' } },

  unicorn: { id: 'unicorn', name: 'Unicorn', icon: '🦄', fonts: 'font-round',
    colors: { primary: '#e879f9', secondary: '#c026d3', accent: '#a5f3fc', background: '#fdf4ff', text: '#701a75',
      gradient: 'from-pink-300 via-purple-300 to-cyan-300',
      button: 'bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-800',
      card: 'bg-fuchsia-50/90 backdrop-blur-lg border border-fuchsia-200',
      border: 'border-fuchsia-200', glow: 'shadow-fuchsia-300/30', hover: 'hover:bg-fuchsia-100' } },

  carnival: { id: 'carnival', name: 'Carnival', icon: '🎪', fonts: 'font-display',
    colors: { primary: '#ec4899', secondary: '#f59e0b', accent: '#06b6d4', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-pink-500 via-yellow-400 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-white/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-500/30', hover: 'hover:bg-pink-50' } },

  blossom: { id: 'blossom', name: 'Blossom', icon: '🌷', fonts: 'font-serif',
    colors: { primary: '#f472b6', secondary: '#ec4899', accent: '#fbcfe8', background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-300 via-rose-300 to-purple-300',
      button: 'bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-800',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-300/30', hover: 'hover:bg-pink-100' } },

  grape: { id: 'grape', name: 'Grape', icon: '🍇', fonts: 'font-sans',
    colors: { primary: '#7c3aed', secondary: '#6d28d9', accent: '#a78bfa', background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-violet-600 to-purple-700',
      button: 'bg-gradient-to-r from-violet-600 to-purple-700 hover:shadow-lg hover:shadow-violet-600/50',
      card: 'bg-white/80 backdrop-blur-lg border border-violet-200',
      border: 'border-violet-200', glow: 'shadow-violet-500/30', hover: 'hover:bg-violet-50' } },

  lavender: { id: 'lavender', name: 'Lavender', icon: '💐', fonts: 'font-serif',
    colors: { primary: '#a78bfa', secondary: '#8b5cf6', accent: '#ddd6fe', background: '#f5f3ff', text: '#4c1d95',
      gradient: 'from-violet-300 to-purple-400',
      button: 'bg-gradient-to-r from-violet-300 to-purple-400 hover:shadow-lg hover:shadow-violet-300/50 text-gray-800',
      card: 'bg-violet-50/90 backdrop-blur-lg border border-violet-200',
      border: 'border-violet-200', glow: 'shadow-violet-300/30', hover: 'hover:bg-violet-100' } },

  sunsetVibes: { id: 'sunsetVibes', name: 'Sunset Vibes', icon: '🌇', fonts: 'font-display',
    colors: { primary: '#f97316', secondary: '#f43f5e', accent: '#fbbf24', background: '#fff1f2', text: '#7c2d12',
      gradient: 'from-yellow-400 via-orange-500 to-rose-500',
      button: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-rose-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-100' } },

  // 🎩 ELEGANT / LUXURY (46-60)
  gold: { id: 'gold', name: 'Gold', icon: '👑', fonts: 'font-serif',
    colors: { primary: '#d4af37', secondary: '#b8860b', accent: '#ffd700', background: '#1a1a1a', text: '#fef3c7',
      gradient: 'from-yellow-500 via-amber-400 to-yellow-600',
      button: 'bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-500/60 text-gray-900',
      card: 'bg-neutral-900/80 backdrop-blur-lg border border-yellow-500/40',
      border: 'border-yellow-500/40', glow: 'shadow-yellow-500/50', hover: 'hover:bg-neutral-800' } },

  chocolate: { id: 'chocolate', name: 'Chocolate', icon: '🍫', fonts: 'font-serif',
    colors: { primary: '#a16207', secondary: '#854d0e', accent: '#ca8a04', background: '#1c1917', text: '#fef3c7',
      gradient: 'from-amber-700 via-yellow-800 to-amber-900',
      button: 'bg-gradient-to-r from-amber-700 via-yellow-800 to-amber-900 hover:shadow-lg hover:shadow-amber-700/50',
      card: 'bg-stone-900/70 backdrop-blur-lg border border-amber-700/40',
      border: 'border-amber-700/40', glow: 'shadow-amber-700/50', hover: 'hover:bg-stone-800' } },

  theater: { id: 'theater', name: 'Theater', icon: '🎭', fonts: 'font-serif',
    colors: { primary: '#b91c1c', secondary: '#991b1b', accent: '#fbbf24', background: '#1a0a0a', text: '#fef3c7',
      gradient: 'from-red-800 via-amber-600 to-yellow-500',
      button: 'bg-gradient-to-r from-red-800 via-amber-600 to-yellow-500 hover:shadow-lg hover:shadow-red-700/50',
      card: 'bg-red-950/70 backdrop-blur-lg border border-amber-500/40',
      border: 'border-amber-500/40', glow: 'shadow-amber-500/40', hover: 'hover:bg-red-900/50' } },

  pearl: { id: 'pearl', name: 'Pearl', icon: '🦪', fonts: 'font-serif',
    colors: { primary: '#a5b4fc', secondary: '#818cf8', accent: '#e0e7ff', background: '#f8fafc', text: '#1e293b',
      gradient: 'from-slate-200 via-indigo-200 to-purple-200',
      button: 'bg-gradient-to-r from-slate-300 via-indigo-300 to-purple-300 hover:shadow-lg hover:shadow-indigo-300/50 text-gray-800',
      card: 'bg-white/95 backdrop-blur-lg border border-slate-200',
      border: 'border-slate-200', glow: 'shadow-indigo-300/30', hover: 'hover:bg-slate-50' } },

  latte: { id: 'latte', name: 'Latte', icon: '☕', fonts: 'font-serif',
    colors: { primary: '#92400e', secondary: '#78350f', accent: '#d97706', background: '#fffbeb', text: '#451a03',
      gradient: 'from-amber-600 to-orange-700',
      button: 'bg-gradient-to-r from-amber-600 to-orange-700 hover:shadow-lg hover:shadow-amber-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-600/30', hover: 'hover:bg-amber-100' } },

  honey: { id: 'honey', name: 'Honey', icon: '🍯', fonts: 'font-serif',
    colors: { primary: '#f59e0b', secondary: '#d97706', accent: '#fcd34d', background: '#fffbeb', text: '#78350f',
      gradient: 'from-yellow-400 via-amber-500 to-orange-500',
      button: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 hover:shadow-lg hover:shadow-amber-500/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-200',
      border: 'border-amber-200', glow: 'shadow-amber-500/30', hover: 'hover:bg-amber-100' } },

  royalty: { id: 'royalty', name: 'Royalty', icon: '👸', fonts: 'font-serif',
    colors: { primary: '#6d28d9', secondary: '#5b21b6', accent: '#fbbf24', background: '#1e1b4b', text: '#ede9fe',
      gradient: 'from-purple-800 via-amber-500 to-yellow-400',
      button: 'bg-gradient-to-r from-purple-800 via-amber-500 to-yellow-400 hover:shadow-lg hover:shadow-purple-700/50',
      card: 'bg-purple-950/70 backdrop-blur-lg border border-amber-500/40',
      border: 'border-amber-500/40', glow: 'shadow-amber-500/40', hover: 'hover:bg-purple-900/50' } },

  mahogany: { id: 'mahogany', name: 'Mahogany', icon: '🪵', fonts: 'font-serif',
    colors: { primary: '#991b1b', secondary: '#7f1d1d', accent: '#dc2626', background: '#1c0a0a', text: '#fee2e2',
      gradient: 'from-red-900 to-amber-800',
      button: 'bg-gradient-to-r from-red-900 to-amber-800 hover:shadow-lg hover:shadow-red-900/50',
      card: 'bg-red-950/80 backdrop-blur-lg border border-amber-800/40',
      border: 'border-amber-800/40', glow: 'shadow-amber-800/40', hover: 'hover:bg-red-900/60' } },

  champagne: { id: 'champagne', name: 'Champagne', icon: '🥂', fonts: 'font-serif',
    colors: { primary: '#ca8a04', secondary: '#a16207', accent: '#fde047', background: '#fefce8', text: '#422006',
      gradient: 'from-amber-200 via-yellow-300 to-amber-400',
      button: 'bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:shadow-lg hover:shadow-amber-300/50 text-gray-900',
      card: 'bg-yellow-50/95 backdrop-blur-lg border border-amber-200',
      border: 'border-amber-200', glow: 'shadow-amber-300/30', hover: 'hover:bg-yellow-100' } },

  espresso: { id: 'espresso', name: 'Espresso', icon: '☕', fonts: 'font-serif',
    colors: { primary: '#78350f', secondary: '#451a03', accent: '#b45309', background: '#0c0a09', text: '#fef3c7',
      gradient: 'from-stone-700 to-amber-900',
      button: 'bg-gradient-to-r from-stone-700 to-amber-900 hover:shadow-lg hover:shadow-stone-700/50',
      card: 'bg-stone-900/80 backdrop-blur-lg border border-amber-800/40',
      border: 'border-amber-800/40', glow: 'shadow-amber-800/40', hover: 'hover:bg-stone-800' } },

  crimson: { id: 'crimson', name: 'Crimson', icon: '🩸', fonts: 'font-display',
    colors: { primary: '#dc2626', secondary: '#991b1b', accent: '#f87171', background: '#0c0a09', text: '#fecaca',
      gradient: 'from-red-700 via-rose-600 to-pink-600',
      button: 'bg-gradient-to-r from-red-700 via-rose-600 to-pink-600 hover:shadow-lg hover:shadow-red-700/60',
      card: 'bg-red-950/70 backdrop-blur-lg border border-red-500/40',
      border: 'border-red-500/40', glow: 'shadow-red-500/50', hover: 'hover:bg-red-900/50' } },

  titanium: { id: 'titanium', name: 'Titanium', icon: '⚙️', fonts: 'font-mono',
    colors: { primary: '#64748b', secondary: '#475569', accent: '#94a3b8', background: '#0f172a', text: '#e2e8f0',
      gradient: 'from-slate-500 via-slate-600 to-slate-800',
      button: 'bg-gradient-to-r from-slate-500 to-slate-800 hover:shadow-lg hover:shadow-slate-600/50',
      card: 'bg-slate-900/80 backdrop-blur-lg border border-slate-600/40',
      border: 'border-slate-600/40', glow: 'shadow-slate-500/40', hover: 'hover:bg-slate-800' } },

  opal: { id: 'opal', name: 'Opal', icon: '💠', fonts: 'font-display',
    colors: { primary: '#a78bfa', secondary: '#f0abfc', accent: '#7dd3fc', background: '#fdf4ff', text: '#4c1d95',
      gradient: 'from-purple-300 via-pink-300 to-cyan-300',
      button: 'bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 hover:shadow-lg hover:shadow-purple-300/50 text-gray-800',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-300/30', hover: 'hover:bg-purple-50' } },

  // 🌿 NATURE (61-75)
  desert: { id: 'desert', name: 'Desert', icon: '🏜️', fonts: 'font-serif',
    colors: { primary: '#d97706', secondary: '#b45309', accent: '#fbbf24', background: '#fef3c7', text: '#78350f',
      gradient: 'from-amber-500 to-orange-600',
      button: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-amber-500/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/30', hover: 'hover:bg-amber-100' } },

  autumn: { id: 'autumn', name: 'Autumn', icon: '🍁', fonts: 'font-serif',
    colors: { primary: '#ea580c', secondary: '#c2410c', accent: '#fbbf24', background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-600 via-amber-500 to-red-500',
      button: 'bg-gradient-to-r from-orange-600 via-amber-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-500/30', hover: 'hover:bg-orange-100' } },

  pine: { id: 'pine', name: 'Pine', icon: '🌲', fonts: 'font-sans',
    colors: { primary: '#16a34a', secondary: '#15803d', accent: '#4ade80', background: '#052e16', text: '#dcfce7',
      gradient: 'from-green-600 to-emerald-800',
      button: 'bg-gradient-to-r from-green-600 to-emerald-800 hover:shadow-lg hover:shadow-green-600/50',
      card: 'bg-green-950/60 backdrop-blur-lg border border-green-500/30',
      border: 'border-green-500/30', glow: 'shadow-green-500/40', hover: 'hover:bg-green-900/50' } },

  bamboo: { id: 'bamboo', name: 'Bamboo', icon: '🎋', fonts: 'font-serif',
    colors: { primary: '#65a30d', secondary: '#4d7c0f', accent: '#a3e635', background: '#f7fee7', text: '#365314',
      gradient: 'from-lime-500 to-green-600',
      button: 'bg-gradient-to-r from-lime-500 to-green-600 hover:shadow-lg hover:shadow-lime-500/50',
      card: 'bg-lime-50/90 backdrop-blur-lg border border-lime-200',
      border: 'border-lime-200', glow: 'shadow-lime-500/30', hover: 'hover:bg-lime-100' } },

  stone: { id: 'stone', name: 'Stone', icon: '🗿', fonts: 'font-sans',
    colors: { primary: '#78716c', secondary: '#57534e', accent: '#a8a29e', background: '#fafaf9', text: '#1c1917',
      gradient: 'from-stone-400 to-stone-600',
      button: 'bg-gradient-to-r from-stone-500 to-stone-700 hover:shadow-lg hover:shadow-stone-500/50',
      card: 'bg-white/80 backdrop-blur-lg border border-stone-200',
      border: 'border-stone-200', glow: 'shadow-stone-400/30', hover: 'hover:bg-stone-100' } },

  cactus: { id: 'cactus', name: 'Cactus', icon: '🌵', fonts: 'font-sans',
    colors: { primary: '#15803d', secondary: '#166534', accent: '#84cc16', background: '#fefce8', text: '#365314',
      gradient: 'from-green-700 to-lime-600',
      button: 'bg-gradient-to-r from-green-700 to-lime-600 hover:shadow-lg hover:shadow-green-700/50',
      card: 'bg-lime-50/90 backdrop-blur-lg border border-lime-300',
      border: 'border-lime-300', glow: 'shadow-lime-600/30', hover: 'hover:bg-lime-100' } },

  maple: { id: 'maple', name: 'Maple', icon: '🍁', fonts: 'font-serif',
    colors: { primary: '#b91c1c', secondary: '#991b1b', accent: '#f97316', background: '#fef2f2', text: '#7f1d1d',
      gradient: 'from-red-600 via-orange-500 to-amber-500',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:shadow-lg hover:shadow-red-600/50',
      card: 'bg-red-50/90 backdrop-blur-lg border border-red-200',
      border: 'border-red-200', glow: 'shadow-red-500/30', hover: 'hover:bg-red-100' } },

  moss: { id: 'moss', name: 'Moss', icon: '🌿', fonts: 'font-sans',
    colors: { primary: '#4d7c0f', secondary: '#3f6212', accent: '#84cc16', background: '#f7fee7', text: '#1a2e05',
      gradient: 'from-lime-700 to-green-800',
      button: 'bg-gradient-to-r from-lime-700 to-green-800 hover:shadow-lg hover:shadow-lime-700/50',
      card: 'bg-lime-100/70 backdrop-blur-lg border border-lime-300',
      border: 'border-lime-300', glow: 'shadow-lime-600/30', hover: 'hover:bg-lime-200' } },

  sage: { id: 'sage', name: 'Sage', icon: '🍃', fonts: 'font-serif',
    colors: { primary: '#84a98c', secondary: '#52796f', accent: '#cad2c5', background: '#f8f9fa', text: '#2f3e46',
      gradient: 'from-emerald-300 to-teal-400',
      button: 'bg-gradient-to-r from-emerald-300 to-teal-400 hover:shadow-lg hover:shadow-emerald-300/50 text-gray-800',
      card: 'bg-emerald-50/90 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-300/30', hover: 'hover:bg-emerald-100' } },

  rainforest: { id: 'rainforest', name: 'Rainforest', icon: '🌧️', fonts: 'font-sans',
    colors: { primary: '#059669', secondary: '#047857', accent: '#10b981', background: '#022c22', text: '#d1fae5',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      button: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:shadow-lg hover:shadow-emerald-500/50',
      card: 'bg-emerald-950/60 backdrop-blur-lg border border-emerald-500/30',
      border: 'border-emerald-500/30', glow: 'shadow-emerald-500/40', hover: 'hover:bg-emerald-900/50' } },

  meadow: { id: 'meadow', name: 'Meadow', icon: '🌾', fonts: 'font-sans',
    colors: { primary: '#84cc16', secondary: '#65a30d', accent: '#bef264', background: '#f7fee7', text: '#3f6212',
      gradient: 'from-lime-400 via-green-400 to-emerald-400',
      button: 'bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 hover:shadow-lg hover:shadow-lime-400/50',
      card: 'bg-lime-50/90 backdrop-blur-lg border border-lime-200',
      border: 'border-lime-200', glow: 'shadow-lime-400/30', hover: 'hover:bg-lime-100' } },

  canyon: { id: 'canyon', name: 'Canyon', icon: '🏜️', fonts: 'font-serif',
    colors: { primary: '#c2410c', secondary: '#9a3412', accent: '#fb923c', background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-700 via-red-600 to-rose-500',
      button: 'bg-gradient-to-r from-orange-700 via-red-600 to-rose-500 hover:shadow-lg hover:shadow-orange-700/50',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-600/30', hover: 'hover:bg-orange-100' } },

  tundra: { id: 'tundra', name: 'Tundra', icon: '🏔️', fonts: 'font-sans',
    colors: { primary: '#64748b', secondary: '#475569', accent: '#cbd5e1', background: '#f1f5f9', text: '#0f172a',
      gradient: 'from-slate-300 to-slate-500',
      button: 'bg-gradient-to-r from-slate-400 to-slate-600 hover:shadow-lg hover:shadow-slate-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-slate-200',
      border: 'border-slate-200', glow: 'shadow-slate-300/30', hover: 'hover:bg-slate-100' } },

  // 🎭 PLAYFUL / THEMED (76-90)
  carnival2: { id: 'carnival2', name: 'Fairground', icon: '🎡', fonts: 'font-display',
    colors: { primary: '#ec4899', secondary: '#f97316', accent: '#fbbf24', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-pink-500 via-orange-500 to-yellow-400',
      button: 'bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 hover:shadow-lg hover:shadow-pink-500/50',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-500/30', hover: 'hover:bg-pink-50' } },

  halloween: { id: 'halloween', name: 'Halloween', icon: '🎃', fonts: 'font-display',
    colors: { primary: '#f97316', secondary: '#ea580c', accent: '#a855f7', background: '#0c0a09', text: '#fed7aa',
      gradient: 'from-orange-600 via-purple-600 to-black',
      button: 'bg-gradient-to-r from-orange-600 to-purple-700 hover:shadow-lg hover:shadow-orange-600/50',
      card: 'bg-stone-950/80 backdrop-blur-lg border border-orange-500/40',
      border: 'border-orange-500/40', glow: 'shadow-orange-500/40', hover: 'hover:bg-stone-900' } },

  christmas: { id: 'christmas', name: 'Christmas', icon: '🎄', fonts: 'font-serif',
    colors: { primary: '#dc2626', secondary: '#15803d', accent: '#fbbf24', background: '#fef2f2', text: '#7f1d1d',
      gradient: 'from-red-600 via-green-600 to-amber-500',
      button: 'bg-gradient-to-r from-red-600 to-green-700 hover:shadow-lg hover:shadow-red-600/50',
      card: 'bg-red-50/90 backdrop-blur-lg border border-green-200',
      border: 'border-green-200', glow: 'shadow-green-500/30', hover: 'hover:bg-red-100' } },

  easter: { id: 'easter', name: 'Easter', icon: '🐰', fonts: 'font-round',
    colors: { primary: '#a78bfa', secondary: '#f9a8d4', accent: '#86efac', background: '#fdf4ff', text: '#4c1d95',
      gradient: 'from-purple-300 via-pink-300 to-green-300',
      button: 'bg-gradient-to-r from-purple-300 via-pink-300 to-green-300 hover:shadow-lg hover:shadow-purple-300/50 text-gray-800',
      card: 'bg-white/95 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-300/30', hover: 'hover:bg-purple-50' } },

  valentine: { id: 'valentine', name: 'Valentine', icon: '💝', fonts: 'font-serif',
    colors: { primary: '#e11d48', secondary: '#be123c', accent: '#fb7185', background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-500 via-pink-500 to-red-500',
      button: 'bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-rose-50/90 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/30', hover: 'hover:bg-rose-100' } },

  stPatricks: { id: 'stPatricks', name: "St. Patrick's", icon: '🍀', fonts: 'font-serif',
    colors: { primary: '#16a34a', secondary: '#15803d', accent: '#fbbf24', background: '#f0fdf4', text: '#14532d',
      gradient: 'from-green-500 via-emerald-500 to-amber-400',
      button: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/50',
      card: 'bg-green-50/90 backdrop-blur-lg border border-green-200',
      border: 'border-green-200', glow: 'shadow-green-500/30', hover: 'hover:bg-green-100' } },

  newYear: { id: 'newYear', name: 'New Year', icon: '🎆', fonts: 'font-display',
    colors: { primary: '#fbbf24', secondary: '#a855f7', accent: '#ec4899', background: '#0c0a09', text: '#fef3c7',
      gradient: 'from-yellow-400 via-pink-500 to-purple-600',
      button: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:shadow-lg hover:shadow-yellow-500/50',
      card: 'bg-stone-950/80 backdrop-blur-lg border border-amber-500/40',
      border: 'border-amber-500/40', glow: 'shadow-amber-500/40', hover: 'hover:bg-stone-900' } },

  birthday: { id: 'birthday', name: 'Birthday', icon: '🎂', fonts: 'font-round',
    colors: { primary: '#ec4899', secondary: '#f472b6', accent: '#a78bfa', background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-400 via-purple-400 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:shadow-lg hover:shadow-pink-400/50',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-400/30', hover: 'hover:bg-pink-100' } },

  beach: { id: 'beach', name: 'Beach', icon: '🏖️', fonts: 'font-sans',
    colors: { primary: '#0ea5e9', secondary: '#06b6d4', accent: '#fbbf24', background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-cyan-400 via-sky-400 to-amber-300',
      button: 'bg-gradient-to-r from-cyan-400 via-sky-500 to-amber-400 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-50' } },

  jungle: { id: 'jungle', name: 'Jungle', icon: '🌴', fonts: 'font-display',
    colors: { primary: '#65a30d', secondary: '#4d7c0f', accent: '#f59e0b', background: '#1a2e05', text: '#d9f99d',
      gradient: 'from-lime-600 via-green-600 to-amber-500',
      button: 'bg-gradient-to-r from-lime-600 via-green-700 to-amber-600 hover:shadow-lg hover:shadow-lime-600/50',
      card: 'bg-lime-950/60 backdrop-blur-lg border border-lime-500/30',
      border: 'border-lime-500/30', glow: 'shadow-lime-500/40', hover: 'hover:bg-lime-900/50' } },

  safari: { id: 'safari', name: 'Safari', icon: '🦁', fonts: 'font-serif',
    colors: { primary: '#ca8a04', secondary: '#a16207', accent: '#65a30d', background: '#fefce8', text: '#422006',
      gradient: 'from-amber-600 via-yellow-500 to-lime-600',
      button: 'bg-gradient-to-r from-amber-600 via-yellow-600 to-lime-700 hover:shadow-lg hover:shadow-amber-600/50',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/30', hover: 'hover:bg-amber-100' } },

  paris: { id: 'paris', name: 'Paris', icon: '🗼', fonts: 'font-serif',
    colors: { primary: '#e11d48', secondary: '#be123c', accent: '#fbbf24', background: '#fdf2f8', text: '#831843',
      gradient: 'from-rose-500 via-pink-500 to-amber-400',
      button: 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-400/30', hover: 'hover:bg-pink-100' } },

  venice: { id: 'venice', name: 'Venice', icon: '🛶', fonts: 'font-serif',
    colors: { primary: '#0891b2', secondary: '#0e7490', accent: '#fbbf24', background: '#ecfeff', text: '#164e63',
      gradient: 'from-cyan-500 via-teal-500 to-amber-400',
      button: 'bg-gradient-to-r from-cyan-500 to-teal-600 hover:shadow-lg hover:shadow-cyan-500/50',
      card: 'bg-cyan-50/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/30', hover: 'hover:bg-cyan-100' } },

  morocco: { id: 'morocco', name: 'Morocco', icon: '🕌', fonts: 'font-serif',
    colors: { primary: '#dc2626', secondary: '#c2410c', accent: '#fbbf24', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-red-600 via-orange-500 to-amber-400',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 hover:shadow-lg hover:shadow-red-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-500/30', hover: 'hover:bg-amber-100' } },

  // 🌌 SCI-FI / TECH (91-100)
  hologram: { id: 'hologram', name: 'Hologram', icon: '🔷', fonts: 'font-mono',
    colors: { primary: '#22d3ee', secondary: '#0ea5e9', accent: '#a78bfa', background: '#030712', text: '#cffafe',
      gradient: 'from-cyan-400 via-blue-400 to-purple-400',
      button: 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 hover:shadow-lg hover:shadow-cyan-400/60',
      card: 'bg-slate-950/70 backdrop-blur-lg border border-cyan-400/40',
      border: 'border-cyan-400/40', glow: 'shadow-cyan-400/50', hover: 'hover:bg-slate-900' } },

  quantum: { id: 'quantum', name: 'Quantum', icon: '⚛️', fonts: 'font-mono',
    colors: { primary: '#8b5cf6', secondary: '#06b6d4', accent: '#ec4899', background: '#0a0014', text: '#f0abfc',
      gradient: 'from-purple-500 via-cyan-400 to-pink-500',
      button: 'bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 hover:shadow-lg hover:shadow-purple-500/60',
      card: 'bg-purple-950/70 backdrop-blur-lg border border-cyan-500/40',
      border: 'border-cyan-500/40', glow: 'shadow-cyan-500/50', hover: 'hover:bg-purple-900/60' } },

  neural: { id: 'neural', name: 'Neural', icon: '🧠', fonts: 'font-mono',
    colors: { primary: '#14b8a6', secondary: '#0d9488', accent: '#a78bfa', background: '#020617', text: '#ccfbf1',
      gradient: 'from-teal-400 via-cyan-500 to-purple-500',
      button: 'bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-teal-400/60',
      card: 'bg-slate-950/80 backdrop-blur-lg border border-teal-400/40',
      border: 'border-teal-400/40', glow: 'shadow-teal-400/50', hover: 'hover:bg-slate-900' } },

  plasma: { id: 'plasma', name: 'Plasma', icon: '🌟', fonts: 'font-display',
    colors: { primary: '#f0abfc', secondary: '#c084fc', accent: '#f9a8d4', background: '#0a0014', text: '#fae8ff',
      gradient: 'from-fuchsia-400 via-purple-500 to-pink-500',
      button: 'bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-fuchsia-400/60',
      card: 'bg-fuchsia-950/60 backdrop-blur-lg border border-fuchsia-500/40',
      border: 'border-fuchsia-500/40', glow: 'shadow-fuchsia-500/50', hover: 'hover:bg-fuchsia-900/50' } },

  chrome: { id: 'chrome', name: 'Chrome', icon: '🪩', fonts: 'font-display',
    colors: { primary: '#94a3b8', secondary: '#cbd5e1', accent: '#f1f5f9', background: '#0f172a', text: '#f1f5f9',
      gradient: 'from-slate-300 via-white to-slate-400',
      button: 'bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 hover:shadow-lg hover:shadow-slate-300/50 text-gray-900',
      card: 'bg-slate-900/80 backdrop-blur-lg border border-slate-500/40',
      border: 'border-slate-500/40', glow: 'shadow-slate-400/40', hover: 'hover:bg-slate-800' } },

  carbonFiber: { id: 'carbonFiber', name: 'Carbon Fiber', icon: '🏁', fonts: 'font-mono',
    colors: { primary: '#ef4444', secondary: '#b91c1c', accent: '#fbbf24', background: '#0a0a0a', text: '#fafafa',
      gradient: 'from-zinc-800 via-red-600 to-zinc-900',
      button: 'bg-gradient-to-r from-zinc-800 via-red-700 to-zinc-900 hover:shadow-lg hover:shadow-red-700/50',
      card: 'bg-zinc-950/90 backdrop-blur-lg border border-zinc-700',
      border: 'border-zinc-700', glow: 'shadow-red-600/40', hover: 'hover:bg-zinc-900' } },

  steampunk: { id: 'steampunk', name: 'Steampunk', icon: '⚙️', fonts: 'font-serif',
    colors: { primary: '#b45309', secondary: '#92400e', accent: '#d97706', background: '#1c1917', text: '#fef3c7',
      gradient: 'from-amber-700 via-orange-600 to-amber-800',
      button: 'bg-gradient-to-r from-amber-700 via-orange-600 to-amber-900 hover:shadow-lg hover:shadow-amber-700/50',
      card: 'bg-stone-900/80 backdrop-blur-lg border border-amber-700/50',
      border: 'border-amber-700/50', glow: 'shadow-amber-700/50', hover: 'hover:bg-stone-800' } },

  vaporwave: { id: 'vaporwave', name: 'Vaporwave', icon: '🌴', fonts: 'font-display',
    colors: { primary: '#ff6b9d', secondary: '#c084fc', accent: '#22d3ee', background: '#1a0033', text: '#fce7f3',
      gradient: 'from-pink-400 via-purple-400 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 hover:shadow-lg hover:shadow-pink-400/60',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-pink-500/40',
      border: 'border-pink-500/40', glow: 'shadow-pink-400/50', hover: 'hover:bg-purple-900/50' } },

  laser: { id: 'laser', name: 'Laser', icon: '🔴', fonts: 'font-mono',
    colors: { primary: '#ef4444', secondary: '#dc2626', accent: '#f0abfc', background: '#000000', text: '#fef2f2',
      gradient: 'from-red-600 via-pink-600 to-purple-600',
      button: 'bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:shadow-lg hover:shadow-red-600/70',
      card: 'bg-black/90 backdrop-blur-lg border border-red-500/50',
      border: 'border-red-500/50', glow: 'shadow-red-500/70', hover: 'hover:bg-red-950/50' } },

  aurora: { id: 'aurora', name: 'Aurora', icon: '🌠', fonts: 'font-display',
    colors: { primary: '#34d399', secondary: '#06b6d4', accent: '#a855f7', background: '#020617', text: '#ccfbf1',
      gradient: 'from-emerald-400 via-cyan-400 to-purple-500',
      button: 'bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-emerald-400/60',
      card: 'bg-slate-950/70 backdrop-blur-lg border border-emerald-500/40',
      border: 'border-emerald-500/40', glow: 'shadow-emerald-500/50', hover: 'hover:bg-slate-900' } },

      // ─── 🌈 VIBRANT / BOLD (1-10) ──────────────────────────────
  bubblegum: { id: 'bubblegum', name: 'Bubblegum', icon: '🍬', fonts: 'font-round',
    colors: { primary: '#ff6b9d', secondary: '#c44569', accent: '#feca57', background: '#fff5f7', text: '#6b2737',
      gradient: 'from-pink-400 via-rose-400 to-yellow-300',
      button: 'bg-gradient-to-r from-pink-400 via-rose-400 to-yellow-300 hover:shadow-lg hover:shadow-pink-400/60 text-gray-900',
      card: 'bg-white/85 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-400/40', hover: 'hover:bg-pink-50' } },

  firefly: { id: 'firefly', name: 'Firefly', icon: '✨', fonts: 'font-display',
    colors: { primary: '#fbbf24', secondary: '#f59e0b', accent: '#bef264', background: '#0a0a0a', text: '#fef3c7',
      gradient: 'from-yellow-400 via-lime-400 to-emerald-400',
      button: 'bg-gradient-to-r from-yellow-400 via-lime-400 to-emerald-400 hover:shadow-lg hover:shadow-yellow-400/70 text-gray-900',
      card: 'bg-black/90 backdrop-blur-lg border border-yellow-500/40',
      border: 'border-yellow-500/40', glow: 'shadow-yellow-400/60', hover: 'hover:bg-yellow-950/40' } },

  peachyKeen: { id: 'peachyKeen', name: 'Peachy Keen', icon: '🍑', fonts: 'font-round',
    colors: { primary: '#fb923c', secondary: '#f97316', accent: '#fbcfe8', background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-300 via-pink-300 to-yellow-200',
      button: 'bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-200 hover:shadow-lg hover:shadow-orange-300/50 text-gray-900',
      card: 'bg-orange-50/90 backdrop-blur-lg border border-orange-200',
      border: 'border-orange-200', glow: 'shadow-orange-300/40', hover: 'hover:bg-orange-100' } },

  tropicalPunch: { id: 'tropicalPunch', name: 'Tropical Punch', icon: '🍹', fonts: 'font-display',
    colors: { primary: '#f43f5e', secondary: '#fb923c', accent: '#22d3ee', background: '#fef2f2', text: '#7f1d1d',
      gradient: 'from-rose-500 via-orange-400 to-cyan-400',
      button: 'bg-gradient-to-r from-rose-500 via-orange-400 to-cyan-400 hover:shadow-lg hover:shadow-rose-500/50',
      card: 'bg-white/85 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-500/40', hover: 'hover:bg-rose-50' } },

  lightning: { id: 'lightning', name: 'Lightning', icon: '⚡', fonts: 'font-mono',
    colors: { primary: '#facc15', secondary: '#eab308', accent: '#60a5fa', background: '#0c0a09', text: '#fefce8',
      gradient: 'from-yellow-300 via-blue-400 to-indigo-500',
      button: 'bg-gradient-to-r from-yellow-300 via-blue-400 to-indigo-500 hover:shadow-lg hover:shadow-yellow-300/70 text-gray-900',
      card: 'bg-black/85 backdrop-blur-lg border border-yellow-400/50',
      border: 'border-yellow-400/50', glow: 'shadow-yellow-400/60', hover: 'hover:bg-yellow-950/40' } },

  flamingo: { id: 'flamingo', name: 'Flamingo', icon: '🦩', fonts: 'font-classy',
    colors: { primary: '#ec4899', secondary: '#f472b6', accent: '#fda4af', background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-400 via-rose-300 to-fuchsia-300',
      button: 'bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-300 hover:shadow-lg hover:shadow-pink-400/50 text-gray-900',
      card: 'bg-pink-50/90 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-400/40', hover: 'hover:bg-pink-100' } },

  neonPink: { id: 'neonPink', name: 'Neon Pink', icon: '💖', fonts: 'font-brutal',
    colors: { primary: '#f472b6', secondary: '#ec4899', accent: '#22d3ee', background: '#0f0a14', text: '#fce7f3',
      gradient: 'from-pink-500 via-fuchsia-500 to-cyan-400',
      button: 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 hover:shadow-lg hover:shadow-pink-500/70',
      card: 'bg-fuchsia-950/60 backdrop-blur-lg border border-pink-500/50',
      border: 'border-pink-500/50', glow: 'shadow-pink-500/60', hover: 'hover:bg-fuchsia-900/50' } },

  rainbow: { id: 'rainbow', name: 'Rainbow', icon: '🌈', fonts: 'font-round',
    colors: { primary: '#a855f7', secondary: '#ec4899', accent: '#22d3ee', background: '#fafafa', text: '#1e1b4b',
      gradient: 'from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400',
      button: 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 hover:shadow-lg hover:shadow-purple-400/50 text-gray-900',
      card: 'bg-white/90 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-400/40', hover: 'hover:bg-purple-50' } },

  galaxy2: { id: 'galaxy2', name: 'Nebula', icon: '🌠', fonts: 'font-tech',
    colors: { primary: '#a78bfa', secondary: '#c084fc', accent: '#22d3ee', background: '#0a0014', text: '#ede9fe',
      gradient: 'from-purple-500 via-fuchsia-500 to-cyan-400',
      button: 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 hover:shadow-lg hover:shadow-purple-500/70',
      card: 'bg-purple-950/60 backdrop-blur-lg border border-purple-500/40',
      border: 'border-purple-500/40', glow: 'shadow-purple-500/60', hover: 'hover:bg-purple-900/50' } },

  sunrise: { id: 'sunrise', name: 'Sunrise', icon: '☀️', fonts: 'font-classy',
    colors: { primary: '#f59e0b', secondary: '#fb923c', accent: '#fbbf24', background: '#fffbeb', text: '#78350f',
      gradient: 'from-yellow-300 via-orange-300 to-rose-300',
      button: 'bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-300 hover:shadow-lg hover:shadow-yellow-300/50 text-gray-900',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-yellow-200',
      border: 'border-yellow-200', glow: 'shadow-yellow-300/40', hover: 'hover:bg-yellow-100' } },

  // ─── 🌊 OCEANIC / AQUATIC (11-20) ──────────────────────────
  coralReef: { id: 'coralReef', name: 'Coral Reef', icon: '🪸', fonts: 'font-modern',
    colors: { primary: '#fb7185', secondary: '#f43f5e', accent: '#22d3ee', background: '#ecfeff', text: '#164e63',
      gradient: 'from-rose-400 via-orange-400 to-cyan-400',
      button: 'bg-gradient-to-r from-rose-400 via-orange-400 to-cyan-400 hover:shadow-lg hover:shadow-rose-400/50',
      card: 'bg-cyan-50/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-400/40', hover: 'hover:bg-cyan-100' } },

  lagoon: { id: 'lagoon', name: 'Lagoon', icon: '🏝️', fonts: 'font-modern',
    colors: { primary: '#06b6d4', secondary: '#0891b2', accent: '#34d399', background: '#ecfeff', text: '#164e63',
      gradient: 'from-teal-400 via-cyan-400 to-emerald-300',
      button: 'bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-300 hover:shadow-lg hover:shadow-teal-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-400/40', hover: 'hover:bg-teal-50' } },

  mermaid: { id: 'mermaid', name: 'Mermaid', icon: '🧜', fonts: 'font-classy',
    colors: { primary: '#14b8a6', secondary: '#06b6d4', accent: '#a78bfa', background: '#f0fdfa', text: '#134e4a',
      gradient: 'from-teal-400 via-cyan-400 to-purple-400',
      button: 'bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 hover:shadow-lg hover:shadow-teal-400/50',
      card: 'bg-teal-50/90 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-400/40', hover: 'hover:bg-teal-100' } },

  wave: { id: 'wave', name: 'Wave', icon: '🌊', fonts: 'font-modern',
    colors: { primary: '#0ea5e9', secondary: '#0284c7', accent: '#7dd3fc', background: '#0c4a6e', text: '#e0f2fe',
      gradient: 'from-sky-400 via-blue-400 to-cyan-300',
      button: 'bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 hover:shadow-lg hover:shadow-sky-400/60',
      card: 'bg-blue-950/60 backdrop-blur-lg border border-sky-500/40',
      border: 'border-sky-500/40', glow: 'shadow-sky-500/60', hover: 'hover:bg-blue-900/50' } },

  atlantis: { id: 'atlantis', name: 'Atlantis', icon: '🔱', fonts: 'font-display',
    colors: { primary: '#0891b2', secondary: '#0e7490', accent: '#fbbf24', background: '#082f49', text: '#cffafe',
      gradient: 'from-cyan-500 via-teal-500 to-amber-400',
      button: 'bg-gradient-to-r from-cyan-500 via-teal-500 to-amber-400 hover:shadow-lg hover:shadow-cyan-500/60',
      card: 'bg-cyan-950/70 backdrop-blur-lg border border-cyan-500/40',
      border: 'border-cyan-500/40', glow: 'shadow-cyan-500/50', hover: 'hover:bg-cyan-900/50' } },

  iceberg: { id: 'iceberg', name: 'Iceberg', icon: '🧊', fonts: 'font-modern',
    colors: { primary: '#67e8f9', secondary: '#a5f3fc', accent: '#dbeafe', background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-cyan-200 via-sky-200 to-blue-200',
      button: 'bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-300 hover:shadow-lg hover:shadow-cyan-300/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-300/40', hover: 'hover:bg-cyan-50' } },

  dolphin: { id: 'dolphin', name: 'Dolphin', icon: '🐬', fonts: 'font-modern',
    colors: { primary: '#3b82f6', secondary: '#2563eb', accent: '#7dd3fc', background: '#eff6ff', text: '#1e3a8a',
      gradient: 'from-blue-400 via-sky-400 to-cyan-300',
      button: 'bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 hover:shadow-lg hover:shadow-blue-400/50',
      card: 'bg-white/90 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-400/40', hover: 'hover:bg-blue-50' } },

  submarine: { id: 'submarine', name: 'Submarine', icon: '🚢', fonts: 'font-tech',
    colors: { primary: '#fbbf24', secondary: '#f59e0b', accent: '#22d3ee', background: '#0c1424', text: '#fef3c7',
      gradient: 'from-amber-400 via-yellow-400 to-cyan-400',
      button: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-cyan-400 hover:shadow-lg hover:shadow-amber-400/60 text-gray-900',
      card: 'bg-slate-900/80 backdrop-blur-lg border border-amber-500/40',
      border: 'border-amber-500/40', glow: 'shadow-amber-500/50', hover: 'hover:bg-slate-800' } },

  seafoam: { id: 'seafoam', name: 'Seafoam', icon: '🫧', fonts: 'font-round',
    colors: { primary: '#5eead4', secondary: '#2dd4bf', accent: '#a7f3d0', background: '#f0fdfa', text: '#134e4a',
      gradient: 'from-teal-200 via-emerald-200 to-cyan-200',
      button: 'bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 hover:shadow-lg hover:shadow-teal-300/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-300/40', hover: 'hover:bg-teal-50' } },

  deepOcean: { id: 'deepOcean', name: 'Deep Ocean', icon: '🦑', fonts: 'font-tech',
    colors: { primary: '#0e7490', secondary: '#155e75', accent: '#22d3ee', background: '#001e26', text: '#cffafe',
      gradient: 'from-cyan-800 via-teal-700 to-blue-800',
      button: 'bg-gradient-to-r from-cyan-800 via-teal-700 to-blue-800 hover:shadow-lg hover:shadow-cyan-700/60',
      card: 'bg-cyan-950/80 backdrop-blur-lg border border-cyan-600/40',
      border: 'border-cyan-600/40', glow: 'shadow-cyan-600/50', hover: 'hover:bg-cyan-900/60' } },

  // ─── 🔥 FIRE / VOLCANIC (21-30) ────────────────────────────
  inferno: { id: 'inferno', name: 'Inferno', icon: '🔥', fonts: 'font-brutal',
    colors: { primary: '#dc2626', secondary: '#b91c1c', accent: '#f97316', background: '#0a0000', text: '#fee2e2',
      gradient: 'from-red-700 via-orange-600 to-yellow-500',
      button: 'bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 hover:shadow-lg hover:shadow-red-700/70',
      card: 'bg-red-950/80 backdrop-blur-lg border border-red-600/50',
      border: 'border-red-600/50', glow: 'shadow-red-600/60', hover: 'hover:bg-red-900/60' } },

  phoenix: { id: 'phoenix', name: 'Phoenix', icon: '🦅', fonts: 'font-brutal',
    colors: { primary: '#f97316', secondary: '#ea580c', accent: '#fbbf24', background: '#1c0a00', text: '#fed7aa',
      gradient: 'from-orange-500 via-red-500 to-amber-400',
      button: 'bg-gradient-to-r from-orange-500 via-red-500 to-amber-400 hover:shadow-lg hover:shadow-orange-500/70',
      card: 'bg-orange-950/70 backdrop-blur-lg border border-orange-500/50',
      border: 'border-orange-500/50', glow: 'shadow-orange-500/60', hover: 'hover:bg-orange-900/60' } },

  magma: { id: 'magma', name: 'Magma', icon: '🌋', fonts: 'font-brutal',
    colors: { primary: '#ef4444', secondary: '#b91c1c', accent: '#fbbf24', background: '#1a0505', text: '#fee2e2',
      gradient: 'from-red-600 via-orange-600 to-amber-500',
      button: 'bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 hover:shadow-lg hover:shadow-red-600/70',
      card: 'bg-red-950/80 backdrop-blur-lg border border-red-500/50',
      border: 'border-red-500/50', glow: 'shadow-red-500/60', hover: 'hover:bg-red-900/60' } },

  ember: { id: 'ember', name: 'Ember', icon: '✨', fonts: 'font-classy',
    colors: { primary: '#f59e0b', secondary: '#d97706', accent: '#dc2626', background: '#1a0e00', text: '#fef3c7',
      gradient: 'from-amber-500 via-orange-600 to-red-700',
      button: 'bg-gradient-to-r from-amber-500 via-orange-600 to-red-700 hover:shadow-lg hover:shadow-amber-500/60',
      card: 'bg-stone-900/80 backdrop-blur-lg border border-amber-600/50',
      border: 'border-amber-600/50', glow: 'shadow-amber-600/50', hover: 'hover:bg-stone-800' } },

  wildfire: { id: 'wildfire', name: 'Wildfire', icon: '🔥', fonts: 'font-brutal',
    colors: { primary: '#ea580c', secondary: '#c2410c', accent: '#fbbf24', background: '#1c0900', text: '#ffedd5',
      gradient: 'from-orange-600 via-red-500 to-amber-400',
      button: 'bg-gradient-to-r from-orange-600 via-red-500 to-amber-400 hover:shadow-lg hover:shadow-orange-600/70',
      card: 'bg-orange-950/80 backdrop-blur-lg border border-orange-600/50',
      border: 'border-orange-600/50', glow: 'shadow-orange-500/60', hover: 'hover:bg-orange-900/60' } },

  solarFlare: { id: 'solarFlare', name: 'Solar Flare', icon: '☀️', fonts: 'font-brutal',
    colors: { primary: '#fbbf24', secondary: '#f59e0b', accent: '#f97316', background: '#0a0500', text: '#fefce8',
      gradient: 'from-yellow-300 via-orange-500 to-red-600',
      button: 'bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 hover:shadow-lg hover:shadow-yellow-400/70 text-gray-900',
      card: 'bg-yellow-950/80 backdrop-blur-lg border border-yellow-400/50',
      border: 'border-yellow-400/50', glow: 'shadow-yellow-400/60', hover: 'hover:bg-yellow-900/60' } },

  dragonFire: { id: 'dragonFire', name: 'Dragon Fire', icon: '🐲', fonts: 'font-brutal',
    colors: { primary: '#dc2626', secondary: '#991b1b', accent: '#fbbf24', background: '#0a0000', text: '#fecaca',
      gradient: 'from-red-700 via-orange-600 to-yellow-400',
      button: 'bg-gradient-to-r from-red-700 via-orange-600 to-yellow-400 hover:shadow-lg hover:shadow-red-700/70',
      card: 'bg-red-950/80 backdrop-blur-lg border border-red-600/60',
      border: 'border-red-600/60', glow: 'shadow-red-600/70', hover: 'hover:bg-red-900/60' } },

  campfire: { id: 'campfire', name: 'Campfire', icon: '🏕️', fonts: 'font-classy',
    colors: { primary: '#ea580c', secondary: '#c2410c', accent: '#fbbf24', background: '#1a0e05', text: '#fed7aa',
      gradient: 'from-orange-500 via-amber-600 to-red-700',
      button: 'bg-gradient-to-r from-orange-500 via-amber-600 to-red-700 hover:shadow-lg hover:shadow-orange-500/60',
      card: 'bg-stone-900/80 backdrop-blur-lg border border-orange-600/50',
      border: 'border-orange-600/50', glow: 'shadow-orange-600/50', hover: 'hover:bg-stone-800' } },

  ruby: { id: 'ruby', name: 'Ruby', icon: '💎', fonts: 'font-classy',
    colors: { primary: '#e11d48', secondary: '#be123c', accent: '#fb7185', background: '#1a0007', text: '#ffe4e6',
      gradient: 'from-rose-600 via-red-600 to-pink-600',
      button: 'bg-gradient-to-r from-rose-600 via-red-600 to-pink-600 hover:shadow-lg hover:shadow-rose-600/60',
      card: 'bg-rose-950/70 backdrop-blur-lg border border-rose-500/40',
      border: 'border-rose-500/40', glow: 'shadow-rose-500/50', hover: 'hover:bg-rose-900/60' } },

  lavaLamp: { id: 'lavaLamp', name: 'Lava Lamp', icon: '🪔', fonts: 'font-display',
    colors: { primary: '#f97316', secondary: '#ec4899', accent: '#fbbf24', background: '#1a0a14', text: '#fed7aa',
      gradient: 'from-orange-500 via-pink-500 to-amber-400',
      button: 'bg-gradient-to-r from-orange-500 via-pink-500 to-amber-400 hover:shadow-lg hover:shadow-orange-500/60',
      card: 'bg-pink-950/60 backdrop-blur-lg border border-orange-500/40',
      border: 'border-orange-500/40', glow: 'shadow-orange-500/50', hover: 'hover:bg-pink-900/60' } },

  // ─── 🌿 NATURE / EARTHY (31-45) ────────────────────────────
  mossyStone: { id: 'mossyStone', name: 'Mossy Stone', icon: '🪨', fonts: 'font-classy',
    colors: { primary: '#65a30d', secondary: '#4d7c0f', accent: '#a8a29e', background: '#f5f5f4', text: '#1c1917',
      gradient: 'from-lime-600 via-green-700 to-stone-500',
      button: 'bg-gradient-to-r from-lime-600 via-green-700 to-stone-500 hover:shadow-lg hover:shadow-lime-600/50',
      card: 'bg-stone-50/90 backdrop-blur-lg border border-stone-300',
      border: 'border-stone-300', glow: 'shadow-lime-600/30', hover: 'hover:bg-stone-100' } },

  autumnLeaves: { id: 'autumnLeaves', name: 'Autumn Leaves', icon: '🍂', fonts: 'font-classy',
    colors: { primary: '#c2410c', secondary: '#9a3412', accent: '#fbbf24', background: '#fefce8', text: '#422006',
      gradient: 'from-orange-600 via-amber-500 to-yellow-400',
      button: 'bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 hover:shadow-lg hover:shadow-orange-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-600/40', hover: 'hover:bg-amber-100' } },

  cypress: { id: 'cypress', name: 'Cypress', icon: '🌲', fonts: 'font-classy',
    colors: { primary: '#166534', secondary: '#14532d', accent: '#84cc16', background: '#f7fee7', text: '#1a2e05',
      gradient: 'from-green-700 via-emerald-700 to-lime-600',
      button: 'bg-gradient-to-r from-green-700 via-emerald-700 to-lime-600 hover:shadow-lg hover:shadow-green-700/50',
      card: 'bg-green-50/90 backdrop-blur-lg border border-green-300',
      border: 'border-green-300', glow: 'shadow-green-700/40', hover: 'hover:bg-green-100' } },

  lavenderField: { id: 'lavenderField', name: 'Lavender Field', icon: '💜', fonts: 'font-classy',
    colors: { primary: '#8b5cf6', secondary: '#7c3aed', accent: '#ddd6fe', background: '#faf5ff', text: '#4c1d95',
      gradient: 'from-violet-400 via-purple-400 to-fuchsia-300',
      button: 'bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-300 hover:shadow-lg hover:shadow-violet-400/50',
      card: 'bg-violet-50/90 backdrop-blur-lg border border-violet-200',
      border: 'border-violet-200', glow: 'shadow-violet-400/40', hover: 'hover:bg-violet-100' } },

  sakuraPetal: { id: 'sakuraPetal', name: 'Sakura Petal', icon: '🌸', fonts: 'font-classy',
    colors: { primary: '#f9a8d4', secondary: '#f472b6', accent: '#fbcfe8', background: '#fdf2f8', text: '#831843',
      gradient: 'from-pink-200 via-rose-300 to-fuchsia-200',
      button: 'bg-gradient-to-r from-pink-300 via-rose-400 to-fuchsia-300 hover:shadow-lg hover:shadow-pink-300/50 text-gray-900',
      card: 'bg-pink-50/95 backdrop-blur-lg border border-pink-200',
      border: 'border-pink-200', glow: 'shadow-pink-300/40', hover: 'hover:bg-pink-100' } },

  bambooGrove: { id: 'bambooGrove', name: 'Bamboo Grove', icon: '🎋', fonts: 'font-classy',
    colors: { primary: '#65a30d', secondary: '#4d7c0f', accent: '#a3e635', background: '#f7fee7', text: '#1a2e05',
      gradient: 'from-lime-500 via-green-600 to-emerald-500',
      button: 'bg-gradient-to-r from-lime-500 via-green-600 to-emerald-500 hover:shadow-lg hover:shadow-lime-500/50',
      card: 'bg-lime-50/90 backdrop-blur-lg border border-lime-200',
      border: 'border-lime-200', glow: 'shadow-lime-500/40', hover: 'hover:bg-lime-100' } },

  desertSunset: { id: 'desertSunset', name: 'Desert Sunset', icon: '🌵', fonts: 'font-classy',
    colors: { primary: '#ea580c', secondary: '#c2410c', accent: '#fb923c', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-orange-500 via-rose-400 to-amber-300',
      button: 'bg-gradient-to-r from-orange-500 via-rose-400 to-amber-300 hover:shadow-lg hover:shadow-orange-500/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/40', hover: 'hover:bg-amber-100' } },

  snowyPine: { id: 'snowyPine', name: 'Snowy Pine', icon: '❄️', fonts: 'font-classy',
    colors: { primary: '#0e7490', secondary: '#155e75', accent: '#e0f2fe', background: '#f0f9ff', text: '#0c4a6e',
      gradient: 'from-cyan-400 via-sky-300 to-slate-200',
      button: 'bg-gradient-to-r from-cyan-400 via-sky-400 to-slate-300 hover:shadow-lg hover:shadow-cyan-400/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-300/40', hover: 'hover:bg-cyan-50' } },

  meadow2: { id: 'meadow2', name: 'Wildflower', icon: '🌼', fonts: 'font-round',
    colors: { primary: '#eab308', secondary: '#ca8a04', accent: '#f472b6', background: '#fefce8', text: '#422006',
      gradient: 'from-yellow-300 via-lime-300 to-pink-300',
      button: 'bg-gradient-to-r from-yellow-300 via-lime-300 to-pink-300 hover:shadow-lg hover:shadow-yellow-300/50 text-gray-900',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-yellow-200',
      border: 'border-yellow-200', glow: 'shadow-yellow-300/40', hover: 'hover:bg-yellow-100' } },

  jungle2: { id: 'jungle2', name: 'Rainforest', icon: '🌴', fonts: 'font-classy',
    colors: { primary: '#16a34a', secondary: '#15803d', accent: '#f59e0b', background: '#052e16', text: '#dcfce7',
      gradient: 'from-green-600 via-emerald-600 to-amber-500',
      button: 'bg-gradient-to-r from-green-600 via-emerald-700 to-amber-600 hover:shadow-lg hover:shadow-green-600/60',
      card: 'bg-green-950/70 backdrop-blur-lg border border-green-500/40',
      border: 'border-green-500/40', glow: 'shadow-green-500/50', hover: 'hover:bg-green-900/60' } },

  canyonRock: { id: 'canyonRock', name: 'Canyon Rock', icon: '🏜️', fonts: 'font-brutal',
    colors: { primary: '#b45309', secondary: '#92400e', accent: '#fbbf24', background: '#1c0e00', text: '#fef3c7',
      gradient: 'from-amber-700 via-orange-600 to-red-700',
      button: 'bg-gradient-to-r from-amber-700 via-orange-600 to-red-700 hover:shadow-lg hover:shadow-amber-700/60',
      card: 'bg-stone-900/80 backdrop-blur-lg border border-amber-700/50',
      border: 'border-amber-700/50', glow: 'shadow-amber-700/50', hover: 'hover:bg-stone-800' } },

  evergreen: { id: 'evergreen', name: 'Evergreen', icon: '🌲', fonts: 'font-classy',
    colors: { primary: '#065f46', secondary: '#064e3b', accent: '#10b981', background: '#ecfdf5', text: '#064e3b',
      gradient: 'from-emerald-700 via-teal-700 to-green-600',
      button: 'bg-gradient-to-r from-emerald-700 via-teal-700 to-green-600 hover:shadow-lg hover:shadow-emerald-700/50',
      card: 'bg-emerald-50/90 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-700/40', hover: 'hover:bg-emerald-100' } },

  harvest: { id: 'harvest', name: 'Harvest', icon: '🌾', fonts: 'font-classy',
    colors: { primary: '#ca8a04', secondary: '#a16207', accent: '#dc2626', background: '#fefce8', text: '#422006',
      gradient: 'from-yellow-500 via-amber-500 to-red-500',
      button: 'bg-gradient-to-r from-yellow-500 via-amber-500 to-red-500 hover:shadow-lg hover:shadow-amber-500/50',
      card: 'bg-yellow-50/90 backdrop-blur-lg border border-yellow-300',
      border: 'border-yellow-300', glow: 'shadow-amber-500/40', hover: 'hover:bg-yellow-100' } },

  autumnMist: { id: 'autumnMist', name: 'Autumn Mist', icon: '🌫️', fonts: 'font-modern',
    colors: { primary: '#78716c', secondary: '#57534e', accent: '#ea580c', background: '#fafaf9', text: '#1c1917',
      gradient: 'from-stone-400 via-stone-500 to-orange-600',
      button: 'bg-gradient-to-r from-stone-400 via-stone-500 to-orange-600 hover:shadow-lg hover:shadow-stone-400/50',
      card: 'bg-stone-50/90 backdrop-blur-lg border border-stone-300',
      border: 'border-stone-300', glow: 'shadow-stone-400/40', hover: 'hover:bg-stone-100' } },

  // ─── ⚫ DARK / CYBERPUNK (46-60) ───────────────────────────
  terminal: { id: 'terminal', name: 'Terminal', icon: '💻', fonts: 'font-mono',
    colors: { primary: '#22c55e', secondary: '#16a34a', accent: '#86efac', background: '#000000', text: '#22c55e',
      gradient: 'from-green-500 to-emerald-600',
      button: 'bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-lg hover:shadow-green-500/70',
      card: 'bg-black/95 backdrop-blur-lg border border-green-500/50',
      border: 'border-green-500/50', glow: 'shadow-green-500/70', hover: 'hover:bg-green-950/40' } },

  hacker: { id: 'hacker', name: 'Hacker', icon: '🖥️', fonts: 'font-mono',
    colors: { primary: '#00ff00', secondary: '#00cc00', accent: '#00ffcc', background: '#0d0208', text: '#00ff00',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      button: 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-green-400/70',
      card: 'bg-black/95 backdrop-blur-lg border border-green-400/50',
      border: 'border-green-400/50', glow: 'shadow-green-400/70', hover: 'hover:bg-emerald-950/40' } },

  glitch: { id: 'glitch', name: 'Glitch', icon: '📺', fonts: 'font-mono',
    colors: { primary: '#22d3ee', secondary: '#f43f5e', accent: '#a78bfa', background: '#0a0a0a', text: '#f1f5f9',
      gradient: 'from-cyan-400 via-pink-500 to-purple-500',
      button: 'bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-400/60',
      card: 'bg-black/90 backdrop-blur-lg border border-cyan-500/40',
      border: 'border-cyan-500/40', glow: 'shadow-cyan-500/60', hover: 'hover:bg-cyan-950/40' } },

  matrix2: { id: 'matrix2', name: 'Code Rain', icon: '📟', fonts: 'font-mono',
    colors: { primary: '#4ade80', secondary: '#22c55e', accent: '#16a34a', background: '#000000', text: '#4ade80',
      gradient: 'from-lime-400 via-green-400 to-emerald-500',
      button: 'bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 hover:shadow-lg hover:shadow-lime-400/70',
      card: 'bg-black/95 backdrop-blur-lg border border-lime-500/50',
      border: 'border-lime-500/50', glow: 'shadow-lime-500/70', hover: 'hover:bg-lime-950/40' } },

  darkWeb: { id: 'darkWeb', name: 'Dark Web', icon: '🕸️', fonts: 'font-mono',
    colors: { primary: '#a855f7', secondary: '#7e22ce', accent: '#ec4899', background: '#0a0014', text: '#e9d5ff',
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-500',
      button: 'bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:shadow-lg hover:shadow-purple-600/60',
      card: 'bg-purple-950/70 backdrop-blur-lg border border-purple-500/40',
      border: 'border-purple-500/40', glow: 'shadow-purple-500/60', hover: 'hover:bg-purple-900/60' } },

  cyberpunk2: { id: 'cyberpunk2', name: 'Night City', icon: '🌃', fonts: 'font-tech',
    colors: { primary: '#fde047', secondary: '#facc15', accent: '#22d3ee', background: '#0f0f23', text: '#fef9c3',
      gradient: 'from-yellow-400 via-cyan-400 to-pink-500',
      button: 'bg-gradient-to-r from-yellow-400 via-cyan-400 to-pink-500 hover:shadow-lg hover:shadow-yellow-400/60 text-gray-900',
      card: 'bg-slate-900/80 backdrop-blur-lg border border-yellow-400/50',
      border: 'border-yellow-400/50', glow: 'shadow-yellow-400/60', hover: 'hover:bg-slate-800' } },

  neonGrid: { id: 'neonGrid', name: 'Neon Grid', icon: '🟪', fonts: 'font-mono',
    colors: { primary: '#f0abfc', secondary: '#c084fc', accent: '#22d3ee', background: '#0a0014', text: '#fae8ff',
      gradient: 'from-fuchsia-400 via-pink-500 to-cyan-400',
      button: 'bg-gradient-to-r from-fuchsia-400 via-pink-500 to-cyan-400 hover:shadow-lg hover:shadow-fuchsia-400/60',
      card: 'bg-black/90 backdrop-blur-lg border border-fuchsia-500/50',
      border: 'border-fuchsia-500/50', glow: 'shadow-fuchsia-500/60', hover: 'hover:bg-fuchsia-950/40' } },

  dataStream: { id: 'dataStream', name: 'Data Stream', icon: '📊', fonts: 'font-tech',
    colors: { primary: '#06b6d4', secondary: '#0891b2', accent: '#a855f7', background: '#001e26', text: '#cffafe',
      gradient: 'from-cyan-500 via-teal-500 to-purple-500',
      button: 'bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/60',
      card: 'bg-cyan-950/80 backdrop-blur-lg border border-cyan-500/40',
      border: 'border-cyan-500/40', glow: 'shadow-cyan-500/60', hover: 'hover:bg-cyan-900/50' } },

  void: { id: 'void', name: 'Void', icon: '⚫', fonts: 'font-tech',
    colors: { primary: '#a1a1aa', secondary: '#71717a', accent: '#e4e4e7', background: '#000000', text: '#f4f4f5',
      gradient: 'from-zinc-600 via-zinc-700 to-zinc-900',
      button: 'bg-gradient-to-r from-zinc-600 to-zinc-900 hover:shadow-lg hover:shadow-zinc-600/50',
      card: 'bg-black/95 backdrop-blur-lg border border-zinc-800',
      border: 'border-zinc-800', glow: 'shadow-zinc-500/40', hover: 'hover:bg-zinc-950' } },

  binary: { id: 'binary', name: 'Binary', icon: '0️⃣', fonts: 'font-mono',
    colors: { primary: '#22d3ee', secondary: '#06b6d4', accent: '#94a3b8', background: '#0a0a0a', text: '#e2e8f0',
      gradient: 'from-cyan-400 via-slate-400 to-slate-600',
      button: 'bg-gradient-to-r from-cyan-400 via-slate-500 to-slate-700 hover:shadow-lg hover:shadow-cyan-400/50',
      card: 'bg-zinc-950/90 backdrop-blur-lg border border-cyan-500/30',
      border: 'border-cyan-500/30', glow: 'shadow-cyan-500/50', hover: 'hover:bg-zinc-900' } },

  ghostWire: { id: 'ghostWire', name: 'Ghost Wire', icon: '👻', fonts: 'font-tech',
    colors: { primary: '#cbd5e1', secondary: '#94a3b8', accent: '#22d3ee', background: '#0a0a0a', text: '#f1f5f9',
      gradient: 'from-slate-300 via-cyan-300 to-slate-500',
      button: 'bg-gradient-to-r from-slate-300 via-cyan-400 to-slate-600 hover:shadow-lg hover:shadow-slate-300/50 text-gray-900',
      card: 'bg-zinc-950/90 backdrop-blur-lg border border-slate-500/40',
      border: 'border-slate-500/40', glow: 'shadow-slate-400/50', hover: 'hover:bg-zinc-900' } },

  shadowRealm: { id: 'shadowRealm', name: 'Shadow Realm', icon: '🌑', fonts: 'font-classy',
    colors: { primary: '#7c3aed', secondary: '#5b21b6', accent: '#c084fc', background: '#0a0014', text: '#e9d5ff',
      gradient: 'from-violet-700 via-purple-800 to-indigo-900',
      button: 'bg-gradient-to-r from-violet-700 via-purple-800 to-indigo-900 hover:shadow-lg hover:shadow-violet-700/60',
      card: 'bg-purple-950/80 backdrop-blur-lg border border-violet-600/40',
      border: 'border-violet-600/40', glow: 'shadow-violet-600/60', hover: 'hover:bg-purple-900/60' } },

  obsidian2: { id: 'obsidian2', name: 'Volcanic Glass', icon: '🔮', fonts: 'font-tech',
    colors: { primary: '#f43f5e', secondary: '#e11d48', accent: '#a855f7', background: '#0a0007', text: '#fecdd3',
      gradient: 'from-rose-600 via-purple-700 to-black',
      button: 'bg-gradient-to-r from-rose-600 via-purple-700 to-black hover:shadow-lg hover:shadow-rose-600/60',
      card: 'bg-black/95 backdrop-blur-lg border border-rose-600/40',
      border: 'border-rose-600/40', glow: 'shadow-rose-600/60', hover: 'hover:bg-rose-950/50' } },

  crypt: { id: 'crypt', name: 'Crypt', icon: '⚰️', fonts: 'font-classy',
    colors: { primary: '#78350f', secondary: '#451a03', accent: '#a16207', background: '#0a0500', text: '#fef3c7',
      gradient: 'from-stone-800 via-amber-900 to-black',
      button: 'bg-gradient-to-r from-stone-800 via-amber-900 to-black hover:shadow-lg hover:shadow-amber-900/50',
      card: 'bg-stone-950/90 backdrop-blur-lg border border-amber-800/50',
      border: 'border-amber-800/50', glow: 'shadow-amber-800/50', hover: 'hover:bg-stone-900' } },

  abyss: { id: 'abyss', name: 'Abyss', icon: '🌊', fonts: 'font-tech',
    colors: { primary: '#0e7490', secondary: '#155e75', accent: '#a5f3fc', background: '#000a0f', text: '#cffafe',
      gradient: 'from-cyan-900 via-blue-900 to-black',
      button: 'bg-gradient-to-r from-cyan-800 via-blue-900 to-black hover:shadow-lg hover:shadow-cyan-800/60',
      card: 'bg-black/95 backdrop-blur-lg border border-cyan-800/50',
      border: 'border-cyan-800/50', glow: 'shadow-cyan-700/50', hover: 'hover:bg-cyan-950/60' } },

  vampire: { id: 'vampire', name: 'Vampire', icon: '🦇', fonts: 'font-classy',
    colors: { primary: '#991b1b', secondary: '#7f1d1d', accent: '#dc2626', background: '#0a0000', text: '#fecaca',
      gradient: 'from-red-900 via-rose-900 to-black',
      button: 'bg-gradient-to-r from-red-900 via-rose-900 to-black hover:shadow-lg hover:shadow-red-900/60',
      card: 'bg-red-950/80 backdrop-blur-lg border border-red-800/50',
      border: 'border-red-800/50', glow: 'shadow-red-800/60', hover: 'hover:bg-red-950/60' } },

  // ─── 💎 ELEGANT / LUXE (61-75) ─────────────────────────────
  roseGold: { id: 'roseGold', name: 'Rose Gold', icon: '🌹', fonts: 'font-classy',
    colors: { primary: '#e11d48', secondary: '#be123c', accent: '#fda4af', background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-300 via-pink-300 to-amber-200',
      button: 'bg-gradient-to-r from-rose-300 via-pink-300 to-amber-200 hover:shadow-lg hover:shadow-rose-300/50 text-gray-900',
      card: 'bg-rose-50/95 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-300/40', hover: 'hover:bg-rose-100' } },

  platinum: { id: 'platinum', name: 'Platinum', icon: '💍', fonts: 'font-classy',
    colors: { primary: '#64748b', secondary: '#475569', accent: '#cbd5e1', background: '#f8fafc', text: '#0f172a',
      gradient: 'from-slate-300 via-slate-200 to-slate-400',
      button: 'bg-gradient-to-r from-slate-300 via-slate-200 to-slate-400 hover:shadow-lg hover:shadow-slate-300/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-slate-200',
      border: 'border-slate-200', glow: 'shadow-slate-300/40', hover: 'hover:bg-slate-50' } },

  ivory: { id: 'ivory', name: 'Ivory', icon: '🤍', fonts: 'font-classy',
    colors: { primary: '#a16207', secondary: '#854d0e', accent: '#e7e5e4', background: '#fafaf9', text: '#292524',
      gradient: 'from-stone-200 via-amber-100 to-stone-300',
      button: 'bg-gradient-to-r from-stone-200 via-amber-100 to-stone-300 hover:shadow-lg hover:shadow-stone-200/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-stone-200',
      border: 'border-stone-200', glow: 'shadow-stone-300/40', hover: 'hover:bg-stone-50' } },

  onyx: { id: 'onyx', name: 'Onyx', icon: '🖤', fonts: 'font-classy',
    colors: { primary: '#d4af37', secondary: '#b8860b', accent: '#fef3c7', background: '#0a0a0a', text: '#fef3c7',
      gradient: 'from-yellow-600 via-amber-500 to-yellow-700',
      button: 'bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 hover:shadow-lg hover:shadow-yellow-600/60 text-gray-900',
      card: 'bg-black/95 backdrop-blur-lg border border-yellow-600/40',
      border: 'border-yellow-600/40', glow: 'shadow-yellow-600/60', hover: 'hover:bg-yellow-950/50' } },

  velvet: { id: 'velvet', name: 'Velvet', icon: '🎭', fonts: 'font-classy',
    colors: { primary: '#7c2d12', secondary: '#5b21b6', accent: '#fbbf24', background: '#1a0a14', text: '#fde68a',
      gradient: 'from-amber-800 via-purple-800 to-rose-900',
      button: 'bg-gradient-to-r from-amber-800 via-purple-800 to-rose-900 hover:shadow-lg hover:shadow-amber-800/60',
      card: 'bg-purple-950/80 backdrop-blur-lg border border-amber-700/40',
      border: 'border-amber-700/40', glow: 'shadow-amber-700/60', hover: 'hover:bg-purple-900/60' } },

  marble: { id: 'marble', name: 'Marble', icon: '🏛️', fonts: 'font-classy',
    colors: { primary: '#475569', secondary: '#334155', accent: '#f1f5f9', background: '#f8fafc', text: '#0f172a',
      gradient: 'from-slate-100 via-slate-200 to-slate-300',
      button: 'bg-gradient-to-r from-slate-400 via-slate-500 to-slate-700 hover:shadow-lg hover:shadow-slate-400/50',
      card: 'bg-white/95 backdrop-blur-lg border border-slate-300',
      border: 'border-slate-300', glow: 'shadow-slate-400/40', hover: 'hover:bg-slate-100' } },

  sapphire: { id: 'sapphire', name: 'Sapphire', icon: '💙', fonts: 'font-classy',
    colors: { primary: '#1e40af', secondary: '#1e3a8a', accent: '#60a5fa', background: '#eff6ff', text: '#1e3a8a',
      gradient: 'from-blue-700 via-indigo-700 to-blue-900',
      button: 'bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 hover:shadow-lg hover:shadow-blue-700/60',
      card: 'bg-blue-50/95 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-700/40', hover: 'hover:bg-blue-100' } },

  emerald2: { id: 'emerald2', name: 'Imperial Jade', icon: '💚', fonts: 'font-classy',
    colors: { primary: '#047857', secondary: '#065f46', accent: '#34d399', background: '#ecfdf5', text: '#064e3b',
      gradient: 'from-emerald-700 via-green-700 to-teal-700',
      button: 'bg-gradient-to-r from-emerald-700 via-green-700 to-teal-700 hover:shadow-lg hover:shadow-emerald-700/60',
      card: 'bg-emerald-50/95 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-700/40', hover: 'hover:bg-emerald-100' } },

  ruby2: { id: 'ruby2', name: 'Royal Ruby', icon: '❤️', fonts: 'font-classy',
    colors: { primary: '#9f1239', secondary: '#881337', accent: '#fb7185', background: '#fff1f2', text: '#881337',
      gradient: 'from-rose-800 via-red-800 to-rose-900',
      button: 'bg-gradient-to-r from-rose-800 via-red-800 to-rose-900 hover:shadow-lg hover:shadow-rose-800/60',
      card: 'bg-rose-50/95 backdrop-blur-lg border border-rose-200',
      border: 'border-rose-200', glow: 'shadow-rose-800/40', hover: 'hover:bg-rose-100' } },

  amethyst2: { id: 'amethyst2', name: 'Royal Amethyst', icon: '💜', fonts: 'font-classy',
    colors: { primary: '#6b21a8', secondary: '#581c87', accent: '#c084fc', background: '#faf5ff', text: '#4c1d95',
      gradient: 'from-purple-800 via-violet-800 to-fuchsia-800',
      button: 'bg-gradient-to-r from-purple-800 via-violet-800 to-fuchsia-800 hover:shadow-lg hover:shadow-purple-800/60',
      card: 'bg-purple-50/95 backdrop-blur-lg border border-purple-200',
      border: 'border-purple-200', glow: 'shadow-purple-800/40', hover: 'hover:bg-purple-100' } },

  champagne2: { id: 'champagne2', name: 'Champagne Gold', icon: '🥂', fonts: 'font-classy',
    colors: { primary: '#a16207', secondary: '#854d0e', accent: '#fde047', background: '#fffbeb', text: '#422006',
      gradient: 'from-yellow-300 via-amber-400 to-yellow-500',
      button: 'bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 hover:shadow-lg hover:shadow-yellow-400/50 text-gray-900',
      card: 'bg-yellow-50/95 backdrop-blur-lg border border-yellow-200',
      border: 'border-yellow-200', glow: 'shadow-yellow-400/40', hover: 'hover:bg-yellow-100' } },

  peacock2: { id: 'peacock2', name: 'Peacock Plume', icon: '🦚', fonts: 'font-classy',
    colors: { primary: '#0e7490', secondary: '#155e75', accent: '#a855f7', background: '#ecfeff', text: '#164e63',
      gradient: 'from-teal-600 via-cyan-600 to-purple-600',
      button: 'bg-gradient-to-r from-teal-600 via-cyan-600 to-purple-600 hover:shadow-lg hover:shadow-teal-600/60',
      card: 'bg-teal-50/95 backdrop-blur-lg border border-teal-200',
      border: 'border-teal-200', glow: 'shadow-teal-600/40', hover: 'hover:bg-teal-100' } },

  dragonBlood: { id: 'dragonBlood', name: 'Dragon Blood', icon: '🐲', fonts: 'font-brutal',
    colors: { primary: '#991b1b', secondary: '#7f1d1d', accent: '#fbbf24', background: '#0a0000', text: '#fecaca',
      gradient: 'from-red-900 via-rose-800 to-amber-600',
      button: 'bg-gradient-to-r from-red-900 via-rose-800 to-amber-600 hover:shadow-lg hover:shadow-red-900/60',
      card: 'bg-red-950/80 backdrop-blur-lg border border-red-700/50',
      border: 'border-red-700/50', glow: 'shadow-red-700/60', hover: 'hover:bg-red-950/60' } },

  liquidGold: { id: 'liquidGold', name: 'Liquid Gold', icon: '🌟', fonts: 'font-classy',
    colors: { primary: '#d4af37', secondary: '#b8860b', accent: '#fef3c7', background: '#1a1a1a', text: '#fef3c7',
      gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
      button: 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-700 hover:shadow-lg hover:shadow-yellow-400/60 text-gray-900',
      card: 'bg-neutral-900/90 backdrop-blur-lg border border-yellow-500/50',
      border: 'border-yellow-500/50', glow: 'shadow-yellow-500/60', hover: 'hover:bg-neutral-800' } },

  moonlight2: { id: 'moonlight2', name: 'Silver Moon', icon: '🌙', fonts: 'font-classy',
    colors: { primary: '#cbd5e1', secondary: '#94a3b8', accent: '#7dd3fc', background: '#0f172a', text: '#f1f5f9',
      gradient: 'from-slate-300 via-cyan-200 to-slate-500',
      button: 'bg-gradient-to-r from-slate-300 via-cyan-300 to-slate-500 hover:shadow-lg hover:shadow-slate-300/60 text-gray-900',
      card: 'bg-slate-900/85 backdrop-blur-lg border border-slate-500/40',
      border: 'border-slate-500/40', glow: 'shadow-slate-400/50', hover: 'hover:bg-slate-800' } },

  pearl2: { id: 'pearl2', name: 'Pearl White', icon: '🦪', fonts: 'font-classy',
    colors: { primary: '#78716c', secondary: '#57534e', accent: '#fce7f3', background: '#fafaf9', text: '#1c1917',
      gradient: 'from-stone-200 via-pink-100 to-stone-300',
      button: 'bg-gradient-to-r from-stone-200 via-pink-200 to-stone-300 hover:shadow-lg hover:shadow-pink-200/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-stone-200',
      border: 'border-stone-200', glow: 'shadow-stone-300/40', hover: 'hover:bg-stone-50' } },

  // ─── 🎨 PASTEL / SOFT (76-85) ──────────────────────────────
  blush: { id: 'blush', name: 'Blush', icon: '💗', fonts: 'font-round',
    colors: { primary: '#fda4af', secondary: '#fb7185', accent: '#fbcfe8', background: '#fff1f2', text: '#831843',
      gradient: 'from-rose-200 via-pink-200 to-fuchsia-200',
      button: 'bg-gradient-to-r from-rose-200 via-pink-200 to-fuchsia-200 hover:shadow-lg hover:shadow-rose-200/50 text-gray-900',
      card: 'bg-rose-50/95 backdrop-blur-lg border border-rose-100',
      border: 'border-rose-100', glow: 'shadow-rose-200/40', hover: 'hover:bg-rose-50' } },

  cloudNine: { id: 'cloudNine', name: 'Cloud Nine', icon: '☁️', fonts: 'font-round',
    colors: { primary: '#93c5fd', secondary: '#60a5fa', accent: '#ddd6fe', background: '#f8fafc', text: '#1e3a8a',
      gradient: 'from-blue-200 via-indigo-200 to-purple-200',
      button: 'bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 hover:shadow-lg hover:shadow-blue-200/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-blue-100',
      border: 'border-blue-100', glow: 'shadow-blue-200/40', hover: 'hover:bg-blue-50' } },

  pistachio: { id: 'pistachio', name: 'Pistachio', icon: '🍵', fonts: 'font-round',
    colors: { primary: '#84cc16', secondary: '#65a30d', accent: '#a3e635', background: '#f7fee7', text: '#365314',
      gradient: 'from-lime-200 via-green-200 to-emerald-200',
      button: 'bg-gradient-to-r from-lime-200 via-green-200 to-emerald-200 hover:shadow-lg hover:shadow-lime-200/50 text-gray-900',
      card: 'bg-lime-50/95 backdrop-blur-lg border border-lime-100',
      border: 'border-lime-100', glow: 'shadow-lime-200/40', hover: 'hover:bg-lime-50' } },

  cottonCandy2: { id: 'cottonCandy2', name: 'Cotton Candy', icon: '🍭', fonts: 'font-round',
    colors: { primary: '#f9a8d4', secondary: '#c4b5fd', accent: '#a5f3fc', background: '#fdf4ff', text: '#701a75',
      gradient: 'from-pink-200 via-purple-200 to-cyan-200',
      button: 'bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 hover:shadow-lg hover:shadow-pink-200/50 text-gray-900',
      card: 'bg-fuchsia-50/95 backdrop-blur-lg border border-fuchsia-100',
      border: 'border-fuchsia-100', glow: 'shadow-fuchsia-200/40', hover: 'hover:bg-fuchsia-50' } },

  iceCream: { id: 'iceCream', name: 'Ice Cream', icon: '🍦', fonts: 'font-round',
    colors: { primary: '#fda4af', secondary: '#a5f3fc', accent: '#fde68a', background: '#fffbeb', text: '#78350f',
      gradient: 'from-pink-200 via-cyan-200 to-yellow-200',
      button: 'bg-gradient-to-r from-pink-200 via-cyan-200 to-yellow-200 hover:shadow-lg hover:shadow-pink-200/50 text-gray-900',
      card: 'bg-white/95 backdrop-blur-lg border border-yellow-100',
      border: 'border-yellow-100', glow: 'shadow-yellow-200/40', hover: 'hover:bg-yellow-50' } },

  macaron: { id: 'macaron', name: 'Macaron', icon: '🍩', fonts: 'font-round',
    colors: { primary: '#f0abfc', secondary: '#f9a8d4', accent: '#a3e635', background: '#fdf4ff', text: '#701a75',
      gradient: 'from-fuchsia-200 via-pink-200 to-lime-200',
      button: 'bg-gradient-to-r from-fuchsia-200 via-pink-200 to-lime-200 hover:shadow-lg hover:shadow-fuchsia-200/50 text-gray-900',
      card: 'bg-fuchsia-50/95 backdrop-blur-lg border border-fuchsia-100',
      border: 'border-fuchsia-100', glow: 'shadow-fuchsia-200/40', hover: 'hover:bg-fuchsia-50' } },

  lavenderMist: { id: 'lavenderMist', name: 'Lavender Mist', icon: '💐', fonts: 'font-round',
    colors: { primary: '#c4b5fd', secondary: '#a78bfa', accent: '#ddd6fe', background: '#faf5ff', text: '#4c1d95',
      gradient: 'from-violet-200 via-purple-200 to-indigo-200',
      button: 'bg-gradient-to-r from-violet-200 via-purple-200 to-indigo-200 hover:shadow-lg hover:shadow-violet-200/50 text-gray-900',
      card: 'bg-violet-50/95 backdrop-blur-lg border border-violet-100',
      border: 'border-violet-100', glow: 'shadow-violet-200/40', hover: 'hover:bg-violet-50' } },

  seafoam2: { id: 'seafoam2', name: 'Pastel Sea', icon: '🐚', fonts: 'font-round',
    colors: { primary: '#5eead4', secondary: '#2dd4bf', accent: '#bae6fd', background: '#f0fdfa', text: '#134e4a',
      gradient: 'from-teal-200 via-cyan-200 to-sky-200',
      button: 'bg-gradient-to-r from-teal-200 via-cyan-200 to-sky-200 hover:shadow-lg hover:shadow-teal-200/50 text-gray-900',
      card: 'bg-teal-50/95 backdrop-blur-lg border border-teal-100',
      border: 'border-teal-100', glow: 'shadow-teal-200/40', hover: 'hover:bg-teal-50' } },

  peachFuzz: { id: 'peachFuzz', name: 'Peach Fuzz', icon: '🍑', fonts: 'font-round',
    colors: { primary: '#fdba74', secondary: '#fb923c', accent: '#fed7aa', background: '#fff7ed', text: '#7c2d12',
      gradient: 'from-orange-200 via-amber-200 to-rose-200',
      button: 'bg-gradient-to-r from-orange-200 via-amber-200 to-rose-200 hover:shadow-lg hover:shadow-orange-200/50 text-gray-900',
      card: 'bg-orange-50/95 backdrop-blur-lg border border-orange-100',
      border: 'border-orange-100', glow: 'shadow-orange-200/40', hover: 'hover:bg-orange-50' } },

  mintChoco: { id: 'mintChoco', name: 'Mint Chocolate', icon: '🍫', fonts: 'font-classy',
    colors: { primary: '#34d399', secondary: '#10b981', accent: '#78350f', background: '#ecfdf5', text: '#1c1917',
      gradient: 'from-emerald-300 via-teal-300 to-amber-800',
      button: 'bg-gradient-to-r from-emerald-300 via-teal-400 to-amber-700 hover:shadow-lg hover:shadow-emerald-300/50 text-gray-900',
      card: 'bg-emerald-50/90 backdrop-blur-lg border border-emerald-200',
      border: 'border-emerald-200', glow: 'shadow-emerald-300/40', hover: 'hover:bg-emerald-100' } },

  // ─── 🌍 CULTURAL / WORLD (86-100) ──────────────────────────
  moroccan2: { id: 'moroccan2', name: 'Marrakech', icon: '🕌', fonts: 'font-classy',
    colors: { primary: '#dc2626', secondary: '#b91c1c', accent: '#fbbf24', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-red-600 via-orange-500 to-amber-400',
      button: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 hover:shadow-lg hover:shadow-red-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-500/40', hover: 'hover:bg-amber-100' } },

  japaneseInk: { id: 'japaneseInk', name: 'Sumi-e', icon: '🖌️', fonts: 'font-classy',
    colors: { primary: '#1f2937', secondary: '#111827', accent: '#dc2626', background: '#fafaf9', text: '#1c1917',
      gradient: 'from-stone-700 via-stone-800 to-red-700',
      button: 'bg-gradient-to-r from-stone-700 via-stone-800 to-red-700 hover:shadow-lg hover:shadow-stone-700/60',
      card: 'bg-white/95 backdrop-blur-lg border border-stone-300',
      border: 'border-stone-300', glow: 'shadow-stone-400/40', hover: 'hover:bg-stone-100' } },

  indianSpice: { id: 'indianSpice', name: 'Masala', icon: '🌶️', fonts: 'font-classy',
    colors: { primary: '#ea580c', secondary: '#c2410c', accent: '#fbbf24', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-orange-600 via-amber-500 to-yellow-400',
      button: 'bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 hover:shadow-lg hover:shadow-orange-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/40', hover: 'hover:bg-amber-100' } },

  egyptianGold: { id: 'egyptianGold', name: 'Egyptian Gold', icon: '🏺', fonts: 'font-classy',
    colors: { primary: '#d4af37', secondary: '#b8860b', accent: '#0e7490', background: '#0a0a0a', text: '#fef3c7',
      gradient: 'from-yellow-500 via-amber-400 to-cyan-700',
      button: 'bg-gradient-to-r from-yellow-500 via-amber-500 to-cyan-700 hover:shadow-lg hover:shadow-yellow-500/60 text-gray-900',
      card: 'bg-black/95 backdrop-blur-lg border border-yellow-500/40',
      border: 'border-yellow-500/40', glow: 'shadow-yellow-500/60', hover: 'hover:bg-yellow-950/50' } },

  greekMarble: { id: 'greekMarble', name: 'Olympus', icon: '🏛️', fonts: 'font-classy',
    colors: { primary: '#1e40af', secondary: '#1e3a8a', accent: '#f8fafc', background: '#f8fafc', text: '#0f172a',
      gradient: 'from-blue-700 via-blue-600 to-slate-100',
      button: 'bg-gradient-to-r from-blue-700 via-blue-800 to-slate-700 hover:shadow-lg hover:shadow-blue-700/60',
      card: 'bg-white/95 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-700/40', hover: 'hover:bg-blue-50' } },

  tibetanMonk: { id: 'tibetanMonk', name: 'Tibet', icon: '🙏', fonts: 'font-classy',
    colors: { primary: '#b91c1c', secondary: '#991b1b', accent: '#fbbf24', background: '#fef3c7', text: '#7c2d12',
      gradient: 'from-red-700 via-orange-600 to-amber-400',
      button: 'bg-gradient-to-r from-red-700 via-orange-600 to-amber-400 hover:shadow-lg hover:shadow-red-700/60',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-orange-300',
      border: 'border-orange-300', glow: 'shadow-orange-500/40', hover: 'hover:bg-amber-100' } },

  nordic2: { id: 'nordic2', name: 'Viking', icon: '⚔️', fonts: 'font-brutal',
    colors: { primary: '#0e7490', secondary: '#155e75', accent: '#dc2626', background: '#0f172a', text: '#e0f2fe',
      gradient: 'from-cyan-700 via-slate-700 to-red-700',
      button: 'bg-gradient-to-r from-cyan-700 via-slate-700 to-red-700 hover:shadow-lg hover:shadow-cyan-700/60',
      card: 'bg-slate-900/85 backdrop-blur-lg border border-cyan-600/40',
      border: 'border-cyan-600/40', glow: 'shadow-cyan-600/50', hover: 'hover:bg-slate-800' } },

  celtic: { id: 'celtic', name: 'Celtic', icon: '🍀', fonts: 'font-classy',
    colors: { primary: '#15803d', secondary: '#166534', accent: '#a16207', background: '#f7fee7', text: '#14532d',
      gradient: 'from-green-700 via-emerald-700 to-amber-700',
      button: 'bg-gradient-to-r from-green-700 via-emerald-700 to-amber-700 hover:shadow-lg hover:shadow-green-700/60',
      card: 'bg-green-50/90 backdrop-blur-lg border border-green-300',
      border: 'border-green-300', glow: 'shadow-green-700/40', hover: 'hover:bg-green-100' } },

  mexicanFiesta: { id: 'mexicanFiesta', name: 'Fiesta', icon: '🌮', fonts: 'font-round',
    colors: { primary: '#dc2626', secondary: '#ea580c', accent: '#22c55e', background: '#fffbeb', text: '#7c2d12',
      gradient: 'from-red-500 via-yellow-400 to-green-500',
      button: 'bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-yellow-50/95 backdrop-blur-lg border border-red-200',
      border: 'border-red-200', glow: 'shadow-red-500/40', hover: 'hover:bg-yellow-100' } },

  brazilian: { id: 'brazilian', name: 'Rio', icon: '🦜', fonts: 'font-round',
    colors: { primary: '#16a34a', secondary: '#15803d', accent: '#fbbf24', background: '#fefce8', text: '#14532d',
      gradient: 'from-green-500 via-yellow-400 to-blue-600',
      button: 'bg-gradient-to-r from-green-500 via-yellow-400 to-blue-600 hover:shadow-lg hover:shadow-green-500/50',
      card: 'bg-green-50/95 backdrop-blur-lg border border-green-200',
      border: 'border-green-200', glow: 'shadow-green-500/40', hover: 'hover:bg-green-100' } },

  parisNoir: { id: 'parisNoir', name: 'Paris Noir', icon: '🗼', fonts: 'font-classy',
    colors: { primary: '#dc2626', secondary: '#991b1b', accent: '#f8fafc', background: '#0a0a0a', text: '#f8fafc',
      gradient: 'from-red-700 via-rose-800 to-black',
      button: 'bg-gradient-to-r from-red-700 via-rose-800 to-black hover:shadow-lg hover:shadow-red-700/60',
      card: 'bg-black/95 backdrop-blur-lg border border-red-800/40',
      border: 'border-red-800/40', glow: 'shadow-red-700/50', hover: 'hover:bg-red-950/40' } },

  veniceGold: { id: 'veniceGold', name: 'Venetian', icon: '🛶', fonts: 'font-classy',
    colors: { primary: '#0891b2', secondary: '#0e7490', accent: '#d4af37', background: '#ecfeff', text: '#164e63',
      gradient: 'from-teal-500 via-cyan-500 to-yellow-500',
      button: 'bg-gradient-to-r from-teal-500 via-cyan-500 to-yellow-500 hover:shadow-lg hover:shadow-teal-500/50',
      card: 'bg-cyan-50/90 backdrop-blur-lg border border-cyan-200',
      border: 'border-cyan-200', glow: 'shadow-cyan-500/40', hover: 'hover:bg-cyan-100' } },

  russianWinter: { id: 'russianWinter', name: 'Winter Palace', icon: '🏰', fonts: 'font-classy',
    colors: { primary: '#1e40af', secondary: '#1e3a8a', accent: '#f8fafc', background: '#f8fafc', text: '#1e3a8a',
      gradient: 'from-blue-800 via-blue-700 to-slate-200',
      button: 'bg-gradient-to-r from-blue-800 via-blue-700 to-slate-600 hover:shadow-lg hover:shadow-blue-800/60',
      card: 'bg-white/95 backdrop-blur-lg border border-blue-200',
      border: 'border-blue-200', glow: 'shadow-blue-800/40', hover: 'hover:bg-blue-50' } },

  cubanRhythm: { id: 'cubanRhythm', name: 'Havana', icon: '🚬', fonts: 'font-classy',
    colors: { primary: '#b45309', secondary: '#92400e', accent: '#16a34a', background: '#fef3c7', text: '#451a03',
      gradient: 'from-amber-600 via-orange-500 to-green-600',
      button: 'bg-gradient-to-r from-amber-600 via-orange-500 to-green-600 hover:shadow-lg hover:shadow-amber-600/50',
      card: 'bg-amber-50/90 backdrop-blur-lg border border-amber-300',
      border: 'border-amber-300', glow: 'shadow-amber-500/40', hover: 'hover:bg-amber-100' } },

  swissMinimal: { id: 'swissMinimal', name: 'Swiss Minimal', icon: '🧊', fonts: 'font-modern',
    colors: { primary: '#0a0a0a', secondary: '#171717', accent: '#dc2626', background: '#fafafa', text: '#0a0a0a',
      gradient: 'from-neutral-900 via-neutral-800 to-red-600',
      button: 'bg-gradient-to-r from-neutral-900 via-neutral-800 to-red-600 hover:shadow-lg hover:shadow-neutral-800/60',
      card: 'bg-white/95 backdrop-blur-lg border border-neutral-200',
      border: 'border-neutral-200', glow: 'shadow-neutral-400/40', hover: 'hover:bg-neutral-50' } },

  dutchTulip: { id: 'dutchTulip', name: 'Dutch Tulip', icon: '🌷', fonts: 'font-round',
    colors: { primary: '#dc2626', secondary: '#f97316', accent: '#16a34a', background: '#fefce8', text: '#7c2d12',
      gradient: 'from-red-500 via-orange-400 to-yellow-400',
      button: 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 hover:shadow-lg hover:shadow-red-500/50',
      card: 'bg-yellow-50/95 backdrop-blur-lg border border-red-200',
      border: 'border-red-200', glow: 'shadow-red-500/40', hover: 'hover:bg-yellow-100' } },
};


export const DEFAULT_THEME = 'ocean';

// ✅ Helper: Theme list as array (optional)
export const THEME_LIST = Object.values(THEMES);