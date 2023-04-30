export function load() {
	const repos = getRepos();

	return { repos };
}

function getRepos() {
	const repos = fetch('https://api.github.com/users/aaronm-git/repos')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok. Too many Github requests.');
			}
			return response.json();
		})
		.then((response) => {
			return response
				.map((repo) => ({
					id: repo.id,
					name: repo.name,
					updated_at: repo.updated_at,
					html_url: repo.html_url,
					icon: repo.fork ? 'tree' : 'book',
					fork: repo.fork
				}))
				.sort((a, b) => (new Date(a.updated_at) < new Date(b.updated_at) ? 1 : -1));
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
	return repos;
}

// import REPOS from '$constants/REPOS.json';

// function getTestRepos() {
// 	const repos = REPOS.map((repo) => ({
// 		id: repo.id,
// 		name: repo.name,
// 		updated_at: repo.updated_at,
// 		html_url: repo.html_url,
// 		icon: repo.fork ? 'tree' : 'book',
// 		fork: repo.fork
// 	})).sort((a, b) => (new Date(a.updated_at) < new Date(b.updated_at) ? 1 : -1));
// 	return repos;
// }
