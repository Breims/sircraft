/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        HelveticaHairline: ["HelveticaNowDisplay-hairline", "sans-serif"],
        HelveticaExtLt: ["HelveticaNowDisplay-extlt", "sans-serif"],
        HelveticaThin: ["HelveticaNowDisplay-thin", "sans-serif"],
        HelveticaRegular: ["HelveticaNowDisplay-regular", "sans-serif"],
        HelveticaMedium: ["HelveticaNowDisplay-medium", "sans-serif"],
        HelveticaBold: ["HelveticaNowDisplay-bold", "sans-serif"],
        HelveticaBlack: ["HelveticaNowDisplay-black", "sans-serif"],
        Titillium: ["Titilium", "sans-serif"]
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}