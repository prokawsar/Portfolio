<script lang="ts">
	interface Props {
		timeDuration: string;
		role: string;
		level?: string;
		jobType?: string;
		company?: string;
		tech?: string;
		responsibility?: string;
	}

	let {
		timeDuration,
		role,
		level = 'Middle',
		jobType = '',
		company = '',
		tech = '',
		responsibility = ''
	}: Props = $props();
</script>

<div class="text-blue-500 font-semibold mt-5 text-lg">{timeDuration}</div>
<div class="font-bold dark:text-slate-400 text-lg">{role} - {level}</div>
<div class="italic dark:text-gray-400">{jobType} - {company}</div>
<div class="italic dark:text-gray-400">Tech: {tech}</div>
<div class="font-medium text-justify dark:text-gray-400/70">
	<!-- list of resp -->
	{responsibility}
</div>
