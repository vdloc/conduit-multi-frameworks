module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': 'npm run \"lint\"',
  'src/**/*.{js,jsx,ts,tsx,css,scss,md}': 'prettier --write --ignore-unknown',
};
