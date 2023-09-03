<script>
	import SkillBar from '$lib/components/SkillBar.svelte'
</script>

<div class="flex flex-col w-52">
	<h1 class="uppercase flex text-xl font-semibold tracking-[.25rem]">Key Skills</h1>
	<div class="flex flex-col mt-10">
		<SkillBar skill="Svelte" skillExpertise={90} />
		<SkillBar skill="SvelteKit" skillExpertise={75} />
		<SkillBar skill="Bootstrap 5" skillExpertise={80} />
		<SkillBar skill="Tailwind" skillExpertise={90} />
		<SkillBar skill="JavaScript" skillExpertise={90} />
		<SkillBar skill="TypeScript" skillExpertise={65} />
		<SkillBar skill="PHP" skillExpertise={75} />
		<SkillBar skill="MySQL" skillExpertise={75} />
	</div>
</div>
