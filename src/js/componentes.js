import { Todo } from "../classes";
import { todoList } from "../index"

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnEliminar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', (event) => {
                            // txtInput.value.length > 0
    if(event.keyCode === 13 && txtInput.value != '') {
        // console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', ( event ) => {
  const nombreElemento = event.target.localName; //input, label, button
  const todoElemento = event.target.parentElement.parentElement;
  const todoId = todoElemento.getAttribute('data-id'); //obtenemos el id del elemento (el li)
  
    console.log(nombreElemento);

  if(nombreElemento.includes('input')) { //click en el check
      todoList.marcarCompletado(todoId); //para marcar como completado todo.completa = true
      todoElemento.classList.toggle('completed'); //cambiar el efecto del palomeado
  } else if(nombreElemento.includes('button')) {

    todoList.eliminarTodo(todoId); //eliminar del arreglo
    divTodoList.removeChild(todoElemento); //eliminar del HTML
  }

  console.log(todoList);
  
});

btnEliminar.addEventListener ('click', (event ) => {
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0; i--) {
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    if(!filtro) {
        return;
    }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }

});

