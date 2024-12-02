const links = document.querySelectorAll('.main-nav__link');

// Получаем текущий URL страницы
const currentLocation = document.location.href;

// Проходим по всем ссылкам
links.forEach(link => {
    // Проверяем, если ссылка содержит текущий URL
    if (currentLocation.includes(link.href)) {
        link.classList.add('active');  // Добавляем класс "active"
    }

    link.addEventListener('mouseover', () => {
        link.classList.add('with-shadow');  // Добавляем тень при наведении
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('with-shadow');  // Убираем тень при уходе
    });
});
