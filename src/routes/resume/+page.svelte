<script lang="ts">
	import SkillBar from '$lib/components/SkillBar.svelte'
	import WorkCard from '$lib/components/WorkCard.svelte'
</script>

<div class="container mx-auto ">
	<div class="w-11/12 mx-auto bg-slate-50 shadow-xl font-light font-roboto mb-4">
		<!-- full width designation -->
		<div class="static flex flex-col">
			<!-- name part -->
			<div
				class="bg-gray-300 w-full md:w-6/12 mx-auto border-blue-300 h-16 z-20 flex justify-center items-center"
			>
				<h2 class="font-semibold text-3xl uppercase">Kawsar Ahmed</h2>
			</div>
			<div class="h-16 bg-blue-500 -mt-1 md:-mt-3 z-10 relative">
				<h2 class="text-2xl text-white text-center inset-x-0 bottom-0 absolute align-baseline">
					Software Engineer | Frontend | Svelte Expert
				</h2>
			</div>
		</div>

		<div class="flex flex-col-reverse md:flex-row">
			<div
				class="flex flex-col md:w-1/3 justify-end md:border-r-2 md:border-r-indigo-500 bg-slate-50"
			>
				<!-- contact -->
				<div class="mr-3 mt-3 flex flex-col">
					<div class="flex md:justify-end">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Contact</h1>
					</div>
					<div class="flex flex-row m-4 mr-6 md:justify-end">
						<div>+880 1915983757</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-row m-4 mr-6 md:justify-end">
						<div>prokawsar@gmail.com</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-row m-4 mr-6 md:justify-end">
						<div class="font-semibold">Rajbari, Dhaka, Bangladesh 7710</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-col m-4 mr-6">
						<a
							class="flex hover:scale-105 hover:font-medium md:justify-end"
							href="https://www.linkedin.com/in/prokawsar/"
							target="_blank">https://www.linkedin.com/in/prokawsar/</a
						>
						<a
							class="flex hover:scale-105 md:justify-end hover:font-medium"
							href="https://www.github.com/prokawsar/"
							target="_blank">https://www.github.com/prokawsar/</a
						>
						<!-- TODOD: Icon here -->
					</div>
				</div>

				<!-- education -->
				<div class="mr-3 mt-3 flex flex-col">
					<div class="flex md:justify-end">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Education</h1>
					</div>
					<div class="flex flex-col m-4 mr-6">
						<p class="text-gray-400 mb-3 flex md:justify-end">July 2018</p>
						<p class="flex md:justify-end">1st division</p>
						<p class="flex md:justify-end font-bold">Bachelor in IT</p>
						<p class="flex md:justify-end italic">From University of Greenwich</p>
					</div>
				</div>
				<!-- key skills -->
				<div class="mr-3 mt-3 flex flex-col">
					<h1 class="uppercase flex md:justify-end text-xl font-semibold tracking-[.25rem]">
						Key Skills
					</h1>
					<div class="flex flex-col m-3 md:m-5">
						<SkillBar align="right" skill="Svelte" skillExpertise={90} />
						<SkillBar align="right" skill="SvelteKit" skillExpertise={75} />
						<SkillBar align="right" skill="Bootstrap 5" skillExpertise={80} />
						<SkillBar align="right" skill="Tailwind" skillExpertise={90} />
						<SkillBar align="right" skill="JavaScript" skillExpertise={90} />
						<SkillBar align="right" skill="TypeScript" skillExpertise={65} />
						<SkillBar align="right" skill="PHP" skillExpertise={70} />
						<SkillBar align="right" skill="MySQL" skillExpertise={70} />
					</div>
				</div>
			</div>

			<div class="flex md:w-2/3 justify-start">
				<div class="md:w-9/12">
					<!-- profile -->
					<div class="ml-3 mt-3">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Profile</h1>

						<p class="mt-3 mr-3 md:ml-6 text-justify">
							I have 4 years working experience in Svelte from its version 2. Have experience in
							building component in both version. I have worked on large scale project built with
							Sveltejs, bulma, bootstrap and other related technologies. Build admin dashboard with
							various works flow and customer relation management system.
						</p>
					</div>

					<!-- professional experience -->
					<div class="ml-3 mt-3">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">
							Professional Experience
						</h1>

						<div class="flex flex-col md:ml-6">
							<WorkCard
								timeDuration="May 2023 - Present"
								role="Frontend Engineer"
								level="Middle+"
								company="Ultrablue inc. - Seoul, Korea"
								jobType="Fully Remote"
								tech="Svelte, Tailwind Css, Expressjs, Dexiejs, Twitter API"
								responsibility="I am working for developing and bug fixing of Frontend of chrome extension. Currently we are having
								4 members in team. Its a great startup to build product and launch it to customer."
							/>

							<WorkCard
								timeDuration="January 2022 - March 2023"
								role="Frontend Engineer"
								level="Middle+"
								company="Shopping Cart Elite - USA"
								jobType="Fully Remote"
								tech="Svelte, SvelteKit, TypeScript, Bootstrap 5"
								responsibility="I am working to convert a Blockchain banking system made up with asp.net to Svelte project.
								I made numours standalone Svelte component to use accross the project. I used to work
								with a team of 7 members. After proving excellent performance, responsibility increase
								to review other developers code and suggest them to make it efficient to our internal
								standard."
							/>

							<WorkCard
								timeDuration="September 2018 - January 2022"
								role="Fullstack Web Developer"
								company="Kws3 Media Ltd. - UK"
								jobType="Fully Remote"
								tech="Svelte, TypeScript, Bulma, Docker, PHP, MySQL"
								responsibility="Worked in Kws3 Media for 3 years as Full Stack Web Developer. We used make dashboard
							panel, which has tons of feature like customer management, product management, order
							management, reports and so on."
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
