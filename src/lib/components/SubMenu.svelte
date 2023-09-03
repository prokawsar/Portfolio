<!-- 
Known bug:
    - If the browser loads the content for the first time, showMenu set to false.
    Hence, we cannot get menu.h and menu.y dimension, since context menu has not been available at DOM.
    The first right click will not shown properly when right-click occurs around the edge (bottom part
    and right part) of the browser.

Inspired from: Context Menu https://svelte.dev/repl/3a33725c3adb4f57b46b597f9dade0c1?version=3.25.0
-->
<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { slide } from 'svelte/transition'

	// pos is cursor position when right click occur
	export let pos = { x: 0, y: 0 },
		showProfiles
	// menu is dimension (height and width) of context menu
	let menu = { h: 0, w: 0 }
	// browser/window dimension (height and width)
	let browser = { h: 0, w: 0 }
	// showMenu is state of context-menu visibility
	let showMenu = false

	const dispatch = createEventDispatcher()

	const menuItems = [
		{
			name: 'github',
			onClick: education,
			displayText: 'GitHub',
			icon: 'fa-brands fa-github',
			class: '',
			disabled: true
		},
		{
			name: 'linkedin',
			onClick: hireMe,
			displayText: 'LinkedIn',
			icon: 'fa-brands fa-linkedin',
			class: '',
			disabled: true
		},
		{
			name: 'upwork',
			onClick: resumeLink,
			displayText: 'Upwork',
			icon: 'fa-solid fa-house',
			class: '',
			disabled: true
		},
		{
			name: 'stackoverflow',
			onClick: resumeGDrive,
			displayText: 'Stackoverflow',
			icon: 'fa-brands fa-stack-overflow',
			class: '',
			disabled: true
		}
	]

	function getContextMenuDimension(node: HTMLElement) {
		// This function will get context menu dimension
		// when navigation is shown => showMenu = true
		let height = node.offsetHeight
		let width = node.offsetWidth
		menu = {
			h: height,
			w: width
		}
	}
	function workExperience() {
		dispatch('menuSelect', 'work')
	}
	function skills() {
		dispatch('menuSelect', 'skills')
	}
	function education() {
		dispatch('menuSelect', 'education')
	}
	function toggleTheme() {
		dispatch('menuSelect', 'theme')
	}
	function resumeLink() {
		dispatch('menuSelect', 'resume')
	}

	function resumeGDrive() {
		dispatch('menuSelect', 'resumeGDrive')
	}

	function hireMe() {
		dispatch('menuSelect', 'hire')
	}
</script>

<nav
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
							on:click={item.disabled ? () => {} : item.onClick}
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
