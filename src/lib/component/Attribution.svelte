<script lang="ts">
	interface Props {
		githubLink?: string;
	}

	let { githubLink = 'https://github.com/kodaicoder' }: Props = $props();
</script>

<div class="attribution">
	Challenge by
	<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor </a>. Coded
	by
	<a href={githubLink}> Kodaicoder </a>.
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.attribution {
		@apply absolute right-2 bottom-1 text-center text-xs;
	}

	.attribution a {
		@apply text-violet-500;
	}
</style>
