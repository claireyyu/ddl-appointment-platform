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
				'contact-bg': '#4164dd',
				'bpStart': '#10A8EA',
				'bpEnd': '#B21BF9',
				'bStart': '#80EBF2',
				'bEnd': '#10A8EA',
				'pStart': '#8316F0',
				'pEnd': '#4B0D8A',
				'navbar': 'rgb(0 0 0 / 55%)',
				'menu-option': '#10A8EA',
				'tbHeader': '#A564E814',
				'tbSelected': '#F6F6F6',
				'greyBg': '#202628',
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
