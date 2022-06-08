import TodoListIcon from "./icons/TodoListIcon";

let activeClass = "text-custom-blue-500 bg-custom-blue-200";
export default ({ status, changeStatus }) => {
    return (
        <div className="flex mt-2 px-2 pb-2 border-b border-gray-300">
            <TodoListIcon className="w-6 h-6 text-custom-blue-200" />
            <div className="ml-auto grid grid-cols-3 gap-x-4 text-center">
                <button className={status === "todo" ? activeClass : "text-custom-blue-500"} onClick={() => changeStatus("todo")}>
                    TODO
                </button>
                <button className={status === "done" ? activeClass : "text-custom-blue-500"} onClick={() => changeStatus("done")}>
                    DONE
                </button>
                <button className={status === "all" ? activeClass : "text-custom-blue-500"} onClick={() => changeStatus("all")}>
                    ALL
                </button>
            </div>
        </div>
    );
};
