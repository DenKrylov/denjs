import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "var(--text-primary)",
				secondary: "var(--text-secondary)",
				tertiary: "var(--text-tertiary)",
			},
			backgroundColor: {
				primary: "var(--bg-primary)",
				secondary: "var(--bg-secondary)",
				tertiary: "var(--bg-tertiary)",
				acitve: "var(--bg-active)"
			},
			maxWidth: {
				header: "1400px",
			},
			boxShadow: {
				header: "inset 0 -1px 0 0 var(--accents-2)",
			},
			borderColor: {
				secondary: "var(--border-primary)",
			}
		},
	},
	plugins: [],
};
export default config;