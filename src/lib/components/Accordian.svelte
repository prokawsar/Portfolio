<script lang="ts">
	import Fa from 'svelte-fa'
	import { slide } from 'svelte/transition'
	import { faMultiply } from '@fortawesome/free-solid-svg-icons'
	import { SvelteComponent, createEventDispatcher } from 'svelte'

	export let component: typeof SvelteComponent,
		bodyClass = ''
	const dispatch = createEventDispatcher()
</script>

<div
	class="fixed top-0 bg-gradient-to-t from-slate-50 to-zinc-200 dark:from-slate-700 dark:to-zinc-900 h-full w-full p-10 overflow-auto"
	transition:slide={{ duration: 500 }}
>
	<div class="flex flex-col relative">
		<button
			class="absolute right-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full p-1 px-[6px] flex items-center justify-center"
			on:click={() => dispatch('close')}
		>
			<Fa icon={faMultiply} class="dark:text-white" />
		</button>
		<div class="flex flex-col items-center  {bodyClass}">
			<svelte:component this={component} />
		</div>
	</div>
</div>
