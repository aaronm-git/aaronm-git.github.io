//  NOTE dynamic copyright year
document
	.getElementById("copyright")
	.appendChild(document.createTextNode(new Date().getFullYear()));

{
	new Typed("#typed", {
		strings: [
			"Full-Stack Web Developer.",
			"Experienced Web Designer.",
			"Creative Problem Solver.",
			"Lifelong Learner.",
			"JAM Stack Developer.",
			"Open Source Contributor.",
			"MERN Stack Developer.",
		],
		typeSpeed: 30,
		loop: true,
		backDelay: 1500,
	});
}

//ANCHOR nav-burger logic
{
	document.addEventListener("DOMContentLoaded", () => {
		// Get all "navbar-burger" elements
		const $navbarBurgers = Array.prototype.slice.call(
			document.querySelectorAll(".navbar-burger"),
			0
		);
		// Check if there are any navbar burgers
		if ($navbarBurgers.length > 0) {
			// Add a click event on each of them
			$navbarBurgers.forEach((el) => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);
				el.addEventListener("click", () => {
					// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
					el.classList.toggle("is-active");
					$target.classList.toggle("is-active");
				});
				// close burger after clicking a link
				$target.querySelectorAll(".navbar-start a").forEach((anchor) =>
					anchor.addEventListener("click", (e) => {
						el.classList.toggle("is-active");
						$target.classList.toggle("is-active");
					})
				);
			});
		}
	});
}
//ANCHOR To top button
{
	window.addEventListener("scroll", function () {
		const el = document.getElementById("top-button");
		if (window.scrollY > 600) {
			if (el.classList.contains("is-hidden")) {
				el.classList.remove("is-hidden");
			}
		} else {
			if (!el.classList.contains("is-hidden")) {
				el.classList.add("is-hidden");
			}
		}
	});
}
//ANCHOR Modal logic
{
	const buttons = document.querySelectorAll("[data-target-modal]");
	buttons.forEach((btn) => {
		const modal = document.getElementById(btn.dataset.targetModal);
		btn.addEventListener("click", (e) => {
			modal.classList.add("is-active");
			document.querySelector("html").classList.add("is-clipped");
		});
		modal.querySelectorAll(".modal-close, .modal-background").forEach((el) => {
			el.addEventListener("click", (e) => {
				modal.classList.remove("is-active");
				document.querySelector("html").classList.remove("is-clipped");
			});
		});
	});
}
//ANCHOR anchor smooth scroll
{
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});
}
//ANCHOR github API logic
(async () => {
	const websiteId = 255731256;
	const repos = await fetch(
		"https://api.github.com/users/aaronm-git/repos"
	).then((res) => res.json());
	const panelLinksContainer = document.getElementById("panel-links-container");
	repos.sort((a, b) =>
		new Date(a.updated_at) < new Date(b.updated_at) ? 1 : -1
	);
	repos.forEach((repo) => {
		const panelLinkHTML = stringToHTML(getPanelLinkHTML());
		panelLinkHTML.setAttribute("href", repo.html_url);
		const iClassList = panelLinkHTML.querySelector("i").classList;
		repo.fork
			? iClassList.add("fas", "fa-code-branch")
			: iClassList.add("fas", "fa-book");
		panelLinkHTML.querySelector("span.repoName").innerText = repo.name;
		if (websiteId === repo.id) {
			const tagHTML = stringToHTML(
				`<div class="tags" style="margin-left: 1rem;"><span class="tag is-primary is-light heading">this Website</span></div>`
			);
			panelLinkHTML.append(tagHTML);
		}
		panelLinksContainer.append(panelLinkHTML);
	});
})();

(() => {
	const skillContainerHTML = document.getElementById("skill-container");
	skills
		// .sort((a, b) => a.title.localeCompare(b.title))
		.forEach((skill) => {
			const skillHTML = getSkillHTML(skill);
			skillContainerHTML.innerHTML = skillContainerHTML.innerHTML + skillHTML;
		});
})();

//ANCHOR Skill Search Logic
{
	const searchInput = document.getElementById("search-skills");
	const tags = document.querySelectorAll("#skill-container .tag");
	const noResultsEl = document.getElementById("no-skill");
	const container = document.getElementById("skill-container");
	// Add onkeyup function on search input
	searchInput.onkeyup = (e) => {
		// Initialize RegExp with dynamic variable and case insensetive
		const regex = new RegExp(`${searchInput.value}`, "i");
		// Test each elementNode for regex match
		tags.forEach((tag) =>
			tag.innerText.match(regex)
				? tag.classList.remove("is-hidden")
				: tag.classList.add("is-hidden")
		);
		// If no matches return, show conditional element
		document.querySelectorAll("#skill-container .tag.is-hidden").length ===
		document.querySelectorAll("#skill-container .tag").length
			? (noResultsEl.classList.remove("is-hidden"),
			  container.classList.add("is-hidden"))
			: (noResultsEl.classList.add("is-hidden"),
			  container.classList.remove("is-hidden"));
	};
}

function getSkillHTML(skill) {
	return `
  <span class="tag is-medium is-${skill.colorClass}">
  ${
		skill.iconClass &&
		` <span class="icon">
  <i class="${skill.iconClass}"></i>
</span>`
	}
  <span class="has-text-weight-medium">${skill.title}</span>
</span>`;
}

//ANCHOR utils
function stringToHTML(str) {
	var dom = document.createElement("div");
	dom.innerHTML = str;
	return dom.firstChild;
}

function getPanelLinkHTML() {
	return `<a class="panel-block" href="">
      <span class="panel-icon">
        <i class="" aria-hidden="true"></i>
      </span>
      <span class="repoName"></span>
    </a>`;
}

function expandRepos() {
	const button = document.getElementById("expandRepos");
	const container = document.getElementById("panel-links-container");
	if (button.classList.contains("active")) {
		button.innerHTML = "<i class='fas fa-caret-down'></i>";
		button.classList.remove("active");
		container.style.height = "164px";
	} else {
		button.innerHTML = "<i class='fas fa-caret-up'></i>";
		button.classList.add("active");
		container.style.height = "auto";
	}
	// hideRepos();
}

// function hideRepos(){
//   const button = document.getElementById("expandRepos");
//   const container = document
//   .getElementById("expandRepos")
//   .closest("#panel-links-container");
//   const repos = container.children;
//   for (let i = 0; i < repos.length - 1; i++) {
//     const repo = repos[i];
//     if (i > 4 && !button.classList.contains("active")) {
//       repo.classList.add("is-hidden");
//     } else {
//       repo.classList.remove("is-hidden");
//     }
//   }
// }

// hideRepos();
