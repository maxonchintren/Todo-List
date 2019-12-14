let addInput = document.querySelector('.add-todo-item');
let addInputButton = document.querySelector('.add-todo-item-button');
let todoList = document.querySelector('.todo__list');
let clearAll = document.querySelector('.clear-all');

clearAll.addEventListener('click', function () {
	todoList.innerHTML = '';
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'checkbox') return;
	
	let listItem = target.parentElement;
	listItem.classList.toggle('completed');
	
	let editB = listItem.querySelector('.edit__button');
	
	editB.hidden = !editB.hidden;
	
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'delete__button') return;
	
	let listItem = target.parentElement;
	listItem.remove();
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'edit__button') return;
	
	let listItem = target.parentElement;
	
	let label = listItem.querySelector('.todo-item__label');
	let input = listItem.querySelector('.edit__input');
	
	label.hidden=!label.hidden;
	input.hidden=!input.hidden;
	input.value=label.textContent;
	
	target.classList.add('save');
	target.value = 'Сохранить';
	
	todoList.addEventListener('click', editInput)
})

function editInput (event) {
	let target = event.target;
	
	if (target.className !== 'edit__button save') return;
	
	let listItem = target.parentElement;
	let label = listItem.querySelector('.todo-item__label');
	let input = listItem.querySelector('.edit__input');
	
	if (input.value === '') {
		input.placeholder = 'Поле не должно быть пустым!';
		return;
	}
	
	label.hidden = !label.hidden;
	input.hidden= !input.hidden;
	label.textContent = input.value;
	
	target.classList.remove('save');
	target.value = 'Редактировать';
	todoList.removeEventListener('click', editInput);
}

addInput.addEventListener('click', function () {
	addInput.style.color='';
	addInput.value = '';
})

addInputButton.addEventListener('click', function () {
	if (addInput.value === '') {
		addInput.style.color = 'red';
		addInput.value = 'Поле не должно быть пустым!';
		return;
	}
	
	let listItem = document.createElement('li');
	listItem.className = 'todo-list__item';
	
	let label = document.createElement('label');
	label.className = 'todo-item__label';
	label.textContent = addInput.value;
	
	let checkBox = document.createElement('input');
	checkBox.type = 'checkbox';
	checkBox.className = 'checkbox';
	
	let editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.className = 'edit__input';
	editInput.value = addInput.value;
	editInput.hidden = true;
	
	let editButton = document.createElement('input');
	editButton.type = 'button';
	editButton.className = 'edit__button';
	editButton.value = 'Редактировать';
	
	let deleteButton = document.createElement('input');
	deleteButton.type = 'button'
	deleteButton.className='delete__button';
	deleteButton.value = 'Удалить';
	
	listItem.append(checkBox, label, editInput, editButton, deleteButton);
	todoList.append(listItem);
	
	addInput.value = '';
})















