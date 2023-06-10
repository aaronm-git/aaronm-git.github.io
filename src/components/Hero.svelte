<script>
	import Icomoon from '$components/shared/Icomoon.svelte';
</script>

<section id="intro" class="hero is-primary is-bold is-fullheight">
	<!-- <video src="hero-1.mp4" autoplay loop muted /> -->
	<div class="hero-body">
		<div class="container has-text-centered">
			<figure
				class="image is-200x200"
				style="margin-bottom: 1rem; margin-left: auto; margin-right: auto"
			>
				<img
					id="avatar"
					class="is-rounded"
					src="https://github.com/aaronm-git.png"
					alt="Aaron Molina's avatar"
				/>
			</figure>
			<h1 class="title is-size-1">Aaron Molina</h1>
			<h2 class="subtitle"><span id="typed" /></h2>
			<div class="buttons" style="justify-content: center">
				<a href="#contact" class="button is-medium is-white">
					<Icomoon name="user" mr />
					<span>Contact</span>
				</a>
				<!-- <a
          href="./public/images/Aaron Molina - Web Developer CV.pdf"
          download="Aaron Molina - Web Developer CV"
          class="button is-medium is-primary is-inverted"
        >
          <span class="icon"><i class="fas fa-download"></i></span>
          <span>Download CV</span>
        </a> -->
			</div>
		</div>
	</div>
</section>

<style>
	#intro {
		/* margin-top: 52px; */
		position: relative;
	}

	#intro::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/images/hero-image-1.jpg');
		filter: grayscale(100%);
		background-size: cover;
		background-position: left;
		background-repeat: no-repeat;
		opacity: 25%;
	}
</style>
