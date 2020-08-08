function loadHtml(location, element, replace = true) {
	let request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		let response;
		if (this.readyState == 4) {
			if (this.status == 200) {
				response = this.responseText;
			} else {
				response = "Unable to load: " + location;
			}
		}
		if (response) {
			if (replace) {
				element.outerHTML = response;
			} else {
				element.innerHTML = response;
			}
		}
	}
	
	request.open("GET", location, true);
	request.send();
}

function loadHtmlInId(location, id, replace) {
	loadHtml(location, document.getElementById(id), replace);
}

document.addEventListener("DOMContentLoaded", function() {
	let elements = document.getElementsByTagName("*");
	for (let i in elements) {
		if (elements[i].hasAttribute && elements[i].hasAttribute("include-html")) {
			loadHtml(elements[i].getAttribute("include-html"), elements[i]);
		}
	}
});
