const menuButton = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        function closeMenu() {
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', 'Open navigation');
            navLinks.classList.remove('is-open');
        }

        menuButton.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
            navLinks.classList.toggle('is-open', !isOpen);
        });

        navLinks.addEventListener('click', (event) => {
            if (event.target.closest('a')) closeMenu();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
                closeMenu();
                menuButton.focus();
            }
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('nav')) closeMenu();
        });

        window.matchMedia('(max-width: 750px)').addEventListener('change', closeMenu);
        document.documentElement.classList.add('js');
