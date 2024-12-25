<script lang="ts">
	import Capsule from '$lib/components/Capsule.svelte';

	interface Props {
		project: {
			title: string;
			description: string;
			techs: string;
			live?: string;
			url?: string;
		};
	}

	let { project }: Props = $props();
</script>

<div
	class="rounded-lg items-center flex flex-col gap-2 justify-center shadow-md h-60 bg-white border"
>
	<p class="text-3xl">{project.title}</p>
	<p class="text-xs text-gray-600 text-center px-5">{project.description}</p>
	<div class="flex flex-row justify-center w-full items-center gap-2">
		<button
			class:hidden={!project.live}
			onclick={() => window.open(project.live, '_blank')}
			class="px-5 border rounded hover:border-gray-500"
		>
			Live
		</button>
		<button
			class:hidden={!project.url}
			onclick={() => window.open(project.url, '_blank')}
			class="px-5 border rounded hover:border-gray-500"
		>
			Code
		</button>
	</div>
	{#if project.techs}
		<div class="flex flex-row justify-center gap-2 flex-wrap px-2">
			{#each project.techs.split(',') as tech}
				<Capsule text={tech} sizeStyle="px-1.5" bg="!bg-gray-100" textColor="!text-teal-700" />
			{/each}
		</div>
	{/if}
</div>
