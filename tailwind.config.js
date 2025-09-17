/*
 * File per la configurazione base di Tailwind
 * Definisce le variabili di colore, la dimensione degli schermi e le famiglie di font.
 * Permette di definire una sorta di "tema" per il progetto.
 */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['**/*.{html, js}', '**/**/*.{html, js}', './index.html', './src/reset.css'],
	theme: {
		screens: {
			xs: '361px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				// Testo Base: Off-Black
				'text-base': '#353535',
				// Colore di accento primario: Acid Candy
				'primary-color': '#a2bc39',
				'primary-color-light-100': '#f8faef',
				'primary-color-light-300': '#e7efca',
				'primary-color-light-500': '#d7e3a4',
				'primary-color-light-700': '#c6d87f',
				'primary-color-dark-100': '#81962e',
				'primary-color-dark-300': '#617122',
				'primary-color-dark-500': '#414b17',
				'primary-color-dark-700': '#20260b',
				// Colore di accento secondario: Coffee Bean
				'secondary-color': '#846561',
				'secondary-color-light-100': '#efeaea',
				'secondary-color-light-300': '#dbcfce',
				'secondary-color-light-500': '#c6b4b1',
				'secondary-color-light-700': '#b19895',
				'secondary-color-dark-100': '#684f4c',
				'secondary-color-dark-300': '#4b3a37',
				'secondary-color-dark-500': '#2f2423',
				'secondary-color-dark-700': '#130e0e',
				// Scala di grigi: Grey Nickel
				'grey-nickel': '#c0c0c0',
				'grey-nickel-light-100': '#f5f5f5',
				'grey-nickel-light-300': '#dcdcdc',
				'grey-nickel-light-500': '#c4c4c4',
				'grey-nickel-light-700': '#ababab',
				'grey-nickel-dark-100': '#7a7a7a',
				'grey-nickel-dark-300': '#494949',
				'grey-nickel-dark-500': '#313131',
				'grey-nickel-dark-700': '#181818',
			},
			fontFamily: {
				primary: ['Graphik-Semibold', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
