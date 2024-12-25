<script lang="ts">
	import { slide } from 'svelte/transition';
	import { SvelteComponent, createEventDispatcher } from 'svelte';

	export let component: typeof SvelteComponent,
		bodyClass = '';
	const dispatch = createEventDispatcher();
</script>

<div
	class="fixed top-0 bg-gradient-to-t from-slate-50 to-zinc-200 dark:from-slate-700 dark:to-zinc-900 h-full w-full p-10 overflow-auto"
	transition:slide={{ duration: 500 }}
>
	<div class="flex flex-col relative">
		<button
			class="absolute right-1 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-full p-1 px-[6px] flex items-center justify-center"
			on:click={() => dispatch('close')}
		>
			Close
		</button>
		<div class="flex flex-col items-center {bodyClass}">
			<svelte:component this={component} />
		</div>
	</div>
</div>
