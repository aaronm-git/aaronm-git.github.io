<script>
	export let src;
	export let alt;
	export let sticky;
</script>

<img {src} {alt} class={`section-image ${sticky && 'sticky'} ${$$props.class}`} />

<style>
	.section-image.sticky {
		position: sticky;
		top: 4rem;
	}
</style>
