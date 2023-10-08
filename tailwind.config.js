/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
    apple: [
      " SF Pro Display,SF Pro Icons,AOS Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
    ],
   },
  backgroundColor:{
    griBg:[
      "#5B5247"
    ]
  },
  colors:{
    grey:[
      "#595959"
    ],
    borderGray:[
      "rgb(186, 186, 186);"
    ],
    bgGray:[
      "rgb(242, 242, 242);"
    ],
    footerBG:[
      "rgb(139, 139, 139);"
    ]
  },
  boxShadow:{
    '3xl' : '-9px 10px 15px #b3b3b3 '
  }

    }, 


  },
  plugins: [],
}

