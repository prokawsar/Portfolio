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
	import SubMenu from './SubMenu.svelte'

	// pos is cursor position when right click occur
	let pos = { x: 0, y: 0 }
	// menu is dimension (height and width) of context menu
	let menu = { h: 0, w: 0 }
	// browser/window dimension (height and width)
	let browser = { h: 0, w: 0 }
	// showMenu is state of context-menu visibility
	let showMenu = false

	const dispatch = createEventDispatcher()

	const menuItems = [
		{
			name: 'experience',
			onClick: workExperience,
			displayText: 'Work Experience',
			icon: 'fa-solid fa-briefcase',
			class: ''
		},
		{
			name: 'education',
			onClick: education,
			displayText: 'Education',
			icon: 'fa-solid fa-book',
			class: ''
		},
		{
			name: 'skills',
			onClick: skills,
			displayText: 'Skills',
			icon: 'fa-solid fa-microchip',
			class: '',
			disabled: true
		},
		{
			name: 'profiles',
			onClick: education,
			displayText: 'Profiles',
			icon: 'fa-solid fa-user',
			class: ''
		},
		{
			name: 'hire',
			onClick: hireMe,
			displayText: 'Hire Me',
			icon: 'fa-solid fa-user-check',
			class: 'text-teal-700 dark:text-teal-500 font-semibold'
		},
		{
			name: 'hr'
		},
		{
			name: 'resume',
			onClick: resumeLink,
			displayText: 'Resume',
			icon: 'fa-solid fa-file',
			class: ''
		},
		{
			name: 'resumeGoogle',
			onClick: resumeGDrive,
			displayText: 'Resume (G Drive)',
			icon: 'fa-solid fa-file',
			class: ''
		},
		{
			name: 'hr'
		},
		{
			name: 'settings',
			onClick: toggleTheme,
			displayText: 'Toggle Theme',
			icon: 'fa-solid fa-gear',
			class: '',
			disabled: false
		}
	]

	function rightClickContextMenu(e: MouseEvent) {
		showMenu = true
		browser = {
			w: window.innerWidth,
			h: window.innerHeight
		}
		pos = {
			x: e.clientX,
			y: e.clientY
		}

		if (browser.h - pos.y < menu.h) pos.y = pos.y - menu.h
		if (browser.w - pos.x < menu.w) pos.x = pos.x - menu.w
	}
	function onPageClick(e: Event) {
		showMenu = false
	}
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
	let showProfiles = false
</script>

{#if showMenu}
	<nav use:getContextMenuDimension style="position: absolute; top:{pos.y}px; left:{pos.x}px">
		<div
			transition:slide={{ duration: 200 }}
			class="flex flex-col gap-1 bg-white dark:bg-slate-700 py-2 w-44 rounded-lg outline outline-2 outline-[#D0E2FF] dark:outline-gray-600"
			id="navbar"
		>
			<p class="text-center text-xl border-b pb-1 dark:border-b-gray-600 dark:text-gray-300">
				Menu
			</p>
			<ul class="m-1">
				{#each menuItems as item}
					{#if item.name == 'hr'}
						<div class="dark:border-b-gray-600 h-1 w-full border-b" />
					{:else}
						<li class="block list-none">
							<button
								class="w-full text-left text-md py-1 cursor-not-allowed hover:font-semibold hover:bg-slate-300 hover:rounded-md dark:hover:text-white dark:hover:bg-slate-800 dark:text-gray-400 {item.class}"
								on:click={item.disabled ? () => {} : item.onClick}
								on:mouseenter={() =>
									item.name == 'profiles' ? (showProfiles = true) : (showProfiles = false)}
								class:cursor-not-allowed={item.disabled}
								><i class="{item.icon} dark:text-gray-400 px-3" />{item.displayText}</button
							>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</nav>

	{#if showProfiles}
		<SubMenu pos={{ x: pos.x + 180, y: pos.y + 140 }} bind:showProfiles />
	{/if}
{/if}

<svelte:window on:contextmenu|preventDefault={rightClickContextMenu} on:click={onPageClick} />

<style>
	* {
		padding: 1;
		margin: 0;
	}
</style>
