import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

import TodoListFilter from "./TodoListFilter";
import Todo from "./Todo";
import { useTodoList } from "../context/todoListContext";

const filter = (todoList, filterStatus) => {
    if (filterStatus === "all") return todoList;
    else if (filterStatus === "done") return todoList.filter((val) => val.isCompleted);
    else if (filterStatus === "todo") return todoList.filter((val) => !val.isCompleted);
};

export default function TodoList() {
    const [storage, setStorage] = useLocalStorage("filterStatus");
    const todoList = useTodoList();
    const [filterStatus, setFilterStatus] = useState(storage ?? "all");
    const [filterList, setFilterList] = useState(() => filter(todoList, filterStatus));

    useEffect(() => {
        setFilterList(filter(todoList, filterStatus));
    }, [todoList, filterStatus]);

    const handleStatusChange = (status) => {
        setFilterList(filter(todoList, status));
        setFilterStatus(status);
        setStorage(status);
    };

    return (
        <div className="bg-white overflow-hidden mt-5 drop-shadow-md">
            <TodoListFilter status={filterStatus} changeStatus={handleStatusChange} />
            {filterList.map((val, index) => (
                <Todo key={index.toString()} data={val} />
            ))}
        </div>
    );
}
