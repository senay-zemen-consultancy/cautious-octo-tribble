function removeHighlights() {
    document.querySelectorAll(".highlight").forEach(el => {
        el.outerHTML = el.innerText; // remove highlight spans
    });
}

function highlightText(node, text) {
    let innerHTML = node.innerHTML;
    let regex = new RegExp(`(${text})`, "gi");
    node.innerHTML = innerHTML.replace(regex, `<span class="highlight">$1</span>`);
}

function searchText() {
    removeHighlights();
    let text = document.getElementById("searchInput").value.trim();
    if (!text) return;

    let found = false;

    document.querySelectorAll("p, h1, h2, h3, h4, h5, h6").forEach(el => {
        if (el.innerText.match(new RegExp(text, "i"))) {
            highlightText(el, text);
            if (!found) {
                el.scrollIntoView({behavior: "smooth", block: "center"});
                found = true;
            }
        }
    });

    if (!found) {
        alert("No match found");
    }
}
