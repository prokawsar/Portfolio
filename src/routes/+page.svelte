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

	const infos = {
		work: Work,
		education: Education,
		skills: Skills,
		resumeGDrive: ResumeGDrive
	}
	const handleMenuEvent = (e: any) => {
		console.log(e.detail)
		activeComp = e.detail
		if (e.detail == 'theme') {
			handleSwitchDarkMode()
			return
		}
		if (e.detail == 'resume') {
			goto('/resume')
			return
		}

		if (Object.keys(infos).includes(e.detail)) {
			showInfo = true
		}
	}
	let darkMode = false,
		showInfo = false,
		activeComp = ''

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

<div
	class="absolute md:flex justify-center items-center bg-gradient-to-b from-slate-100 to-gray-100 dark:from-slate-700 dark:to-zinc-900 inset-0 md:h-screen mx-auto"
>
	<div class="flex flex-col items-center w-full p-4 md:p-10 mx-5 md:mx-20">
		<p class="hidden sm:flex font-roboto font-light text-black dark:text-white">
			To open the menu, employ a right-click with your mouse
		</p>
		<p class="sm:hidden">Tap anywhere to open menu</p>
		<div class="flex flex-col md:flex-row gap-2 md:gap-5 w-full">
			<div class="flex flex-col justify-center gap-2 w-full">
				<h1 class="text-6xl text-black dark:!text-white">Hi, <br /> I am Kawsar Ahmed</h1>
				<h3 class="text-2xl sm:text-3xl">Software Engineer | Frontend</h3>
				<p class="text-gray-600">
					I'm delighted to have you here! As a dedicated Software Engineer specializing in frontend
					development, my focus revolves around crafting top-notch web applications in any tech yet
					specially with Svelte, SvelteKit. I take pride in writing clean and optimized code,
					ensuring that your applications perform at their best.
				</p>
				<div class="flex flex-row gap-2">
					<Capsule text="JavaScript" />
					<Capsule text="Svelte" />
					<Capsule text="SvelteKit" />
					<Capsule text="Tailwind" />
					<Capsule text="PHP" />
				</div>
			</div>
			<div
				class="md:flex md:justify-center w-full hidden relative bg-hero-bg bg-no-repeat bg-cover"
			>
				<img
					class="left-2 md:left-0 scale-75 sm:scale-75 lg:scale-100"
					src="/images/avatar.png"
					alt="avatar"
				/>
				<!-- <div class="absolute flex flex-row gap-2 left-1/4">
					<Fa icon={faGithub} />
					<Fa icon={faLinkedin} />
				</div> -->
			</div>

			<div class="flex w-full relative md:hidden">
				<svg class="" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#D0E2FF"
						d="M47,-71.7C61.7,-63.6,75.2,-52,81.2,-37.5C87.2,-23,85.7,-5.4,82,10.9C78.2,27.1,72.1,42.2,62.5,55.4C53,68.6,39.9,79.9,24.8,84.2C9.8,88.4,-7.3,85.6,-23.9,80.9C-40.5,76.2,-56.7,69.7,-68.7,58.2C-80.7,46.7,-88.5,30.3,-91.4,12.9C-94.3,-4.5,-92.3,-22.9,-84,-37.2C-75.7,-51.5,-61,-61.8,-46,-69.9C-30.9,-77.9,-15.5,-83.7,0.3,-84.2C16.1,-84.6,32.2,-79.9,47,-71.7Z"
						transform="translate(100 100)"
					/>
				</svg>

				<img
					class="absolute left-2 md:left-32 md:top-24 scale-75 md:scale-100"
					src="/images/avatar.png"
					alt="avatar"
				/>
			</div>
		</div>
	</div>
	<div class="hidden md:flex">
		<ContextMenu on:menuSelect={(e) => handleMenuEvent(e)} />
	</div>

	{#if showInfo}
		<Accordian on:close={() => (showInfo = false)} component={infos[activeComp]} />
	{/if}
</div>
