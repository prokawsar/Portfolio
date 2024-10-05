<script lang="ts">
	const eduations = [
		{
			institute: 'Jahangirnagar University, Savar, Dhaka',
			subject: 'PGD in Information Technology',
			result: 'Graduated with 3.21',
			period: 'Period: 2019 - 2020',
			description:
				'Did completed a post graduation diploma in IT with ashtonishing result. Course was Operating system, Programming, Web development, Data structure and algorithm and so on.'
		},
		{
			institute: 'University of Greenwich, UK',
			subject: 'B.Sc. in Information Technology',
			result: 'Graduated with 1st class',
			period: 'Period: 2014 - 2018',
			description:
				'Did completed my graduation with ashtonishing result at first class division. Course was Software development, Programming, Web development, Data structure and algorithm and so on.'
		}
	]
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-2xl font-bold font-roboto uppercase tracking-widest dark:text-slate-300">
		Education
	</h1>

	{#each eduations as { description, institute, period, result, subject }}
		<div class="mb-4">
			<p class="text-xl dark:text-slate-500">{institute}</p>
			<p class="dark:text-slate-500">{subject}</p>
			<p class="dark:text-slate-500">{result}</p>
			<p class="dark:text-slate-500">{period}</p>

			<p class="mt-6 max-w-sm text-justify text-gray-500">
				{description}
			</p>
		</div>
	{/each}
</div>
