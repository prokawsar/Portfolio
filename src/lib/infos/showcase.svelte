<script lang="ts">
	import ShowcaseCard from '$lib/components/ShowcaseCard.svelte'

	const projects = [
		{
			title: 'ARK-Gallery',
			description: 'An image gallery app for cross plaform',
			// live: 'https://github.com/ARK-Builders/ARK-Gallery',
			url: 'https://github.com/ARK-Builders/ARK-Gallery',
			techs: 'Svelte, SvelteKit, TypeScript, Tailwind, Shadcn, Tauri'
		},
		{
			title: 'Portfolio',
			description: 'Personal Portfolio site. Self design and functionality concept',
			live: 'https://portfolio-prokawsar.vercel.app/',
			url: 'https://github.com/prokawsar/portfolio',
			techs: 'Svelte, SvelteKit, TypeScript, Tailwind'
		},
		{
			title: 'kinde-sveltekit-sdk',
			description: 'Kinde open-source auth system for SvelteKit',
			url: 'https://github.com/kinde-oss/kinde-sveltekit-sdk',
			techs: 'Svelte, SvelteKit, TypeScript'
		},

		{
			title: 'CSMiddler',
			description: 'A buy and sell CS2 skins site. Worked as Frontend developer',
			live: 'https://www.csmiddler.com/EN',
			techs: 'Svelte, SvelteKit, TypeScript, Tailwind'
		},
		{
			title: 'NorthernIrelandJobs',
			description: 'A jobs portal site. Worked as Frontend developer',
			live: 'https://northern-ireland-jobs.co.uk/',
			techs: 'Svelte, JavaScript, AWS Amplify'
		},
		{
			title: 'Petsafe',
			description: 'A Korean site about Petsafe',
			live: 'https://hyeon-petsafe.vercel.app/',
			url: 'https://github.com/prokawsar/hyeon',
			techs: 'Svelte, SvelteKit, TypeScript, Tailwind'
		}
	]
</script>

<div class="flex flex-col max-w-6xl w-full h-full">
	<h1
		class="text-2xl text-center mb-5 font-bold font-roboto uppercase tracking-widest dark:text-slate-300"
	>
		Project Showcase
	</h1>

	<div class="grid grid-cols-3 gap-2 w-full">
		{#each projects as project}
			<ShowcaseCard {project} />
		{/each}
	</div>
</div>
