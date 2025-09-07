import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{tsx,jsx}', // site1 source
    '../ui/src/**/*.{tsx,jsx}' // ui source for Button classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});