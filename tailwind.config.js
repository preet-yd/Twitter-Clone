/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutral-50': '#f9f9f9',
        'neutral-200': '#e4e4e4',
        'blue-250' : '#1d9bf03d',
        'twitter-blue' : '#1D9BF0',
        'twitter-blue-hover' : '#1871CA',
        'search-bar-fill' : '#212327',
        'card-component' : '#000',
        'card-component-bg' : '#40596A',
        'step-1-text-color' : 'rgba(255, 255, 255, 0.60)',


     },
      fontFamily:{
        "inter" : "Inter",
        "georgia" : "georgia"
      },
      boxShadow:{
        "08160" : "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
      },
      spacing:{
        '136' : '30rem',
      },
      height: {
        '39px': '39px',
        '355px': '355px',
        '143px': '143px',
        '1px': '1px',
        'login-page-icon': '9.07738rem',
        'login-page-100': '12.4375rem',
        '1.12663rem': '1.12663rem',
        '0.81819rem': '0.81819rem',
        '68px': '68px',

      },
      width: {
        '334': '20.875rem',
        '442': '27.625rem',
        '596px': '596px',
        '426px': '426px',
        '434px': '434px',
        '348px': '348px',
        '360px': '360px',
        '512px': '512px',
        '482px': '482px',
        '598px': '598px',
        'login-page-icon': '8.50806rem',
        'login-page-100': '28.4375rem',
        '172px': '172px',
        '24.375rem': '24.375rem',
        '2.56013rem': '2.56013rem',
        '0.76688rem': '0.76688rem',
        '68px': '68px',
      },
      fontSize: {
        '15px':'15px'
      },
      gap: {
        '2.5': '0.625rem',
        '4.5': '15px',
      },
      borderRadius: {
        '4xl': '4rem',
        '3.5xl': '1.875rem',
        '30px': '30px',
      },
      padding: {
        '15px': '15px',
        '18px': '18px',
        '93px': '93px',
        '20,80,0,80': '20px 80px 0px 80px',
        'search-padding': '10px 247px 10px 16px',
        'search-svg-padding': '1.583px 1.782px 1.781px 1.583px',
        'card-component-1': '0.625rem 0.9375rem',
        'card-component-signup-1': '12px 16px',
        'card-component-signup-2': '80px 20px 20px 20px',
        'tweet-component-frame': '8px 16px',
        'login-page': '14.78125rem 10.121rem',
        'login-page-step-1': '0px 15px 20px 15px',
        'create-acc-login-page-step-1': '80px 20px 0px 20px',
      },
    },
  },
  plugins: [],
}

