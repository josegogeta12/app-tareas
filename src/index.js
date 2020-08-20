// import {saludar} from './js/componentes.js';
import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();
                                //crearTodoHtml solo funciona con un argumento
todoList.todos.forEach(todo => crearTodoHtml(todo));

const newTodo = new Todo('Aprender JavaScript');



console.log('todos', todoList.todos);






// const tarea = new Todo('Aprender JavaScript');


// // tarea.completado = true;

// todoList.nuevoTodo(tarea);
//  console.log(todoList);

// crearTodoHtml(tarea);

//Local Storage

                       // //no char raros
// localStorage.setItem('mi-key','ABC1234');
// sessionStorage.setItem('mi-key','ABC1234');
// // setTimeout(() => {
// //     localStorage.removeItem('mi-key');
// // }, 1500);