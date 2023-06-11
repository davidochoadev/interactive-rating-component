/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			orange: 'hsl(25, 97%, 53%)',
			white: 'hsl(0, 0%, 100%)',
			lightGray: 'hsl(217, 12%, 63%)',
			mediumGray: 'hsl(216, 12%, 54%)',
			darkBlue: 'hsl(213, 19%, 18%)',
			veryDarkBlue: 'hsl(216, 12%, 8%)'
		 },
	},
	plugins: [],
}
