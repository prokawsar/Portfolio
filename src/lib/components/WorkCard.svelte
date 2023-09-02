<script lang="ts">
	export let timeDuration: string,
		role: string,
		level = 'Middle',
		jobType = '',
		company = '',
		tech = '',
		responsibility = ''
</script>

<div class="text-blue-500 font-semibold mt-5 mb-3 ">{timeDuration}</div>
<div class="font-bold dark:text-gray-500">{role} - {level}</div>
<div class="italic dark:text-gray-500">{jobType} - {company}</div>
<div class="italic dark:text-gray-500">Tech: {tech}</div>
<div class="font-medium text-justify dark:text-gray-500">
	<!-- list of resp -->
	{responsibility}
</div>
