toastr.options = {
    "closeButton": true, // Кнопка для закрытия уведомления
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right", // Позиция уведомления
    "preventDuplicates": true,
    "showDuration": "300", // Время появления
    "hideDuration": "1000", // Время исчезновения
    "timeOut": "5000", // Время отображения
    "extendedTimeOut": "1000", // Дополнительное время после наведения
    "showEasing": "swing", // Эффект показа
    "hideEasing": "linear", // Эффект скрытия
    "showMethod": "fadeIn", // Эффект появления
    "hideMethod": "fadeOut" // Эффект исчезновения
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('find-clothes-form');
    const taskInput = document.getElementById('task');
    const findClothesList = document.getElementById('find-clothes-list');
    const saveButton = document.getElementById('save-tasks');
    const loadButton = document.getElementById('load-tasks');

    // Функция для добавления задачи в список
    function addTask(taskText, isCompleted = false) {
        const listItem = document.createElement('li');
        listItem.classList.add('find-clothes__item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('find-clothes__checkbox');
        checkbox.checked = isCompleted;

        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
        taskLabel.classList.add('find-clothes__text');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('find-clothes__delete');
        deleteButton.addEventListener('click', () => {
            // Удаляем задачу из списка
            listItem.remove();
            saveTasks(); // Пересохраняем задачи после удаления

            // Показываем уведомление о том, что задача удалена
            toastr.success('Задача удалена!'); // Уведомление Toastr
        });

        // Обработчик изменения состояния чекбокса
        checkbox.addEventListener('change', () => {
            saveTasks(); // Сохраняем задачи после изменения состояния чекбокса
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteButton);

        findClothesList.appendChild(listItem);

        // Плавное добавление
        setTimeout(() => {
            listItem.style.opacity = 1;
            listItem.style.transform = 'translateY(0)';
        }, 10); // Маленькая задержка, чтобы анимация начала работать

        // Показываем уведомление о добавленной задаче
        toastr.info('Задача добавлена!'); // Уведомление Toastr при добавлении
    }

    // Слушатель на отправку формы
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText); // Добавляем новую задачу
            taskInput.value = ''; // Очищаем поле ввода
            saveTasks(); // Сохраняем задачи после добавления
        }
    });

    // Функция для сохранения задач в localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.find-clothes__item').forEach((item) => {
            const taskText = item.querySelector('.find-clothes__text').textContent;
            const isCompleted = item.querySelector('.find-clothes__checkbox').checked;
            tasks.push({ text: taskText, completed: isCompleted });
        });
        localStorage.setItem('findClothesTasks', JSON.stringify(tasks));
    }

    // Обработчик на кнопку "Save"
    saveButton.addEventListener('click', () => {
        saveTasks();
    });

    // Функция для загрузки задач из localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('findClothesTasks')) || [];
        findClothesList.innerHTML = ''; // Очищаем список перед загрузкой новых задач
        tasks.forEach((task) => {
            addTask(task.text, task.completed); // Добавляем задачи с состоянием (выполнена или нет)
        });
    }

    // Обработчик на кнопку "Load"
    loadButton.addEventListener('click', loadTasks);

    // Загрузка задач при первой загрузке страницы (при перезагрузке)
    loadTasks();
});
