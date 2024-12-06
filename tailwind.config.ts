/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			colors: {
				'background': '#000000',
				'foreground': '#FFFFFF',
				'trait-bg': '#0E2575',
				'contact-bg': '#4164dd',
				'bpStart': '#10A8EA',
				'bpEnd': '#B21BF9',
				"purpleBtn": "#7201E6",
				'bStart': '#80EBF2',
				'bEnd': '#10A8EA',
				'pStart': '#8316F0',
				'pEnd': '#4B0D8A',
				'navbar': 'rgb(0 0 0 / 55%)',
				'menu-option': '#10A8EA',
				'tbHeader': '#A564E814',
				'tbSelected': '#F6F6F6',
				'greyBg': '#202628',
				'serviceBg': '#7C90C9',
				'bg-personalReading-start': '#2EC295',
				'bg-personalReading-end': '#A5EADF',
				'bg-interLife-start': '#93D6FD',
				'bg-interLife-end': '#469EE6',
				'bg-psychicReading-start': '#EDA4BC',
				'bg-psychicReading-end': '#FB85A6',
				'bg-interYear-start': '#FFB52A',
				'bg-interYear-end': '#FFE580',
				border: 'hsl(var(--border))',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'custom': '0.625rem',
				'custom-lg': '1.875rem',
			},
			boxShadow: {
				'button': '0 4px 4px rgba(0, 0, 0, 0.25)', 
				'card': '0 16px 32px -8px rgba(12, 12, 13, 0.4)',
      }

  	}
  },
	plugins: [require("tailwindcss-animate")],
	variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
};
