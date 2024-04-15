<script>
	export let text = '',
		bg = '',
		textColor = '',
		sizeStyle = 'px-2 py-1'
</script>

<div
	class="outline outline-1 outline-blue-200 bg-[#D0E2FF]/60 dark:bg-slate-700 rounded-full {bg} {sizeStyle}"
>
	<span class="text-sky-600 dark:text-gray-400 font-semibold text-sm {textColor}">{text}</span>
</div>
