import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	vite: {
		ssr: {
			noExternal: [
				"gsap",
				"gsap/ScrollTrigger",
				"gsap/DrawSVGPlugin",
				"gsap/SplitText",
				"gsap/MorphSVGPlugin",
				"gsap/ScrollToPlugin",
				"gsap/MotionPathPlugin",
			],
		},
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	site: "https://tokilabs.io",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	shikiConfig: {
		wrap: true,
		skipInline: false,
		drafts: true,
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		icon(),
	],
});
