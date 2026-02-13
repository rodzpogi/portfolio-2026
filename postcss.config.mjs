/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {}, // Added the '@tailwindcss/' prefix
    autoprefixer: {},
  },
};

export default config;