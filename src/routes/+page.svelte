<script>
	import Hero from '$components/Hero.svelte';
	import AboutMe from '$components/AboutMe.svelte';
	import Skills from '$components/Skills.svelte';
	import Projects from '$components/Projects.svelte';
	import Experience from '$components/Experience.svelte';
	import Contact from '$components/Contact.svelte';
	import Footer from '$components/shared/Footer.svelte';
	export let data;
</script>

<Hero />
<div id="main" class="container">
	<AboutMe />
	<Skills />
	<Projects data={data.repos} />
	<Experience />
</div>
<Contact />
<Footer />
