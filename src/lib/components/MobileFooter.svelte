<script>
	const menuItems = [
		{
			name: 'github',
			displayText: 'GitHub',
			icon: 'fa-brands fa-github',
			class: '',
			url: 'https://github.com/prokawsar'
		},
		{
			name: 'linkedin',
			displayText: 'LinkedIn',
			icon: 'fa-brands fa-linkedin',
			class: '',
			url: 'https://www.linkedin.com/in/prokawsar/'
		},
		{
			name: 'upwork',
			displayText: 'Upwork',
			icon: 'fa-solid fa-house',
			url: 'https://www.upwork.com/freelancers/~012f78e5dacf069591',
			class: ''
		},
		{
			name: 'stackoverflow',
			displayText: 'Stackoverflow',
			icon: 'fa-brands fa-stack-overflow',
			class: '',
			url: 'https://stackoverflow.com/users/4826019/prokawsar',
			disabled: false
		}
	]
</script>

<div
	class="bg-zinc-300 dark:bg-zinc-900 w-full fixed flex flex-row items-center justify-around sm:hidden bottom-0 h-14"
>
	{#each menuItems as menu}
		<button
			type="button"
			on:click|stopPropagation={() => {
				menu.url ? window.open(menu.url, '_blank') : ''
			}}
			class="dark:text-slate-400 flex flex-col justify-center items-center"
		>
			<i class="{menu.icon} dark:text-gray-400 px-3" />
			{menu.displayText}
		</button>
	{/each}
</div>
