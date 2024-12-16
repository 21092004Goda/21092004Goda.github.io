document.addEventListener('DOMContentLoaded', function() {
    if (!sessionStorage.getItem('profilePictureShown')) {
        Swal.fire({
            title: "Profile Picture", // Заголовок окна
            text: "Hey, I see you...", // Основной текст
            imageUrl: "https://images3.imgbox.com/4f/e6/wOhuryw6_o.jpg", // Изображение для отображения
            imageWidth: 550, // Ширина изображения
            imageHeight: 225, // Высота изображения
            imageAlt: "Eagle Image", // Альтернативный текст для изображения, если оно не загрузится
            confirmButtonText: "Who are you?", // Текст на кнопке подтверждения
            confirmButtonColor: "#00ff55",  // Цвет кнопки подтверждения
            showCancelButton: false,  // Отключаем кнопку отмены
        }).then(function() {
            sessionStorage.setItem('profilePictureShown', 'true');
        });
    }
});
