// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//
// /** @type {import('tailwindcss').Config} */...
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit', // Sử dụng chế độ Just-in-Time Compilation (JIT) để tối ưu hóa và tăng tốc độ biên dịch
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Xóa bỏ CSS không sử dụng trong production
  darkMode: false, // Tắt chế độ Dark Mode
  theme: {
    extend: {},
  },
  plugins: [],
}