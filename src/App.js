import React,{ useEffect } from 'react';
import { Router } from 'react-router-dom';
import $ from 'jquery';
import Routes from './Routes';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  useEffect(() => {
		// Enable Bootstrap tooltips via data-attributes globally
		$('[data-toggle="tooltip"]').tooltip();

		// Enable Bootstrap popovers via data-attributes globally
		$('[data-toggle="popover"]').popover();

		$('.popover-dismiss').popover({
			trigger: 'focus',
		});

		// Add active state to sidbar nav links
		var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
		$('#layoutSidenav_nav .sidenav a.nav-link').each(function () {
			if (this.href === path) {
				$(this).addClass('active');
			}
		});

		// Toggle the side navigation
		$('#sidebarToggle').on('click', function (e) {
			e.preventDefault();
			$('body').toggleClass('sidenav-toggled');
		});

		// Activate Feather icons
		// feather.replace();

		// Activate Bootstrap scrollspy for the sticky nav component
		$('body').scrollspy({
			target: '#stickyNav',
			offset: 82,
		});

		// Scrolls to an offset anchor when a sticky nav link is clicked
		$('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
			if (
				window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
				window.location.hostname === this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate(
						{
							scrollTop: target.offset().top - 81,
						},
						200
					);
					return false;
				}
			}
		});

		// Click to collapse responsive sidebar
		$('#layoutSidenav_content').click(function () {
			// const BOOTSTRAP_LG_WIDTH = 992;
			if (window.innerWidth >= 992) {
				return;
			}
			if ($('body').hasClass('sidenav-toggled')) {
				$('body').toggleClass('sidenav-toggled');
			}
		});

		// Init sidebar
		let activatedPath = window.location.pathname.match(/([\w-]+\.html)/, '$1');

		if (activatedPath) {
			activatedPath = activatedPath[0];
		} else {
			activatedPath = 'index.html';
		}

		let targetAnchor = $('[href="' + activatedPath + '"]');
		let collapseAncestors = targetAnchor.parents('.collapse');

		targetAnchor.addClass('active');

		collapseAncestors.each(function () {
			$(this).addClass('show');
			$('[data-target="#' + this.id + '"]').removeClass('collapsed');
		});
	}, []);
  return (
    <Router history={history} >
			<Routes />
		</Router>
  );
}

export default App;
