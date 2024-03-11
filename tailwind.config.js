/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				system: '#C91B12',
				primary: '#67C1C7',
				secondary: '#FF9666',
				gray_10: '#F8F8FA',
				gray_20: '#F5F5F5',
				gray_30: '#EEEEEE',
				gray_40: '#DEDEDE',
				gray_50: '#979797',
				gray_60: '#666666',
				gray_70: '#555555',
				gray_80: '#333333',
				gray_90: '#222222',
				gray_100: '#1F1F1F',
			},
			gridTemplateColumns: {
				'auto-fill-pet': 'repeat(auto-fill, 236px)',
			},
		},
	},
	plugins: [],
};
