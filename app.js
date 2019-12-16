let addInput = document.querySelector('.add-todo-item');
let addInputButton = document.querySelector('.add-todo-item-button');
let todoList = document.querySelector('.todo__list');
let clearAll = document.querySelector('.clear-all');
let importantCheck = document.querySelector('.important-checkbox');

clearAll.addEventListener('click', function () {
	todoList.innerHTML = '';
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'checkbox') return;
	
	let listItem = target.parentElement.parentElement;
	listItem.classList.toggle('completed');
	
	let editB = listItem.querySelector('.edit__button');
	
	editB.hidden = !editB.hidden;
	
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'delete__button') return;
	
	let listItem = target.parentElement.parentElement;
	listItem.style.transform = 'translateX(-1000px)';
	setTimeout(() => listItem.remove(), 450);
})

todoList.addEventListener('click', function (event) {
	let target = event.target;
	
	if (target.className !== 'edit__button') return;
	
	let listItem = target.parentElement.parentElement;
	
	let label = listItem.querySelector('.todo-item__label');
	let input = listItem.querySelector('.edit__input');
	
	label.hidden=!label.hidden;
	input.hidden=!input.hidden;
	input.value=label.textContent;
	
	target.classList.add('save');
	target.value = String.fromCharCode(10003);

	todoList.addEventListener('click', editInput)
})

function editInput (event) {
	let target = event.target;
	
	if (target.className !== 'edit__button save') return;
	
	let listItem = target.parentElement.parentElement;
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
	target.value = String.fromCharCode(9998);
	todoList.removeEventListener('click', editInput);
}

addInput.addEventListener('click', function () {
	addInput.style.color='';
	addInput.value = '';
})

addInput.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		addTodoItem();
	}
})

const addTodoItem = () => {
	if (addInput.value === '') {
		addInput.placeholder = 'Поле не должно быть пустым!';
		return;
	}
	
	let listItem = document.createElement('li');
	listItem.className = 'todo-list__item';
	
	let todoItemContainer = document.createElement('div');
	todoItemContainer.className = 'todoitem-container';
	
	let buttonsContainer = document.createElement('div');
	buttonsContainer.className = 'buttons-container';
	
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
	editButton.value = String.fromCharCode(9998);
	
	let deleteButton = document.createElement('input');
	deleteButton.type = 'button'
	deleteButton.className='delete__button';
	deleteButton.value = String.fromCharCode(10007);
	
	todoItemContainer.append(checkBox, label, editInput);
	buttonsContainer.append(editButton, deleteButton);
	listItem.append(todoItemContainer, buttonsContainer);
	
	if(importantCheck.checked) {
		listItem.className = 'todo-list__item-important';
		todoList.prepend(listItem);
		addInput.value = '';
		return false;
	}
	
	todoList.append(listItem);
	
	addInput.value = '';
};




addInputButton.addEventListener('click', addTodoItem)
	













