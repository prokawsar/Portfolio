<script lang="ts">
	let { data } = $props();
	console.log(data);
</script>

<svelte:head>
	<meta
		name="description"
		content="Author: Kawsar Ahmed (prokawsar), Top rated svelte freelancer, Upwork, Software Engineer, Svelte developer, SvelteKit developer, Svelte Engineer"
	/>
</svelte:head>
<div
	class="md:flex justify-center bg-gradient-to-b from-[#f8fcff] to-[#ecf7ff] dark:from-slate-700 dark:to-zinc-900 inset-0 md:h-screen mx-auto"
>
	<div class="max-w-7xl w-full">
		<nav class="flex justify-between w-full">
			<a href="/" class="text-2xl font-bold">Kawsar Ahmed</a>
		</nav>
		{#each data.posts as post}
			<article class="prose prose-xl p-10">
				{@html post.content}
			</article>
		{/each}
	</div>
</div>
