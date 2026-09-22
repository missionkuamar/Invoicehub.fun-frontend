// src/themes/ThemeProvider.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { THEMES, DEFAULT_THEME } from './themeConfig';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// ✅ Saare possible font classes — jab theme change ho to purane hatane ke liye
const ALL_FONT_CLASSES = [
  'font-sans',
  'font-serif',
  'font-mono',
  'font-display',
  'font-round',
  'font-classy',
  'font-brutal',
  'font-modern',
  'font-tech',
  'font-readable',
  'font-sans', 'font-serif', 'font-mono', 'font-display', 'font-round',
  'font-classy', 'font-brutal', 'font-modern', 'font-tech', 'font-readable',
  
  // ✅ NEW
  'font-clean', 'font-editorial', 'font-code', 'font-friendly',
  'font-terminal', 'font-corporate', 'font-handwritten', 'font-hindi',
  'font-futuristic', 'font-playful', 'font-pixel', 'font-heavy',
  'font-poster', 'font-magazine',
];

// ✅ Purane theme classes — theme change pe remove karne ke liye
const ALL_THEME_CLASSES_PREFIX = 'theme-';

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('invoicehub-theme');
    return saved && THEMES[saved] ? saved : DEFAULT_THEME;
  });

  const theme = THEMES[currentTheme];

  // ✅ Theme apply function — reusable
  const applyTheme = useCallback((themeId) => {
    const activeTheme = THEMES[themeId] || THEMES[DEFAULT_THEME];
    if (!activeTheme) return;

    const root = document.documentElement;
    const body = document.body;
    const colors = activeTheme.colors;

    // ============================================================
    // 1. CSS VARIABLES SET KARO (theme colors)
    // ============================================================
    Object.entries(colors).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--theme-${key}`, value);
      }
    });

    // ============================================================
    // 2. FONT CLASSES — purane hatao, naya lagao
    // ============================================================
    ALL_FONT_CLASSES.forEach((cls) => {
      body.classList.remove(cls);
      root.classList.remove(cls);
    });

    if (activeTheme.fonts) {
      // Multiple classes ho sakti hain (e.g., 'font-serif text-lg')
      activeTheme.fonts.split(' ').forEach((cls) => {
        if (cls.trim()) body.classList.add(cls.trim());
      });
    }

    // ============================================================
    // 3. THEME-SPECIFIC CLASSES — purane hatao
    // ============================================================
    Array.from(body.classList).forEach((cls) => {
      if (cls.startsWith(ALL_THEME_CLASSES_PREFIX)) {
        body.classList.remove(cls);
      }
    });

    // Naya theme class add karo (e.g., 'theme-dark', 'theme-ocean')
    body.classList.add(`${ALL_THEME_CLASSES_PREFIX}${themeId}`);

    // ============================================================
    // 4. BACKGROUND & TEXT COLOR
    // ============================================================
    body.style.backgroundColor = colors.background;
    body.style.color = colors.text;

    // ============================================================
    // 5. DATA ATTRIBUTE (CSS selectors ke liye)
    // ============================================================
    root.setAttribute('data-theme', themeId);
    root.setAttribute('data-theme-name', activeTheme.name);

    // ============================================================
    // 6. DARK MODE DETECTION (agar theme dark hai to)
    // ============================================================
    // Dark themes ki list (dark backgrounds wale)
    const darkThemes = [
      'dark', 'cyber', 'neon', 'galaxy', 'midnightSun', 'deepSea',
      'tokyoNight', 'matrix', 'amethyst', 'mystic', 'electric', 'volcano',
      'dragon', 'ufo', 'retro', 'midnight', 'obsidian', 'phantom',
      'lava', 'gold', 'chocolate', 'theater', 'royalty', 'mahogany',
      'espresso', 'crimson', 'titanium', 'pine', 'rainforest', 'jungle',
      'halloween', 'newYear', 'carbonFiber', 'steampunk', 'vaporwave',
      'laser', 'aurora', 'hologram', 'quantum', 'neural', 'plasma', 'chrome',
    ];

    const isDark = darkThemes.includes(themeId);
    if (isDark) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    // ============================================================
    // 7. FONT SMOOTHING (better rendering)
    // ============================================================
    body.style.webkitFontSmoothing = 'antialiased';
    body.style.mozOsxFontSmoothing = 'grayscale';

  }, []);

  // ============================================================
  // THEME CHANGE EFFECT
  // ============================================================
  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('invoicehub-theme', currentTheme);

    // Apply theme
    applyTheme(currentTheme);

  }, [currentTheme, applyTheme]);

  // ============================================================
  // INITIAL LOAD — pehli baar pe bhi apply karo
  // ============================================================
  useEffect(() => {
    applyTheme(currentTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Sirf mount pe ek baar

  const changeTheme = (themeId) => {
    if (THEMES[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  // ✅ Theme cycle karne ke liye (next theme)
  const nextTheme = () => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setCurrentTheme(themeKeys[nextIndex]);
  };

  // ✅ Random theme
  const randomTheme = () => {
    const themeKeys = Object.keys(THEMES).filter((k) => k !== currentTheme);
    const randomIndex = Math.floor(Math.random() * themeKeys.length);
    setCurrentTheme(themeKeys[randomIndex]);
  };

  // ✅ Reset to default
  const resetTheme = () => {
    setCurrentTheme(DEFAULT_THEME);
  };

  // ✅ Theme list as array (sidebar dropdown ke liye)
  const themeList = Object.values(THEMES);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme,
        changeTheme,
        nextTheme,
        randomTheme,
        resetTheme,
        themes: THEMES,
        themeList,
        // ✅ Convenience helpers
        isDark: document.documentElement.classList.contains('dark'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;