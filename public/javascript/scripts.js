window.addEventListener(
  "load",
  function () {
    const websiteId = 255731256;
    (async function () {
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
            `<div class="tags" style="margin-left: 1rem;"><span class="tag is-primary">This Website</span></div>`
          );
          panelLinkHTML.append(tagHTML);
        }
        panelLinksContainer.append(panelLinkHTML);
      });
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
