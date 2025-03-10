<script lang="ts">
	interface Props {
		imageSource: string;
		header: string;
		description: string;
	}
	let { imageSource, header, description }: Props = $props();
</script>

<div class="card">
	<div class="qrcode">
		<img src={imageSource} alt="qr code" />
	</div>
	<div class="description">
		<h1>{header}</h1>
		<p>{description}</p>
	</div>
</div>
