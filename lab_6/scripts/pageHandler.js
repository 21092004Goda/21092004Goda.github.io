document.addEventListener("DOMContentLoaded", () => {
    const titles = {
        all_products: "Все товары",
        new_products: "Новинки",
        bestsellers: "Бестселлеры",
        swimwear: "Купальники",
        sexy: "Sexy",
        bras: "Бюстгальтеры",
        pants: "Трусы",
        collections: "Коллекции",
        body: "Боди",
        cotton: "Хлопок",
        silk: "Шелк",
        underwear: "Белье",
        seamless: "Бесшовное",
        lingerie: "Нижнее белье",
        clothes: "Одежда",
        socks: "Носки",
        tights: "Колготки",
        shoes: "Обувь",
        for_children: "Детям",
        for_men: "Мужчинам",
    };

    // Получаем параметр из URL
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page"); // ожидается параметр "?page=название"

    // Меняем заголовок на странице
    const titleElement = document.getElementById("page-title");
    if (page && titles[page]) {
        titleElement.textContent = titles[page];
    } else {
        titleElement.textContent = "Товары"; // значение по умолчанию
    }

    // Меняем ссылки на актуальный URL
    const links = document.querySelectorAll("a.main-nav__link, a.footer__nav-link");
    links.forEach(link => {
        const pathParts = link.href.split("/");
        const targetPage = pathParts[pathParts.length - 2]?.replace("page_", ""); // Извлекаем ключ из пути
        if (titles[targetPage]) {
            link.href = `/lab_6/pages/header_container_two/page.html?page=${targetPage}`;
        }
    });
});
