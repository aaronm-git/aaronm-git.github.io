<script>
	import SectionImage from '$components/shared/SectionImage.svelte';

	export let id = '';
	export let title = '';
	export let noPadding = false;
	export let imageUrl = null;
	export let imageAlt = `${title ? title : id} section`;
	export let imagePosition = 'left';
	export let imageSticky = false;
</script>

<section {id} class="{!noPadding && 'section'} is-medium">
	<h3 class="subtitle is-1 is-uppercase has-text-centered">{title}</h3>
	<div class="columns" style="--image-position: {imagePosition === "right" ? 'row-reverse' : 'row'}">
		{#if imageUrl}
			<div class="column has-text-centered">
				<SectionImage src="/images/{imageUrl}" alt={imageAlt} sticky={imageSticky} />
			</div>
		{/if}
		<div class="column">
			<slot />
		</div>
	</div>
</section>

<style>
	.columns {
		flex-flow: var(--image-position);
	}
</style>
