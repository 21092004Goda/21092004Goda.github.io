(function() {
    const btn = document.createElement('button');
    btn.innerText = 'Наверх';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.right = '20px';
    btn.style.display = 'none';
    btn.style.backgroundColor = '#007bff';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.padding = '10px';
    btn.style.borderRadius = '5px';
    btn.style.cursor = 'pointer';

    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });
})();
