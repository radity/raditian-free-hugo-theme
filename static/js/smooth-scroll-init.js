const scroll = new SmoothScroll('a[href*="#"]');
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
    const navbar = document.querySelectorAll('.navbar-collapse');
    if (navbar && navbar.hasClass('show')) {
      simulateClick(document.querySelector('.navbar-toggler'));
    }
  });    
});

/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 * @see https://gomakethings.com/how-to-simulate-a-click-event-with-javascript/
 */
var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};