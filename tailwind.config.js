// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
         sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],

        // ✅ 10 NEW
        display: ['Space Grotesk', 'sans-serif'],         // Bold headlines
        round: ['Quicksand', 'sans-serif'],               // Playful, rounded
        classy: ['Cormorant Garamond', 'serif'],          // Elegant, editorial
        brutal: ['Bebas Neue', 'sans-serif'],             // Big impact
        modern: ['Outfit', 'sans-serif'],                 // Clean, geometric
        tech: ['Bricolage Grotesque', 'sans-serif'],      // Modern editorial
        readable: ['Lora', 'Georgia', 'serif'],           // Warm serif

        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        round: ['Quicksand', 'system-ui', 'sans-serif'],
        classy: ['Cormorant Garamond', 'Georgia', 'serif'],
        brutal: ['Bebas Neue', 'Impact', 'sans-serif'],
        modern: ['Outfit', 'system-ui', 'sans-serif'],
        tech: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        readable: ['Lora', 'Georgia', 'serif'],

        // ✅ 15 NEW FONTS
        clean: ['DM Sans', 'system-ui', 'sans-serif'],
        editorial: ['Fraunces', 'Georgia', 'serif'],
        code: ['IBM Plex Mono', 'Menlo', 'monospace'],
        friendly: ['Rubik', 'system-ui', 'sans-serif'],
        terminal: ['Fira Code', 'Menlo', 'monospace'],
        corporate: ['Work Sans', 'system-ui', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
        hindi: ['Kalam', 'cursive'],
        futuristic: ['Orbitron', 'sans-serif'],
        playful: ['Indie Flower', 'cursive'],
        pixel: ['Press Start 2P', 'monospace'],
        heavy: ['Archivo Black', 'sans-serif'],
        poster: ['Anton', 'sans-serif'],
        magazine: ['Merriweather', 'Georgia', 'serif'],

        
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out infinite 1.5s',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}