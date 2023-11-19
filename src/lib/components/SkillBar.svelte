<script lang="ts">
	export let skill: string = '',
		color: string = 'bg-blue-500',
		className: string = '',
		align: string = 'left',
		skillExpertise: number = 50

	$: skillExpertise = skillExpertise < 100 && skillExpertise > 0 ? skillExpertise : 0
</script>

<div class="py-1 {className}">
	<p class="flex dark:text-zinc-300 font-roboto" class:justify-end={align == 'right'}>{skill}</p>
	<div class="w-full bg-gray-300 dark:bg-gray-500 rounded-md">
		<div class="h-2 rounded-md {color}" style="width: {skillExpertise}%;" />
	</div>
</div>
