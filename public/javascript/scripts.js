window.addEventListener(
  "load",
  function () {
    // github API logic
    (async function () {
      const websiteId = 255731256;
      const repos = await fetch("https://api.github.com/users/aaronm-git/repos").then((res) => res.json());
      console.log(repos);
      const panelLinksContainer = document.getElementById("panel-links-container");
      repos.sort((a, b) => (new Date(a.updated_at) < new Date(b.updated_at) ? 1 : -1));
      repos.forEach((repo) => {
        const panelLinkHTML = stringToHTML(getPanelLinkHTML());
        panelLinkHTML.setAttribute("href", repo.html_url);
        let iClassList = panelLinkHTML.querySelector("i").classList;
        repo.fork ? iClassList.add("fas", "fa-code-branch") : iClassList.add("fas", "fa-book");
        panelLinkHTML.querySelector("span.repoName").innerText = repo.name;
        if (websiteId === repo.id) {
          const tagHTML = stringToHTML(
            `<div class="tags" style="margin-left: 1rem;"><span class="tag is-success is-light heading">this Website</span></div>`
          );
          panelLinkHTML.append(tagHTML);
        }
        panelLinksContainer.append(panelLinkHTML);
      });
    })();

    // navbar burger logic
    (function () {
      document.addEventListener("DOMContentLoaded", () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      });
    })();

    // anchor smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    // tilt.js init
    (function () {
      const element = document.querySelector(".js-tilt");
      VanillaTilt.init(element);
    })();
  },
  { once: true }
);

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

window.addEventListener("scroll", function () {
  const el = document.getElementById("top-botton");
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
