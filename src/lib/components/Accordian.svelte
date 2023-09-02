<script lang="ts">
	import Fa from 'svelte-fa'
	import { slide } from 'svelte/transition'
	import { faMultiply } from '@fortawesome/free-solid-svg-icons'
	import { createEventDispatcher } from 'svelte'

	export let component: any = '',
		bodyClass = ''
	const dispatch = createEventDispatcher()
</script>

<div
	class="fixed top-0 bg-white h-full w-full p-10 overflow-auto"
	transition:slide={{ delay: 200 }}
>
	<div class="flex flex-col relative">
		<button
			class="absolute right-1 hover:bg-gray-200 rounded-full p-1 px-[6px] flex items-center justify-center"
			on:click={() => dispatch('close')}
		>
			<Fa icon={faMultiply} />
		</button>
		<div class="flex flex-col items-center  {bodyClass}">
			<svelte:component this={component} />
		</div>
	</div>
</div>
