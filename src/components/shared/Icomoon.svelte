<script>
	export let name;
	export let mr;
	export let ml;
	export let mx;

	let spacing = mr ? 'mr' : ml ? 'ml' : mx ? 'mx' : null;
</script>

<i class={`icomoon-${name} ${spacing && `${spacing}-2`}`} style="height: initial;" />
