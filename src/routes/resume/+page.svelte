<script lang="ts">
	import SvgIcon from '../../components/SvgIcon.svelte';
</script>

<div class="container mx-auto ">
	<div class="w-11/12 mx-auto bg-slate-50 shadow-xl">
		<!-- full width designation -->
		<div class="static flex flex-col">
			<!-- name part -->
			<div
				class="bg-gray-300 w-6/12 mx-auto border-blue-300 h-16 z-20 flex justify-center items-center"
			>
				<h2 class="font-semibold text-3xl">Kawsar Ahmed</h2>
			</div>
			<div class="h-16 bg-blue-500 -mt-3 z-10 relative">
				<h2 class="text-2xl text-white text-center inset-x-0 bottom-0 absolute align-baseline">
					Software Engineer | Frontend | Svelte Expert
				</h2>
			</div>
		</div>

		<div class="flex flex-row">
			<div class="flex flex-col w-1/3 justify-end border-r-2 border-r-indigo-500 bg-slate-50">
				<!-- contact -->
				<div class="mr-3 mt-3 flex flex-col">
					<div class="flex justify-end">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Contact</h1>
					</div>
					<div class="flex flex-row m-4 mr-6 justify-end">
						<div>+880 1915983757</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-row m-4 mr-6 justify-end">
						<div>prokawsar@gmail.com</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-row m-4 mr-6 justify-end">
						<div class="font-semibold">Rajbari, Dhaka, Bangladesh 7710</div>
						<!-- TODOD: Icon here -->
					</div>

					<div class="flex flex-row m-4 mr-6 justify-end">
						<div>https://www.linkedin.com/in/prokawsar/</div>
						<!-- TODOD: Icon here -->
					</div>
				</div>

				<!-- education -->
				<div class="mr-3 mt-3 flex flex-col">
					<div class="flex justify-end">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Education</h1>
					</div>
					<div class="flex flex-col m-4 mr-6">
						<p class="text-gray-400 mb-3 flex justify-end">July 2018</p>
						<p class="flex justify-end">1st division</p>
						<p class="flex justify-end font-bold">Bachelor in IT</p>
						<p class="flex justify-end italic">From University of Greenwich</p>
					</div>
				</div>
				<!-- key skills -->
				<div class="mr-3 mt-3 flex flex-col">
					<div class="flex justify-end">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Key Skills</h1>
					</div>
				</div>
			</div>

			<div class="flex w-2/3 justify-start">
				<div class="w-9/12">
					<!-- profile -->
					<div class="ml-3 mt-3">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">Profile</h1>

						<p class="mt-3 ml-6 text-justify">
							Recent bachelor's degree recipient with a background in web design and development.
							W3C web developer certification. Over 3 years of experience working on personal blogs,
							taking one from 1,000 monthly visitors to 50,000 visitors per month in just 1 year.
							Seeking to become the next front end developer for Jameson Communications.
						</p>
					</div>

					<!-- professional experience -->
					<div class="ml-3 mt-3">
						<h1 class="uppercase text-xl font-semibold tracking-[.25rem]">
							Professional Experience
						</h1>

						<div class="flex flex-col ml-6">
							<div class="text-blue-500 font-semibold mt-5 mb-3">November 2021 - Present</div>
							<div class="font-bold">Frontend Developer</div>
							<div>Fully Remote - Shopping Cart Elite - USA</div>
							<div>
								<!-- list of resp -->
							</div>

							<div class="text-blue-500 font-semibold mt-5 mb-3">September 2018 - January 2022</div>
							<div class="font-bold">Fullstack Web Developer</div>
							<div>Fully Remote - Kws3 Media Ltd. - UK</div>
							<div>
								<!-- list of resp -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
