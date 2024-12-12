document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM content loaded");

    const titles = {
        all_products: "Товары",
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

    const params = new URLSearchParams(window.location.search);
    const page = params.get("page"); // ожидается параметр "?page=название"

    // Меняем заголовок на странице
    const titleElement = document.getElementById("trash");
    if (page && titles[page]) {
        titleElement.textContent = titles[page];
    } else {
        titleElement.textContent = "Товары";
    }
});
