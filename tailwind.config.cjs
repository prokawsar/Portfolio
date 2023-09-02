/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: []
};
