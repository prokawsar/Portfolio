<script lang="ts">
	interface Props {
		text?: string;
		bg?: string;
		textColor?: string;
		sizeStyle?: string;
	}

	let { text = '', bg = '', textColor = '', sizeStyle = 'px-2 py-1' }: Props = $props();
</script>

<div
	class="outline outline-1 outline-blue-200 bg-[#D0E2FF]/60 dark:bg-slate-700 rounded-full {bg} {sizeStyle}"
>
	<span class="text-sky-600 dark:text-gray-400 font-semibold text-sm {textColor}">{text}</span>
</div>
