import ghpages from 'gh-pages';

ghpages.publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/aaronm-git/aaronm-git.github.io.git', // Update to point to your repository
		user: {
			name: 'Aaron Molina', // update to use your name
			email: '28906210+aaronm-git@users.noreply.github.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
