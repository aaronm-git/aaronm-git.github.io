<script>
	import Icomoon from '$components/shared/Icomoon.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handleType(event) {
		const { value } = event.target;
		dispatch('type', value);
	}

	export let placeholder = 'Search';
</script>

<div class="field" style="width: 100%">
	<p class="control has-icons-left">
		<input class="input is-primary" type="text" {placeholder} on:keyup={handleType} />
		<span class="icon is-small is-left">
			<Icomoon name="search" />
		</span>
	</p>
</div>
