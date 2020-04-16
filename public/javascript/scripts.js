// nav-burger logic
{
  document.addEventListener("DOMContentLoaded", () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
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
// To top button
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
// Modal logic
{
  const buttons = document.querySelectorAll("[data-target-modal]");
  buttons.forEach((btn) => {
    const modal = document.getElementById(btn.dataset.targetModal);
    btn.addEventListener("click", (e) => {
      modal.classList.add("is-active");
      document.querySelector("html").classList.add("is-clipped");
    });
    modal.querySelector(".modal-close").addEventListener("click", (e) => {
      modal.classList.remove("is-active");
      document.querySelector("html").classList.remove("is-clipped");
    });
  });
}
// anchor smooth scroll
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
// github API logic
(async () => {
  const websiteId = 255731256;
  const repos = await fetch("https://api.github.com/users/aaronm-git/repos").then((res) => res.json());
  const panelLinksContainer = document.getElementById("panel-links-container");
  repos.sort((a, b) => (new Date(a.updated_at) < new Date(b.updated_at) ? 1 : -1));
  repos.forEach((repo) => {
    const panelLinkHTML = stringToHTML(getPanelLinkHTML());
    panelLinkHTML.setAttribute("href", repo.html_url);
    const iClassList = panelLinkHTML.querySelector("i").classList;
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

// utils
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
