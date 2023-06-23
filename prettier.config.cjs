/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  quoteProps: 'consistent',
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'), //
  ],
}
