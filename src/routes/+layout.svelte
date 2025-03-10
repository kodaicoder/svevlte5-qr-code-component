<script lang="ts">
	import Attribution from '$lib/component/Attribution.svelte';
	import '../app.postcss';
	let { children } = $props();
</script>

<main class="page-container">
	{@render children()}
	<Attribution />
</main>
