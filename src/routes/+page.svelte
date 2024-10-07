<script lang="ts">
	import ContextMenu from '$lib/components/ContextMenu.svelte'
	import { goto } from '$app/navigation'
	import { browser } from '$app/environment'
	import Accordian from '$lib/components/Accordian.svelte'
	import Education from '$lib/infos/education.svelte'
	import Work from '$lib/infos/work.svelte'
	import Skills from '$lib/infos/skills.svelte'
	import ResumeGDrive from '$lib/infos/resumeGDrive.svelte'
	import Intro from '$lib/components/Intro.svelte'
	import MobileFooter from '$lib/components/MobileFooter.svelte'
	import Showcase from '$lib/infos/showcase.svelte'
	import { page } from '$app/stores'
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

	const handleMenuEvent = (e: any) => {
		activeComp = e.detail
		if (e.detail == 'theme') {
			handleSwitchDarkMode()
			return
		}
		if (e.detail == 'resume') {
			goto('/resume')
			return
		}
		if (e.detail == 'hire') {
			window.open('https://www.upwork.com/freelancers/~012f78e5dacf069591', '_blank')
			return
		}

		if (Object.keys(infos).includes(e.detail)) {
			$page.url.searchParams.set('section', e.detail)
			goto(`?${$page.url.searchParams.toString()}`)
			showInfo = true
		}
	}

	function handleSwitchDarkMode() {
		darkMode = !darkMode

		localStorage.setItem('theme', darkMode ? 'dark' : 'light')

		if (darkMode) {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add('light')
		}
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			darkMode = true
		} else {
			document.documentElement.classList.remove('dark')
			darkMode = false
		}

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
