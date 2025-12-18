		// Menu Toggler Logic
		const menuToggler = document.querySelector('.menu-toggler');
		const offcanvasMenu = document.querySelector('.offcanvas-menu');

		function toggleMenu() {
			menuToggler.classList.toggle('active');
			offcanvasMenu.classList.toggle('open');
		}

		menuToggler.addEventListener('click', toggleMenu);
