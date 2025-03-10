<script lang="ts">
	interface Props {
		imageSource: string;
		title: string;
		description: string;
	}
	let { imageSource, title, description }: Props = $props();
</script>

<div class="card">
	<div class="qrcode">
		<img src={imageSource} alt="qr code" />
	</div>
	<div class="description">
		<h1>{title}</h1>
		<p>{description}</p>
	</div>
</div>
