// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-nested': {}, // Optional
    'postcss-preset-env': {
      stage: 1,
      features: {
        'custom-properties': true,
      },
    },
  },
};
