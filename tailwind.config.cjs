/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app.html', './content/**', './src/**/*.{svelte,js,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			scale: {
				25: '.25'
			},
			backgroundImage: {
				'hero-bg': "url('/icons/blob-desktop.svg')"
			}
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
