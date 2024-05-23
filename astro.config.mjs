import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://erikshafer.github.io',
	base: '/event-sourcing-ecommerce-docs',
	trailingSlash: 'never',
	integrations: [
		starlight({
			title: 'Event Sourcery',
			social: {
				github: 'https://github.com/erikshafer/event-sourcing-ecommerce',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
