import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/todoListContext";

export default () => {
    return (
        <TodoProvider>
            <div className="bg-[#F6F8FA] h-screen flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold"> TODO LIST </h1>
                <div className="container w-2/5 h-4/6">
                    <AddTodo />
                    <TodoList />
                </div>
            </div>
        </TodoProvider>
    );
};
