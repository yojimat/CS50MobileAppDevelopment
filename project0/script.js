const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function atualizaUnchecked() {

	if(this.checked)
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1;
	else
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1;
}

function deletarTask() {

	itemCountSpan.innerText	= parseInt(itemCountSpan.innerText) - 1;
	
	if(!this.parentElement.firstChild.checked)
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1

	this.parentElement.remove();
}

function atualizaContadores(){
	itemCountSpan.innerText	= parseInt(itemCountSpan.innerText) + 1;
	uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1;
}

function newTodo() {
  const li = document.createElement("li")
  	, checkbox = document.createElement("input")
  	, text_span = document.createElement("span")
  	, delete_button = document.createElement("button");
  
  li.className = classNames.TODO_ITEM;

  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.type = "checkbox";
  checkbox.onchange = atualizaUnchecked;

  text_span.className = classNames.TODO_TEXT;
  text_span.innerHTML = prompt("Escolha o nome da task:", "task");

  delete_button.className = classNames.TODO_DELETE;
  delete_button.innerHTML = "Deletar task?"
  delete_button.onclick = deletarTask;

  li.appendChild(checkbox);
  li.appendChild(text_span);
  li.appendChild(delete_button);

  list.appendChild(li);
  
  atualizaContadores();
}
