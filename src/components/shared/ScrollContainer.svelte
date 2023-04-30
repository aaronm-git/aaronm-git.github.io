<script>
	export let height = '100%';
	export let width = '100%';
	let style = $$props.style || '';
</script>

<div class="scroll-container" style="--height: {height}; --width: {width}; {style}">
	<slot />
</div>

<style>
	.scroll-container {
		overflow: auto;
		height: var(--height);
		width: var(--width);
	}

	.scroll-container::-webkit-scrollbar {
		width: 0.5rem;
	}

	.scroll-container::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	.scroll-container::-webkit-scrollbar-thumb {
		background: #23d1609c;
	}

	.scroll-container::-webkit-scrollbar-thumb:hover {
		background: #23d160;
	}
</style>
