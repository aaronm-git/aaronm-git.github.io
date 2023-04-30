<script>
	import Icomoon from '$components/shared/Icomoon.svelte';
	import Section from '$components/shared/Section.svelte';
	// check if the user is on a mobile device by window width and consider resizing
	import { browser } from '$app/environment';
	const sectionOptions = {
		id: 'experience',
		title: 'Experience',
		// imageUrl: 'experience.svg',
		imageAlt: 'Experience',
		imagePosition: 'right'
	};
	$: isMobile = browser && window.innerWidth < 768;
	if (browser) {
		// on window resize
		window.addEventListener('resize', () => {
			// check if the user is on a mobile device by window width and consider resizing
			isMobile = window.innerWidth < 768;
		});
	}
</script>

<Section {...sectionOptions}>
	<div class="container">
		<div class="timeline {isMobile ? '' : 'is-centered'} is-flex-direction-column-reverse">
			<header class="timeline-header">
				<span class="tag is-medium is-primary">2011</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-icon is-primary">
					<Icomoon name="googlescholar" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>January 2011</p>
						<p class="is-size-6">Computer Science</p>
						<p class="has-text-grey">Miami-Dade College</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2012</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img
						src="university-of-miami-logo.png"
						style="height: 100%"
						alt="University of Miami logo"
					/>
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>February 2012</p>
						<p class="is-size-6">Front-End Web Development Certification</p>
						<p class="has-text-grey">University of Miami</p>
					</div>
				</div>
			</div>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary" />
				<div class="timeline-content">
					<div class="heading">
						<p>March 2012</p>
						<p class="is-size-6">Front-End Web Developer</p>
						<p class="has-text-grey">Freelance</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2014</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="geek-squad-logo.png" alt="Geek Squad logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>June 2014</p>
						<p class="is-size-6">Consultation / Repair</p>
						<p class="has-text-grey">Geek Squad</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2016</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="practicepanther-logo.jpeg" alt="PracticePanther logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>May 2016</p>
						<p class="is-size-6">Senior Tech Support Specialist</p>
						<p class="has-text-grey">PracticePanther</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2017</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-icon is-primary">
					<Icomoon name="googlescholar" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>February 2017</p>
						<p class="is-size-6">Full-Stack Web Development Certification</p>
						<p class="has-text-grey">Ironhack Full-Stack Developer Bootcamp</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2018</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="flying-academy.jpg" alt="Flying Academy logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>February 2018</p>
						<p class="is-size-6">Front-End Developer</p>
						<p class="has-text-grey">Flying Academy</p>
					</div>
				</div>
			</div>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="upwork.jpg" alt="Upwork logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>August 2018</p>
						<p class="is-size-6">Front-End Web Developer/Web Consultant</p>
						<p class="has-text-grey">UPWORK</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2019</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="uplyft-logo.jpg" alt="Uplyft Capital logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>January 2019</p>
						<p class="is-size-6">Full-Stack Web Developer</p>
						<p class="has-text-grey">Uplyft Capital</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2020</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="originpc.png" alt="Origin PC logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>May 2020</p>
						<p class="is-size-6">Front-End Web Developer</p>
						<p class="has-text-grey">ORIGIN PC</p>
					</div>
				</div>
			</div>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="corsair.png" alt="Corsair logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>April 2020</p>
						<p class="is-size-6">Front-End Web Developer</p>
						<p class="has-text-grey">CORSAIR</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-primary">2022</span>
			</header>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="miami-heat.jpeg" alt="Miami HEAT logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>February 2022</p>
						<p class="is-size-6">Front-End Web Developer</p>
						<p class="has-text-grey">Miami HEAT</p>
					</div>
				</div>
			</div>
			<div class="timeline-item is-primary">
				<div class="timeline-marker is-primary is-image is-32x32">
					<img src="das-logo.jpeg" alt="Dealership Automation Services logo" />
				</div>
				<div class="timeline-content">
					<div class="heading">
						<p>August 2022</p>
						<p class="is-size-6">Full-Stack Web Developer</p>
						<p class="has-text-grey">Dealership Automation Services</p>
					</div>
				</div>
			</div>
			<header class="timeline-header">
				<span class="tag is-medium">Present</span>
			</header>
		</div>
	</div>
</Section>

<style>
	#experience {
		position: relative;
	}

	#experience::before {
		content: '';
		position: absolute;
		top: 2rem;
		left: 0;
		height: 100%;
		width: 75%;
		background-image: url('/experience.svg');
		background-repeat: no-repeat;
		background-position: 15%;
		background-size: contain;
		max-height: 30%;
		opacity: 0.3;
		z-index: -1;
	}
</style>
