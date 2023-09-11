<script>
	import SkillBar from '$lib/components/SkillBar.svelte'
</script>

<div class="flex flex-col w-3/4 md:w-2/4">
	<h1
		class="text-2xl text-center font-bold font-roboto uppercase tracking-widest dark:text-slate-300"
	>
		Key Skills
	</h1>
	<div class="flex flex-col mt-10 w-full">
		<div class="flex flex-col md:flex-row gap-3 items-center">
			<div class="w-full">
				<p class="font-semibold text-lg">Frontend</p>
				<SkillBar skill="Svelte" skillExpertise={90} />
				<SkillBar skill="SvelteKit" skillExpertise={80} />
				<SkillBar skill="JavaScript" skillExpertise={90} />
				<SkillBar skill="TypeScript" skillExpertise={65} />
				<SkillBar skill="Tailwind" skillExpertise={90} />
				<SkillBar skill="Bootstrap 5" skillExpertise={80} />
			</div>

			<div class="w-full">
				<p class="font-semibold text-lg mt-4">Backend</p>
				<SkillBar skill="PHP" skillExpertise={80} color="bg-purple-500" />
				<SkillBar skill="MySQL" skillExpertise={75} color="bg-purple-500" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row gap-3 items-center">
			<div class="w-full">
				<p class="font-semibold text-lg mt-4">Familiar with</p>
				<SkillBar skill="React" skillExpertise={65} color="bg-blue-400" />
				<SkillBar skill="React Native" skillExpertise={55} color="bg-blue-400" />
				<SkillBar skill="Next.js" skillExpertise={65} color="bg-blue-400" />
				<SkillBar skill="Linux" skillExpertise={70} color="bg-blue-400" />
				<SkillBar skill="Directus" skillExpertise={50} color="bg-blue-400" />
			</div>
			<div class="w-full">
				<p class="font-semibold text-lg mt-4">Tools</p>
				<SkillBar skill="Git" skillExpertise={90} color="bg-indigo-500" />
				<SkillBar skill="VS Code" skillExpertise={80} color="bg-indigo-500" />
				<SkillBar skill="Docker" skillExpertise={65} color="bg-indigo-500" />
			</div>
		</div>
	</div>
</div>
