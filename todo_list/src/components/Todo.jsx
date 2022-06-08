import TickMarkIcon from "./icons/TickMarkIcon";
import CrossIcon from "./icons/CrossIcon";
import { useMarkTodoAsCompleted, useRemoveTodo } from "../context/todoListContext";

export default function Todo({ data }) {
    const markTodoAsCompleted = useMarkTodoAsCompleted();
    const removeTodo = useRemoveTodo();

    let paragraphClass = "ml-3 text-custom-blue-200";
    paragraphClass += data.isCompleted ? " line-through" : "";

    return (
        <div className="flex items-center px-2 py-2 border-b border-gray-300">
            <button onClick={() => markTodoAsCompleted(data.id)}>
                <TickMarkIcon className="w-6 h-6 text-custom-blue-200 rounded-full hover:p-0.5 hover:bg-custom-blue-200 hover:text-custom-blue-500" />
            </button>
            <p className={paragraphClass}> {data.value} </p>
            <button onClick={() => removeTodo(data.id)} className="ml-auto mr-2 ">
                <CrossIcon className="w-4 h-4 text-red-200" />
            </button>
        </div>
    );
}
