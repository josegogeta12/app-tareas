import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        for(const todo of this.todos) {
            if(todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
        
    }

    eliminarCompletados() {                     //todo.completado === false
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        //Local Storage solamente guarda elementos de tipo String, y utilizaos el JSON.stringify para convertir mis objetos todo a Strings
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) 
                   ? (JSON.parse(localStorage.getItem('todo'))) 
                   : ([]);

        //map: recibe un arreglo y retorna un arreglo con sus elementos mutados
                                            //Todo.fromJson
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
    //     if(localStorage.getItem('todo')) {
    //         this.todos = JSON.parse(localStorage.getItem('todo'));
    //         console.log('cargarLocal', this.todos);
    //     } else {
    //         this.todos = [];
    //     }
    // }

}