import { join } from "path";
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { custom_theme } from "./src/custom_theme";

export default {
	darkMode: "class",
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/svelte-ux/**/*.{svelte,js}",
		"./node_modules/layerchart/**/*.{svelte,js}",
		join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [custom_theme]
			}
		})
	]
} satisfies Config;
