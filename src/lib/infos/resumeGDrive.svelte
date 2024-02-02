<script lang="ts">
	import Loader from '$lib/components/Loader.svelte'

	let hideLoader = false

	const loadFinish = () => {
		hideLoader = true
	}
</script>

<Loader classes={hideLoader ? 'hidden' : ''} />

<iframe
	class="h-[90vh]"
	src="https://drive.google.com/file/d/1Is-jw20KspoaF6Wd3lD_sLcmQ1Mn8nAc/preview"
	width="1140"
	on:load={() => loadFinish()}
	allow="autoplay"
	title="Resume of Kawsar Ahmed"
/>
