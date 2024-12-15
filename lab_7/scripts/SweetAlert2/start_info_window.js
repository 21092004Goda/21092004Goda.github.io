document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, показывалось ли окно ранее
    if (!localStorage.getItem('profilePictureShown')) {
        Swal.fire({
            title: "Profile Picture", // Заголовок окна
            text: "Hey, I see you...", // Текст
            imageUrl: "https://images3.imgbox.com/4f/e6/wOhuryw6_o.jpg", // Изображение
            imageWidth: 550, // Ширина изображения
            imageHeight: 225, // Высота изображения
            imageAlt: "Eagle Image", // Альтернативный текст для изображения
            confirmButtonText: "Who are you?", // Текст на кнопке
            confirmButtonColor: "#00ff55",  // Цвет кнопки
            showCancelButton: false,  // Убираем кнопку отмены
        }).then(function() {
            // После того, как окно будет закрыто, сохраняем флаг в localStorage
            localStorage.setItem('profilePictureShown', 'true');
        });
    }
});
