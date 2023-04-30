<script>
	import Icomoon from '$components/shared/Icomoon.svelte';
	import ScrollContainer from '$components/shared/ScrollContainer.svelte';
	import Search from '$components/shared/Search.svelte';
	import Section from '$components/shared/Section.svelte';

	const sectionOptions = {
		id: 'projects',
		title: 'Projects',
		imageUrl: 'projects.svg',
		imageAlt: 'Projects',
		imagePosition: 'right',
	};

	export let data;

	$: repos = data;
	$: search = '';
	$: tabs = [
		{ name: 'All', active: true },
		{ name: 'Public', active: false },
		// { name: 'Private', active: false },
		// { name: 'Sources', active: false },
		{ name: 'Forks', active: false }
	];

	$: {
		filterRepos(search, tabs);
	}

	function filterRepos() {
		let filteredRepos = filterReposByTabName(data);
		filteredRepos = filterReposBySearch(search, filteredRepos);
		repos = filteredRepos;
	}

	function selectFilter(tabName) {
		tabs = tabs.map((tab) => ({
			...tab,
			active: tab.name === tabName
		}));
	}

	function filterReposByTabName(repos) {
		return repos.filter((repo) => {
			if (tabs[0].active) return repo;
			if (tabs[1].active && !repo.fork) return repo;
			if (tabs[2].active && repo.fork) return repo;
		});
	}

	function filterReposBySearch(query, repos) {
		return repos.filter((repo) => {
			if (repo.name.toLowerCase().includes(query.toLowerCase())) return repo;
		});
	}

	function handleSearch(e) {
		const query = e.detail;
		search = query.trim();
	}
</script>

<Section {...sectionOptions}>
	<div class="reverse-columns-mobile-only columns">
		<div class="column">
			<article class="panel is-dark has-background-white">
				<p class="panel-heading">
					<Icomoon name="git" mr />My Repositories
				</p>
				<p class="panel-tabs">
					{#each tabs as tab}
						<a
							href="javascript:void(0)"
							class={tab.active ? 'is-active' : ''}
							on:click={() => selectFilter(tab.name)}
						>
							{tab.name}
						</a>
					{/each}
				</p>

				<div class="panel-block">
					<Search on:type={handleSearch} />
				</div>

				<ScrollContainer height="200px">
					{#each repos as repo}
						<a class="panel-block" href={repo.html_url} rel="external" target="_blank">
							<span class="panel-icon">
								{#if repo.icon === 'book'}
									<Icomoon name="book" mr />
								{:else}
									<Icomoon name="tree" mr />
								{/if}
							</span>
							{repo.name}
						</a>
					{/each}
					{#if repos.length == 0}
						<div class="panel-block is-justify-content-center">
							<p class="has-text-grey">
								🫥 No results found in "{tabs.find((tab) => tab.active).name}".
							</p>
						</div>
					{/if}
				</ScrollContainer>

				<div class="panel-block" style="justify-content: space-between">
					<a
						href="https://developer.github.com/v3/repos/#list-repositories-for-a-user"
						rel="external"
						target="_blank"
						class="has-text-grey is-size-7"
					>
						Powered By
						<img
							src="github-logo.png"
							alt=""
							class="is-inline"
							style="height: 1.5rem; position: relative; top: 6px"
						/>
						API
					</a>
				</div>
			</article>
		</div>
	</div>
</Section>
