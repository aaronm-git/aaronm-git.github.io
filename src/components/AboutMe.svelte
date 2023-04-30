<script>
	import Section from './shared/Section.svelte';
	const sectionOptions = {
		id: 'about',
		title: 'About',
		imageUrl: 'about-me.svg',
		imageAlt: 'About Me',
		imagePosition: 'right',
		imageSticky: true
	};
</script>

<Section {...sectionOptions}>
	<div class="reverse-columns-mobile-only columns has-text-centered-mobile">
		<div class="column">
			<p class="block">
				As a seasoned Full-Stack Web Developer, I have worked with high-profile companies like the
				NBA's Miami HEAT, contributing to the launch of their new website. I have also served as a
				Front-end Web Developer at CORSAIR, a leading computer hardware and peripheral company. My
				expertise in HTML, CSS, JavaScript, and React, combined with my proficiency in Node.js,
				Express, MongoDB, GraphQL, and AWS (Lambdas, SQS, Route 53, S3, CloudFormation, and
				AppSync), positions me to develop highly dynamic and robust web applications that deliver
				seamless user experiences.
			</p>
			<p class="block">
				As a skilled Web Developer, I am actively seeking remote opportunities that allow me to
				expand my knowledge and skills. With a fast learning curve, I am always keen on
				strengthening my tech stack, working with various web technologies. As a JavaScript
				Developer, I am well-versed in the latest web development trends, ensuring that the
				applications I develop are optimized for speed, security, and scalability.
			</p>
			<p class="">
				In addition to my passion for Web Development, I enjoy tinkering with my gaming computer and
				playing video games. I am a big fan of the Marvel Cinematic Universe and enjoy catching up
				on the latest releases during my leisure time. I am also an avid Lego builder, and I
				recently completed The Office set. As a highly motivated and dedicated Web Developer, I am
				confident in my ability to contribute to any project and deliver outstanding results.
			</p>
		</div>
	</div>
</Section>
