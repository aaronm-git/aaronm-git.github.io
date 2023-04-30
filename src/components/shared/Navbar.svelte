<script>
	$: isExpanded = false;
	function toggleMenu() {
		isExpanded = !isExpanded;
	}
</script>

<nav class="navbar is-fixed-top">
	<div class="navbar-brand">
		<a class="navbar-item has-text-primary has-text-weight-bold" href="#intro">
			<span class="is-uppercase">Aaron Molina</span>
		</a>
		<button
			class="navbar-burger"
			aria-label="menu"
			on:click={toggleMenu}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
	</div>
	<div class="navbar-menu {isExpanded && "is-active"}">
		<div class="navbar-start">
			<a class="navbar-item" href="#about"><span class="has-text-primary">#</span>&nbsp;About</a>
			<a class="navbar-item" href="#skills"><span class="has-text-primary">#</span>&nbsp;Skills</a>
			<a class="navbar-item" href="#projects"
				><span class="has-text-primary">#</span>&nbsp;Projects</a
			>
			<a class="navbar-item" href="#experience"
				><span class="has-text-primary">#</span>&nbsp;Experience</a
			>
			<a class="navbar-item" href="#contact"><span class="has-text-primary">#</span>&nbsp;Contact</a
			>
			<!-- <a
        class="navbar-item has-text-primary"
        href="./public/images/Aaron Molina - Web Developer CV.pdf"
        download="Aaron Molina - Web Developer CV"
        ><i class="fas fa-download"></i>&nbsp;Download CV</a
      > -->
		</div>
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<!-- <a
						class="button is-white has-text-twitter"
						href="https://twitter.com/aaroncodes09"
						rel="external noreferrer"
						target="_blank"
					>
						<span class="icon">
							<i class="icomoon-twitter" />
						</span>
					</a> -->
					<a
						class="button is-white has-text-github"
						href="https://github.com/aaronm-git"
						rel="external"
						target="_blank"
					>
						<span class="icon">
							<i class="icomoon-github" />
						</span>
					</a>
					<a
						class="button is-white has-text-linkedin"
						href="https://www.linkedin.com/in/aaronmolinag/"
						rel="external"
						target="_blank"
					>
						<span class="icon">
							<i class="icomoon-linkedin" />
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	.navbar {
		border-bottom: 1px solid #eaeaea;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
	}
</style>
