<script>
	import '../css/app.css'
	import '../css/style.css'
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props()
</script>

<!-- <Navbar /> -->
{@render children?.()}
