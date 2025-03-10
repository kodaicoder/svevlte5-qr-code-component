<script lang="ts">
	import Attribution from '$lib/component/Attribution.svelte';
	import '../app.postcss';
	let { children } = $props();
</script>

<div class="page-container">
	{@render children()}
	<Attribution />
</div>
