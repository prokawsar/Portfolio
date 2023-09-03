<script lang="ts">
	import Capsule from '$lib/components/Capsule.svelte'
	import Fa from 'svelte-fa'
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
	import ContextMenu from '$lib/components/ContextMenu.svelte'
	import { goto } from '$app/navigation'
	import { browser } from '$app/environment'
	import Accordian from '$lib/components/Accordian.svelte'
	import Education from '$lib/infos/education.svelte'
	import Work from '$lib/infos/work.svelte'
	import Skills from '$lib/infos/skills.svelte'
	import ResumeGDrive from '$lib/infos/resumeGDrive.svelte'
	import Intro from '$lib/components/Intro.svelte'

	const infos = {
		work: Work,
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
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Software Engineer, Svelte developer, SvelteKit developer, Svelte Engineer"
	/>
	<meta name="description" content="Author: Kawsar Ahmed, Top rated svelte freelancer, Upwork" />
</svelte:head>
<div
	class="absolute md:flex justify-center items-center bg-gradient-to-b from-slate-50 to-zinc-300 dark:from-slate-700 dark:to-zinc-900 inset-0 md:h-screen mx-auto"
>
	<Intro />
	<div class="hidden md:flex">
		<ContextMenu on:menuSelect={(e) => handleMenuEvent(e)} />
	</div>

	{#if showInfo}
		<Accordian on:close={() => (showInfo = false)} component={infos[activeComp]} />
	{/if}
</div>
