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

    // Получаем параметры из URL
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page"); // ожидается параметр вида "?page=new_products"

    // Меняем заголовок в зависимости от значения параметра
    const titleElement = document.getElementById("page-title");
    if (page && titles[page]) {
        titleElement.textContent = titles[page];
    } else {
        titleElement.textContent = "Товары"; // значение по умолчанию
    }
});
