import React, { useState, useContext } from "react";

const TodoListContext = React.createContext();
const AddTodoContext = React.createContext();
const removeTodoContext = React.createContext();
const markTodoAsCompletedContext = React.createContext();

// custom hooks
export function useTodoList() {
    return useContext(TodoListContext);
}

export function useAddTodo() {
    return useContext(AddTodoContext);
}

export function useRemoveTodo() {
    return useContext(removeTodoContext);
}

export function useMarkTodoAsCompleted() {
    return useContext(markTodoAsCompletedContext);
}

// global context provider
export function TodoProvider({ children }) {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (todo) => {
        let len = todoList.length;
        setTodoList((prevTodoList) => [...prevTodoList, { ...todo, id: ++len }]);
    };

    const removeTodo = (todoId) => {
        setTodoList(todoList.filter((val) => val.id !== todoId));
    };

    const markTodoAsCompleted = (todoId) => {
        const newTodoList = todoList.map((val) => (val.id === todoId ? { ...val, isCompleted: true } : val));
        setTodoList(newTodoList);
    };

    return (
        <TodoListContext.Provider value={todoList}>
            <AddTodoContext.Provider value={addTodo}>
                <markTodoAsCompletedContext.Provider value={markTodoAsCompleted}>
                    <removeTodoContext.Provider value={removeTodo}>
                        {children}
                    </removeTodoContext.Provider>
                </markTodoAsCompletedContext.Provider>
            </AddTodoContext.Provider>
        </TodoListContext.Provider>
    );
}
