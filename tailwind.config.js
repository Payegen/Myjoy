/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'title': '#f6f6f6',
      'layout': '#ededed'
    }),
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 去掉 tailwindcss 的基础样式设置
  },
  important: true,   // 给 tailwindcss 的样式加上最高优先级
}

