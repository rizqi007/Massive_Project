/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#16A34A",
                oranye: "#FD7938",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
