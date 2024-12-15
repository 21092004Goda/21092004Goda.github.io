document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.products-grid');
    const errorMessage = document.getElementById('error-message');

    // Показываем анимацию загрузки
    preloader.style.opacity = 1;
    container.style.opacity = 0;
    container.style.transition = 'opacity 0.3s';


    const randomId = Math.random() < 0.5 ? 50 : 200;
    const url = `https://jsonplaceholder.typicode.com/comments?_start=${randomId}&_limit=10`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            console.log('Данные получены:', data);

            preloader.style.opacity = 0;
            container.style.opacity = 1;

            renderProducts(data);
            errorMessage.style.display = 'none';
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
            preloader.style.opacity = 0;
            container.style.opacity = 1;
            errorMessage.style.display = 'block';
        });
}

function renderProducts(comments) {
    const container = document.querySelector('.products-grid');
    container.innerHTML = '';

    console.log('Данные для рендеринга:', comments);

    // Массив возможных картинок
    const images = [
        "../../picture/xb3up1fedir8yzxxj5r6mvv5d3hf29r3o.webp.pagespeed.ic.ZFpn4GY4R9.webp",
        "../../picture/xgiqs4sqeyvawywlfytffvcsog9oj5p1z.webp.pagespeed.ic.gRZEIRkJ7z.webp",
        "../../picture/xbpekvnsidu3ylrc0mfig28vijhnk18fw.webp.pagespeed.ic.vr3KDpAjxu.webp",
        "../../picture/x2zvog2mmljc4r3j315c2v0o2mg85kzjf.webp.pagespeed.ic.D7m2mWeoY7.webp",
        "../../picture/xb3up1fedir8yzxxj5r6mvv5d3hf29r3o.webp.pagespeed.ic.ZFpn4GY4R9.webp"
    ];

    comments.forEach(comment => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');

        // Случайным образом выбираем картинку из массива
        const randomImage = images[Math.floor(Math.random() * images.length)];

        productElement.innerHTML = `
            <img src="${randomImage}" alt="${comment.name}" class="product__image">
            <div class="product__info">
                <a href="page3.html" class="product__name">${comment.email.split('@')[0]}</a>
                <p class="product__price">${comment.id}₽</p>
            </div>
        `;

        container.appendChild(productElement);
    });
}
