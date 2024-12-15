<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import Accordian from '$lib/components/Accordian.svelte'
	import ContextMenu from '$lib/components/ContextMenu.svelte'
	import Intro from '$lib/components/Intro.svelte'
	import MobileFooter from '$lib/components/MobileFooter.svelte'
	import Education from '$lib/infos/education.svelte'
	import ResumeGDrive from '$lib/infos/resumeGDrive.svelte'
	import Showcase from '$lib/infos/showcase.svelte'
	import Skills from '$lib/infos/skills.svelte'
	import Work from '$lib/infos/work.svelte'
	import type { ComponentType } from 'svelte'

	type InfoComponents = {
		[key: string]: ComponentType
	}

	const infos: InfoComponents = {
		work: Work,
		showcase: Showcase,
		education: Education,
		skills: Skills,
		resumeGDrive: ResumeGDrive
	}

	let darkMode = false,
		showInfo = false,
		activeComp = ''

	const handleMenuEvent = (e: { detail: string }) => {
		const action = e.detail
		activeComp = action

		switch (action) {
			case 'theme':
				handleSwitchDarkMode()
				break
			case 'resume':
				goto('/resume')
				break
			case 'hire':
				window.open('https://www.upwork.com/freelancers/~012f78e5dacf069591', '_blank')
				break
			default:
				if (action in infos) {
					$page.url.searchParams.set('section', action)
					goto(`?${$page.url.searchParams.toString()}`)
					showInfo = true
				}
		}
	}

	function setTheme(isDark: boolean) {
		darkMode = isDark
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
		document.documentElement.classList.toggle('dark', isDark)
		document.documentElement.classList.toggle('light', !isDark)
	}

	function handleSwitchDarkMode() {
		setTheme(!darkMode)
	}

	if (browser) {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const storedTheme = localStorage.getItem('theme')
		const isDark = storedTheme === 'dark' || (!storedTheme && prefersDark)
		setTheme(isDark)

		const section = $page.url.searchParams.get('section')
		if (section) {
			activeComp = section
			showInfo = true
		}
	}

	const handleCloseSection = () => {
		showInfo = false
		goto('/')
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Author: Kawsar Ahmed (prokawsar), Top rated svelte freelancer, Upwork, Software Engineer, Svelte developer, SvelteKit developer, Svelte Engineer"
	/>
</svelte:head>
<div
	class="absolute md:flex justify-center items-center bg-gradient-to-b from-slate-50 to-zinc-300 dark:from-slate-700 dark:to-zinc-900 inset-0 md:h-screen mx-auto"
>
	<Intro />
	<ContextMenu on:menuSelect={(e) => handleMenuEvent(e)} />

	{#if showInfo}
		<Accordian on:close={handleCloseSection} component={infos[activeComp]} />
	{/if}

	<MobileFooter />
</div>
