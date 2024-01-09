<script lang="ts">
	import Jobs from '$lib/components/WorkCard.svelte'
</script>

<div class="flex flex-col md:ml-6 max-w-lg h-full">
	<h1 class="text-2xl font-bold font-roboto uppercase tracking-widest dark:text-slate-300">
		Work Experience
	</h1>

	<Jobs
		timeDuration="December 2021 - January 2024"
		role="Frontend Engineer"
		level="Middle+"
		company="HireOnceAndForever - USA"
		jobType="Fully Remote"
		tech="Svelte, SvelteKit, Vue, Nuxt, TypeScript, Bootstrap 5, Tailwind, Directus"
		responsibility="I am working to convert a Blockchain banking system made up with asp.net to Svelte project.
	I made numours standalone Svelte component to use accross the project. I used to work
	with a team of 7 members. After proving excellent performance, responsibility increase
	to review other developers code and suggest them to make it efficient to our internal
	standard."
	/>

	<Jobs
		timeDuration="May 2023 - July 2023"
		role="Frontend Engineer"
		level="Middle+"
		company="Ultrablue inc. - Seoul, Korea"
		jobType="Fully Remote"
		tech="Svelte, Tailwind Css, Expressjs, Dexiejs, Twitter API"
		responsibility="I am working for developing and bug fixing of Frontend of chrome extension. Currently we are having
		4 members in team. Its a great startup to build product and launch it to customer."
	/>

	<Jobs
		timeDuration="September 2018 - January 2022"
		role="Fullstack Web Developer"
		company="Kws3 Media Ltd. - UK"
		jobType="Fully Remote"
		tech="Svelte, TypeScript, Bulma, Docker, PHP, MySQL"
		responsibility="Worked in Kws3 Media for 3 years as Full Stack Web Developer. We used make dashboard
	panel, which has tons of feature like customer management, product management, order
	management, reports and so on."
	/>
</div>
