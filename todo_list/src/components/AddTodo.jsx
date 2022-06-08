import { useRef, useEffect } from "react";
import TodoListIcon from "./icons/TodoListIcon";
import PlusIcon from "./icons/PlusIcon";
import { useAddTodo } from "../context/todoListContext";

export default () => {
    const addTodo = useAddTodo();
    const inputRef = useRef();
    const plusBtnRef = useRef();

    useEffect(() => {
        inputRef.current.addEventListener("keypress", (e) => {
            if (isEnterKey(e.key)) {
                plusBtnRef.current.click();
            }
        });
    }, []);

    const isEnterKey = (key) => key.toLowerCase() === "enter";

    const onAdd = () => {
        let inputValue = inputRef.current.value;
        if (inputValue.trim() !== "") {
            addTodo({
                isCompleted: false,
                value: inputValue,
            });
            inputRef.current.value = null;
        }
    };

    return (
        <div className="bg-white flex items-center px-3 overflow-hidden mt-3 drop-shadow-md rounded-md">
            <TodoListIcon className="w-6 h-6 text-gray-400" />
            <input ref={inputRef} type="text" className="bg-transparent text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-transparent focus:border-transparent" />
            <button onClick={onAdd} ref={plusBtnRef}>
                <PlusIcon className="w-6 h-6" />
            </button>
        </div>
    );
};
