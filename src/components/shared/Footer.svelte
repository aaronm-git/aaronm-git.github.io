<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer has-background-dark text has-text-light">
	<div class="content has-text-centered">
		<p>
			<strong class="has-text-light">Copyright © {currentYear}</strong> - Aaron Molina.
			<br />
			The source code is licensed
			<a href="http://opensource.org/licenses/mit-license.php" target="_blank" rel="noreferrer"
				>MIT</a
			>.
		</p>
		<div class="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
			<a href="https://bulma.io" rel="noreferrer" class="is-block">
				<img
					src="/images/bulma-logo-white.png"
					alt="Made with Bulma"
					width="128"
					height="32"
					class="mr-4"
				/>
			</a>
			<a
				href="https://svelte.dev"
				rel="noreferrer"
				class="is-inline-block has-background-light pt-1 px-1"
				style="border-radius: 4px;"
			>
				<img src="/images/svelte-logo.png" alt="Made with Sveltekit" width="82" height="auto" />
			</a>
		</div>
	</div>
</footer>
