<script lang="ts">
	export let timeDuration: string,
		role: string,
		level = 'Middle',
		jobType = '',
		company = '',
		tech = '',
		responsibility = '';
</script>

<div class="text-blue-500 font-semibold mt-5 mb-3">{timeDuration}</div>
<div class="font-bold">{role} - {level}</div>
<div class="italic">{jobType} - {company}</div>
<div class="italic">Tech: {tech}</div>
<div class="font-medium text-justify ">
	<!-- list of resp -->
	{responsibility}
</div>
