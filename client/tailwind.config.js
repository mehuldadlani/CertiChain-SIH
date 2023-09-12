module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        signUpBg: "#f2f2f2",
        inputBg:"#D9D9D9",
        formBg:"#DCDCDC",
        mainBg:"#F6F6F6",
        loginBg:"#5FC656",
        homeBg:"#638B31",
        issueBg:"#BDBDBD",
        walletBg:"#588125"
      },
      backgroundImage: {
        signInGradient:
          "linear-gradient(90deg, #F250DA 4.03%, #874DEA 23.61%, #A84EE6 96.13%)",
      },
      boxShadow: {
        xs: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
