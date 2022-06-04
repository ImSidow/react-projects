import TodoListIcon from "./icons/TodoListIcon";
export default () => {
    return (
        <div className="flex mt-2 px-2 pb-2 border-b border-gray-300">
            <TodoListIcon className="w-6 h-6 text-custom-blue-200" />
            <div className="ml-auto grid grid-cols-3 gap-x-4 text-center">
                <button className="text-custom-blue-500"> TODO </button>
                <button className="text-custom-blue-500"> DONE </button>
                <button className="text-custom-blue-500 bg-custom-blue-200"> ALL </button>
            </div>
        </div>
    );
};
