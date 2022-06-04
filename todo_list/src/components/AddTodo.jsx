import TodoListIcon from "./icons/TodoListIcon";
import PlusIcon from "./icons/PlusIcon";

export default () => {
    return (
        <div className="bg-white flex items-center px-3 overflow-hidden mt-3 drop-shadow-md rounded-md">
            <TodoListIcon className="w-6 h-6 text-gray-400" />
            <input type="text" className="bg-transparent text-gray-900 text-sm rounded-lg block w-full p-2 focus:outline-transparent focus:border-transparent" />
            <PlusIcon className="w-6 h-6" />
        </div>
    );
};
