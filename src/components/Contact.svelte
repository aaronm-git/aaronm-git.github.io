<script>
	import Icomoon from '$components/shared/Icomoon.svelte';
	import Section from '$components/shared/Section.svelte';
	const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

	const sectionOptions = {
		id: 'contact',
		title: 'Contact',
		noPadding: true,
	};
</script>

<section class="hero is-primary is-bold">
	<div class="hero-body">
		<div class="container">
			<Section {...sectionOptions}>
				<div class="columns is-vcentered is-centered">
					<div class="box column is-two-fifths">
						<form action={formspreeEndpoint} method="POST">
							<div class="field">
								<label class="label" for="formspree-name">Name</label>
								<div class="control">
									<input
										id="formspree-name"
										class="input"
										type="text"
										placeholder="Your first name and last name"
										name="name"
										required
									/>
								</div>
							</div>
							<div class="field">
								<label class="label" for="formspree-email">Email</label>
								<div class="control has-icons-left has-icons-right">
									<input
										id="formspree-email"
										class="input"
										type="email"
										placeholder="Your email"
										name="_replyto"
										required
									/>
									<span class="icon is-small is-left">
										<Icomoon name="mail2" />
									</span>
								</div>
							</div>
							<div class="field">
								<label class="label" for="formspree-message">Message</label>
								<div class="control">
									<textarea
										id="formspree-message"
										class="textarea"
										placeholder="Your message"
										name="message"
										required
									/>
								</div>
							</div>
							<input
								class="input"
								type="hidden"
								value="aaronm-git.github.io: Contact Form Submission"
								name="_subject"
							/>
							<div class="field is-grouped is-justify-content-space-between">
								<p class="control">
									<button class="button is-primary">
										<Icomoon name="mail3" mr />
										<span>Send</span>
									</button>
								</p>
								<p class="control">
									<a
										href="https://formspree.io"
										class="has-text-grey"
										rel="external noreferrer"
										target="_blank"
									>
										<small>Powered By</small>
										<img
											src="/images/formspree-logo.png"
											alt="powered by formspree.io"
											style="
												height: 22px;
												margin-left: 6px;
												position: relative;
												top: 6px;
											"
										/>
									</a>
								</p>
							</div>
						</form>
					</div>
				</div>
			</Section>
		</div>
	</div>
</section>
