/* eslint-disable no-undef */
// Tailwind CSS v3 Configuration - Tailkit
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				primary: '#0E0F10',
				secondary: '#181A1D',
				ascend: '#EB4F2D',
				ascendSecondary: '#007CFA',
				themeText: '#828282',
				themeTextSecondary: '#4F4F4F'
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				opensans: ['Open Sans', 'sans-serif'],
				Monse: ['MontserratAlt1', 'sans-serif'],
				gotham: ['GothamRndSSm-Book', 'sans-serif'],
				gothamBold: ['GothamRndSSm-Bold', 'sans-serif'],
				gothamBook: ['GothamRndSSm-Book', 'sans-serif'],
				gothamBookitalic: ['GothamRndSSm-Bookitalic', 'sans-serif'],
				gothamMedium: ['GothamRndSSm-Medium', 'sans-serif'],
				gothamMediumitalic: ['GothamRndSSm-Mediumitalic', 'sans-serif'],
				gothamLight: ['GothamRndSSm-Light', 'sans-serif'],
				gothamLightitalic: ['GothamRndSSm-Lightitalic', 'sans-serif']
			},
			maxWidth: {
				'8xl': '90rem',
				'9xl': '105rem',
				'10xl': '120rem'
			},
			zIndex: {
				1: 1,
				60: 60,
				70: 70,
				80: 80,
				90: 90,
				100: 100
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							textDecoration: 'none',
							'&:hover': {
								opacity: '.75'
							}
						},
						img: {
							borderRadius: defaultTheme.borderRadius.lg
						}
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('vidstack/tailwind.cjs'),
		plugin(function ({ addUtilities }) {
			const utilBgPatterns = {
				'.pattern-dots-sm': {
					'background-image': 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
					'background-size': 'calc(10 * 0.5px) calc(10 * 0.5px)'
				},
				'.pattern-dots-md': {
					'background-image': 'radial-gradient(currentColor 1px, transparent 1px)',
					'background-size': 'calc(10 * 1px) calc(10 * 1px)'
				},
				'.pattern-dots-lg': {
					'background-image': 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
					'background-size': 'calc(10 * 1.5px) calc(10 * 1.5px)'
				},
				'.pattern-dots-xl': {
					'background-image': 'radial-gradient(currentColor 2px, transparent 2px)',
					'background-size': 'calc(10 * 2px) calc(10 * 2px)'
				}
			};

			addUtilities(utilBgPatterns);
		}),
		plugin(function ({ addUtilities }) {
			const utilFormSwitch = {
				'.form-switch': {
					border: 'transparent',
					'background-color': colors.gray[300],
					'background-image':
						"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
					'background-position': 'left center',
					'background-repeat': 'no-repeat',
					'background-size': 'contain !important',
					'vertical-align': 'top',
					'&:checked': {
						border: 'transparent',
						'background-color': 'currentColor',
						'background-image':
							"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
						'background-position': 'right center'
					},
					'&:disabled, &:disabled + label': {
						opacity: '.5',
						cursor: 'not-allowed'
					}
				}
			};

			addUtilities(utilFormSwitch);
		})
	]
};
