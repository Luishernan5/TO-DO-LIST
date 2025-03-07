document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const taskDateInput = document.getElementById('task-date');
    const taskTimeInput = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (taskInput.value.trim() !== '' && taskDateInput.value !== '' && taskTimeInput.value !== '') {
            addTask(taskInput.value, taskDateInput.value, taskTimeInput.value);
            taskInput.value = '';
            taskDateInput.value = '';
            taskTimeInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addTask(task, date, time) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task;
        const taskDateTime = document.createElement('span');
        taskDateTime.textContent = `${new Date(date).toLocaleDateString()} ${time}`;
        taskDateTime.classList.add('time');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(taskText);
        li.appendChild(taskDateTime);
        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
    }
});