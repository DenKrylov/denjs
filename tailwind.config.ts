import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				primary: "var(--text-primary)",
				secondary: "var(--text-secondary)",
				tertiary: "var(--text-tertiary)",
				accent: "var(--text-accent)",
			},
			backgroundColor: {
				primary: "var(--bg-primary)",
				secondary: "var(--bg-secondary)",
				tertiary: "var(--bg-tertiary)",
				acitve: "var(--bg-active)",
				accent: "var(--accents-1)",
				buttonPrimary: "var(--accents-1)",
				buttonPrimaryHover: "var(--border-primary)",
				buttonAccentPrimary: "var(--bg-tertiary)",
				buttonAccentPrimaryHover: "var(--accents-6)",
				transparent: "var(--bg-header)",
			},
			backgroundImage: {
				servicesSectionShadow: "linear-gradient(180deg, var(--bg-primary) 30%, var(--accents-1) 50%, var(--accents-1) 100%)",
				schemeSectionShadow: "radial-gradient(50% 50% at 50% 50%,#121212 0,var(--bg-primary) 100%)",
				clientBG: "linear-gradient(180deg, #232323, #222), linear-gradient(180deg, hsla(0, 0%, 100%, .05), hsla(0, 0%, 100%, .05) 26.56%, rgba(0, 0, 0, .05) 51.56%, rgba(0, 0, 0, .05));",
				shemeCardBorder: "conic-gradient(from 180deg at 50% 50%, var(--accents-2) 0deg, var(--accents-2) 176deg, #61dafb 193deg, var(--accents-2) 217deg, var(--accents-2) 1turn);",
				shemeCardBG: "linear-gradient(180deg, #242424, #121212 65.62%);",
				projectsSectionShadow: "linear-gradient(to bottom, transparent, var(--bg-primary) 70%)",
			},
			placeholderColor: {
				secondary: "var(--text-secondary)",
			},
			maxWidth: {
				header: "1400px",
			},
			boxShadow: {
				header: "inset 0 -1px 0 0 var(--accents-2)",
			},
			borderColor: {
				primary: "var(--accents-2)",
				shadowSmall: "0 0 0 1px var(--accents-2)"
			},
			stroke: {
				primary: "var(--text-primary)",
			}
		},
	},
	plugins: [],
};
export default config;
