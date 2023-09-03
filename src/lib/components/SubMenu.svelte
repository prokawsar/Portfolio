<!-- 
Known bug:
    - If the browser loads the content for the first time, showMenu set to false.
    Hence, we cannot get menu.h and menu.y dimension, since context menu has not been available at DOM.
    The first right click will not shown properly when right-click occurs around the edge (bottom part
    and right part) of the browser.
-->
<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte'
	import { slide } from 'svelte/transition'

	export let pos = { x: 0, y: 0 },
		showProfiles
	// menu is dimension (height and width) of context menu
	let menu = { h: 0, w: 0 }
	// browser/window dimension (height and width)
	let browser = { h: 0, w: 0 }

	const dispatch = createEventDispatcher()

	const menuItems = [
		{
			name: 'github',
			onClick: openProfile,
			displayText: 'GitHub',
			icon: 'fa-brands fa-github',
			class: '',
			url: 'https://github.com/prokawsar'
		},
		{
			name: 'linkedin',
			onClick: openProfile,
			displayText: 'LinkedIn',
			icon: 'fa-brands fa-linkedin',
			class: '',
			url: 'https://www.linkedin.com/in/prokawsar/'
		},
		{
			name: 'upwork',
			onClick: openProfile,
			displayText: 'Upwork',
			icon: 'fa-solid fa-house',
			url: 'https://www.upwork.com/freelancers/~012f78e5dacf069591',
			class: ''
		},
		{
			name: 'stackoverflow',
			onClick: openProfile,
			displayText: 'Stackoverflow',
			icon: 'fa-brands fa-stack-overflow',
			class: '',
			url: 'https://stackoverflow.com/users/4826019/prokawsar',
			disabled: false
		}
	]

	onMount(() => {
		browser = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		if (browser.h - pos.y < menu.h) pos.y = pos.y - menu.h
		if (browser.w - pos.x < menu.w) pos.x = pos.x - menu.w - 185
	})
	function getContextMenuDimension(node: HTMLElement) {
		let height = node.offsetHeight
		let width = node.offsetWidth
		menu = {
			h: height,
			w: width
		}
	}
	function openProfile(menuItem: any) {
		menuItem.url ? window.open(menuItem.url, '_blank') : ''
	}
</script>

<nav
	use:getContextMenuDimension
	style="position: absolute; top:{pos.y}px; left:{pos.x}px"
	on:mouseenter={() => (showProfiles = true)}
	on:mouseleave={() => (showProfiles = false)}
>
	<div
		transition:slide={{ duration: 200 }}
		class="flex flex-col gap-1 bg-white dark:bg-slate-700 py-2 w-44 rounded-lg outline outline-2 outline-[#D0E2FF] dark:outline-gray-600"
		id="navbar"
	>
		<ul class="m-1">
			{#each menuItems as item}
				{#if item.name == 'hr'}
					<div class="dark:border-b-gray-600 h-1 w-full border-b" />
				{:else}
					<li class="block list-none">
						<button
							class="w-full text-left text-md py-1 cursor-not-allowed hover:font-semibold hover:bg-slate-300 hover:rounded-md dark:hover:text-white dark:hover:bg-slate-800 dark:text-gray-400 {item.class}"
							on:click={() => (item.disabled ? '' : item.onClick(item))}
							class:cursor-not-allowed={item.disabled}
							><i class="{item.icon} dark:text-gray-400 px-3" />{item.displayText}</button
						>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>

<style>
	* {
		padding: 1;
		margin: 0;
	}
</style>
