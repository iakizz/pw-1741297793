/* File JavaScript specifico per la navbar ed il menu mobile responsivo */

let hamburger = document.getElementById('hamburger');
let links = document.getElementById('links');
let main = document.querySelector('main');

// Event Listeners

// Quando il menu hamburger viene cliccato, nasconde o mostra i link
hamburger.addEventListener('click', hideLinks);
// Quando il menu hamburger viene cliccato, cambia lo stato  da menu a 'X' e viceversa
hamburger.addEventListener('click', changeMenuState);

// Nasconde il menu mobile al click su uno dei link
let link = document.querySelectorAll('ul#links > *');
for (let i = 0; i < link.length; i++) {
	let allLinks = link[i];
	allLinks.addEventListener('click', hideLinks);
	allLinks.addEventListener('click', removeActive);
}

// Nasconde il menu mobile al click su un qualsiasi punto della pagina al di fuori del menu stesso
main.addEventListener('click', hideLinksOnly);
main.addEventListener('click', removeActive);

// Funzioni per gestire la visibilità del menu e lo stato del pulsante hamburger
function hideLinks() {
	if (links.classList.contains('hidden')) {
		links.classList.remove('hidden');
	} else {
		links.classList.add('hidden');
	}
}
function hideLinksOnly() {
	if (links.classList.contains('hidden') === false) {
		links.classList.add('hidden');
	}
}
function changeMenuState() {
	hamburger.classList.toggle('active');
}
function removeActive() {
	hamburger.classList.remove('active');
}
