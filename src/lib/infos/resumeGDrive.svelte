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
	src="https://drive.google.com/file/d/1Jv26CbslfE-Z3WA7FcbM1HiVXg_3NZnp/preview"
	width="1140"
	on:load={() => loadFinish()}
	allow="autoplay"
	title="resume"
/>
