/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		darkMode: 'class',
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
	plugins: []
}
