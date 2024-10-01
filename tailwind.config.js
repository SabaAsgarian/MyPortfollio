/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: "linear-gradient(90deg, rgba(41,154,214,1) 17%, rgba(250,121,7,1) 48%, rgba(242,230,20,1) 79%)",
      },
      fontFamily:{
        lor:'lor',
        hr:'hr',
        hb:'hb',
        pr:'pr',
        sr:'sr'
      },
      backgroundImage: {
        'cool': "url('./components/img/cool.jpg')",
       
     
      },
    },
  },
  plugins: [],
};
