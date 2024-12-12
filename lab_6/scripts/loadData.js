document.addEventListener('DOMContentLoaded', () => {
    loadData(); // Инициализация загрузки данных после загрузки страницы
});

function loadData() {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.products-grid'); // Исправлено с getElementById на querySelector

    // Показываем анимацию загрузки
    preloader.style.opacity = 1; // Показываем preloader
    container.style.opacity = 0; // Скрываем контейнер товаров
    container.style.transition = 'opacity 0.3s'; // Плавный переход для container


    // Псевдослучайная фильтрация: выбираем комментарии с id больше 100 или меньше 200
    const randomId = Math.random() < 0.5 ? 50 : 200;
    const url = `https://jsonplaceholder.typicode.com/comments?_start=${randomId}&_limit=10`;

    // Запрос данных
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json(); // Десериализация JSON
        })
        .then(data => {
            // Скрываем анимацию и показываем контейнер с данными
            preloader.style.opacity = 0; // Скрываем preloader
            container.style.opacity = 1; // Показываем контейнер товаров


            // Рендерим полученные данные
            renderProducts(data);
        })
        .catch(error => {
            // Обработка ошибки (например, нет сети)
            preloader.style.display = 'none';
            const errorMessage = document.createElement('p');
            errorMessage.textContent = '⚠ Что-то пошло не так';
            container.appendChild(errorMessage);
        });
}

// Функция для рендеринга полученных товаров
function renderProducts(comments) {
    const container = document.querySelector('.products-grid'); // Исправлено с getElementById на querySelector
    container.innerHTML = '';  // Очищаем контейнер перед рендером

    // Массив возможных картинок
    const images = [
        "../../../picture/xb3up1fedir8yzxxj5r6mvv5d3hf29r3o.webp.pagespeed.ic.ZFpn4GY4R9.webp",
        "../../../picture/xgiqs4sqeyvawywlfytffvcsog9oj5p1z.webp.pagespeed.ic.gRZEIRkJ7z.webp",
        "../../../picture/xbpekvnsidu3ylrc0mfig28vijhnk18fw.webp.pagespeed.ic.vr3KDpAjxu.webp",
        "../../../picture/x2zvog2mmljc4r3j315c2v0o2mg85kzjf.webp.pagespeed.ic.D7m2mWeoY7.webp",
        "../../../picture/xb3up1fedir8yzxxj5r6mvv5d3hf29r3o.webp.pagespeed.ic.ZFpn4GY4R9.webp"
    ];

    comments.forEach(comment => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');

        // Случайным образом выбираем картинку из массива
        const randomImage = images[Math.floor(Math.random() * images.length)];

        productElement.innerHTML = `
            <img src="${randomImage}" alt="${comment.name}" class="product__image">
            <div class="product__info">
                <a href="page3.html" class="product__name">${comment.email}</a>
                <p class="product__price">${comment.id}₽</p>
            </div>
        `;

        container.appendChild(productElement);
    });
}
