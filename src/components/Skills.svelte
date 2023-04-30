<script>
	import SKILLS from '$constants/SKILLS.json';
	import Icomoon from '$components/shared/Icomoon.svelte';
	import ScrollContainer from '$components/shared/ScrollContainer.svelte';
	import Search from '$components/shared/Search.svelte';
	import Section from '$components/shared/Section.svelte';

	const sectionOptions = {
		id: 'skills',
		title: 'Skills',
		imageUrl: 'webdev.svg',
		imageAlt: 'Skills',
	};

	let skills = [];
	let skillSearchValue = '';
	let skillSearchValueHTML = '';

	$: skills = SKILLS;
	$: skillSearchValue;
	$: skillSearchValueHTML =
		skillSearchValue.length < 15 ? `<strong>${skillSearchValue}</strong>` : 'that';

	function filterSkills(e) {
		skillSearchValue = e.detail;
		skills = SKILLS.filter((skill) => {
			return skill.title.toLowerCase().indexOf(skillSearchValue.toLowerCase()) > -1;
		});
	}
</script>

<Section {...sectionOptions}>
	<div class="columns is-vcentered">
		<div class="column">
			<Search placeholder="Skill Search" on:type={filterSkills} />
			<ScrollContainer
				height="300px"
				class="scroll-container--bordered"
				style="border: 1px solid #f1f1f1; border-radius: 4px; padding: 0.75rem;"
			>
				{#if skills.length > 0}
					<div class="tags">
						{#each skills as skill}
							<span class={`tag is-medium is-${skill.colorClass}`}>
								{#if skill.iconClass.length > 0}
									<Icomoon name={skill.iconClass} mr />
								{/if}
								{skill.title}
							</span>
						{/each}
					</div>
				{:else}
					<p class="invalid-skill-wrapper has-text-centered has-background-light">
						💩 I don't know {@html skillSearchValueHTML} yet.<br /><strong
							>But I can learn it!</strong
						>
					</p>
				{/if}
			</ScrollContainer>
		</div>
	</div>
</Section>

<style>
	.invalid-skill-wrapper {
		padding: 1.125rem;
		border-radius: 4px;
	}

	i.icomoon {
		margin-right: 0.375rem;
	}
</style>
