const store = {
    state: {
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
    },
    actions: {
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7);
            state.todos.push(todo);
        }
    }
};

store.dispatch = function (action, payload) {
    if (!this.actions[action]) throw new Error(`Action ${action} is not defined in the store`);

    return this.actions[action](this.state, payload);
};

export default store;