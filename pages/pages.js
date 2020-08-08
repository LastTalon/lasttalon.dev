document.addEventListener("DOMContentLoaded", function() {
	function createNavLink(name, href) {
		const li = document.createElement("LI");
		const a = document.createElement("A");
		if (!href) {
			href = "?content=" + encodeURIComponent(name);
		}
		a.setAttribute("href", href);
		a.innerText = name;
		li.appendChild(a);
		return li;
	}
	
	let contents = {};
	let index;
	let content;
	
	const elements = document.getElementsByClassName("content");
	const title = document.getElementById("page-title");
	const nav = document.getElementById("page-navigation");
	const params = new URLSearchParams(document.location.search.substring(1));
	
	content = decodeURIComponent(params.get("content"));
	
	for (const i in elements) {
		if (elements[i].tagName == "LINK" && elements[i].hasAttribute
			&& elements[i].hasAttribute("href") && elements[i].hasAttribute("name")) {
			const name = elements[i].getAttribute("name");
			contents[name] = elements[i].getAttribute("href");
			if (!index && elements[i].hasAttribute("id")) {
				if (elements[i].getAttribute("id") == "content-index") {
					index = name;
				}
			}
		}
	}
	
	if (nav) {
		const bar = document.createElement("DIV");
		const list = document.createElement("UL");
		bar.className = "bar";
		for (const i in contents) {
			let link;
			if (i == index) {
				link = ".";
			}
			list.appendChild(createNavLink(i, link));
		}
		bar.appendChild(list);
		nav.appendChild(bar);
	}
	
	if ((!content || !(content in contents)) && index) {
		content = index;
	}
	
	if (content) {
		if (title) {
			title.innerText = content;
		}
		loadHtmlInId(contents[content], "page-content");
	}
});
