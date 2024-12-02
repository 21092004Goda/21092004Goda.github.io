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
            listItem.remove(); // Удаляем задачу из списка
            saveTasks(); // Пересохраняем задачи после удаления
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
        alert('Tasks saved!');
    });

    // Функция для загрузки задач из localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('findClothesTasks')) || [];
        findClothesList.innerHTML = ''; // Очищаем список перед загрузкой новых задач
        tasks.forEach((task) => {
            addTask(task.text, task.completed); // Добавляем задачи с состоянием (выполнена или нет)
        });
        alert('Tasks loaded!');
    }

    // Обработчик на кнопку "Load"
    loadButton.addEventListener('click', loadTasks);
});
