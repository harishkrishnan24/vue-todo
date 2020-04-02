import Vue from 'vue';

const INITIAL_DATA = {
    todos: [
        {
            _id: "1",
            title: "Walk the dog",
            description: "Go to park near supermarket"
        },
        {
            _id: "2",
            title: "Learn VueJs",
            description: "Learn from the official Documentation"
        },
        {
            _id: "3",
            title: "Learn Typescript",
            description: "Learn from the udemy course"
        }
    ]
};

const store = {
    state: {
        todos: []
    },
    actions: {
        initStore(state) {
            const todos = localStorage.getItem('appTodos');

            if (!todos) {
                Vue.set(state, 'todos', INITIAL_DATA.todos);
            } else {
                Vue.set(state, 'todos', JSON.parse(todos));
            }

            return state.todos;
        },
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7);
            state.todos.push(todo);
            return state.todos;
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex(todo => todo._id === todoToUpdate._id);

            Vue.set(state.todos, index, todoToUpdate);
            return state.todos;
        },
        deleteTodo(state, todoId) {
            const index = state.todos.findIndex(todo => todo._id === todoId);

            state.todos.splice(index, 1);
            return state.todos;
        }
    }
};

function persistsData(value) {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem('appTodos', JSON.stringify(stringifyValue));
}

store.dispatch = function (action, payload) {
    if (!this.actions[action]) throw new Error(`Action ${action} is not defined in the store`);

    const result = this.actions[action](this.state, payload);
    if (!result) return;
    persistsData(result);
    return result;
};

export default store;