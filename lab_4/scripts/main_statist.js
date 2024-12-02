(function () {
    document.addEventListener('DOMContentLoaded', () => {
        const loadTime = performance.now();
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }
        footer.textContent = `Page loaded in ${loadTime.toFixed(2)} ms`;

        const currentLocation = document.location.href;
        const currentPage = document.location.pathname.split('/').pop();

        document.querySelectorAll('.main-nav__link').forEach(link => {
            if (currentLocation.includes(link.href) || link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }

            link.addEventListener('mouseover', () => {
                link.classList.add('with-shadow');
            });

            link.addEventListener('mouseout', () => {
                link.classList.remove('with-shadow');
            });
        });
    });
})();
