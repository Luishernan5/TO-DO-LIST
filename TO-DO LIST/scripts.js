// Logica:
document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const datetimeInput = document.getElementById('datetime-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== "" && datetimeInput.value !== "") {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskDetails = document.createElement('div');
        taskDetails.className = 'task-details';
        const taskText = document.createElement('p');
        taskText.textContent = taskInput.value;
        const taskDateTime = document.createElement('span');
        taskDateTime.className = 'task-date-time';
        taskDateTime.textContent = new Date(datetimeInput.value).toLocaleString();

        taskDetails.appendChild(taskText);
        taskDetails.appendChild(taskDateTime);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskDetails);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
        datetimeInput.value = '';
    }
});
