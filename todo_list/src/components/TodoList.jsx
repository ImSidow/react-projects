import TodoListHeader from "./TodoListHeader";
import Todo from "./Todo";

export default () => {
    return (
        <div className="bg-white overflow-hidden mt-5 drop-shadow-md">
            <TodoListHeader />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
        </div>
    );
};
