import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { add, ITodo, removeLast } from "../../../redux/features/todo/todoSlice";
import AddTodoForm from "./AddTodoForm";

const TodoContainer = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const todos = useSelector((state: RootState) => state.todo.value);
    const dispatch = useDispatch();

    const handleSubmitTodo = (event) => {
        event.preventDefault();
        const form = event.target;
        const titleTodo = form.title.value;
        const detailsTodo = form.details.value;
        const todoObj: ITodo = {
            title: titleTodo,
            details: detailsTodo,
        };

        // add todo in the redux store
        dispatch(add(todoObj));
        // TODO: send todo to the server or
        // USE: RTK Query
    };
    console.log(todos);

    return (
        <div>
            {/* <AddTodoForm /> */}
            <div className="login-box todoBox">
                <h2>Login</h2>
                <form onSubmit={handleSubmitTodo}>
                    <div className="user-box">
                        <label>Title</label>
                        <input type="text" name="title" required />
                    </div>
                    <div className="user-box">
                        <label>Details</label>
                        <input type="text" name="details" required />
                    </div>
                    <button type="submit">Add</button>
                </form>
            </div>
            <button
                onClick={() =>
                    dispatch(
                        add({
                            title: `title: ${(Math.random() * 10)
                                .toString(36)
                                .replace(".", " ")}`,
                            details: `Details: ${(Math.random() * 10)
                                .toString(36)
                                .replace(".", " ")}`,
                        })
                    )
                }>
                Add Random Todo
            </button>
            <button onClick={() => dispatch(removeLast())}>
                Remove Last Todo
            </button>
            {todos?.length === 0 ? (
                <h2>No Todos</h2>
            ) : (
                todos?.map((todo) => (
                    <>
                        <div className="todoBox">
                            <h2>{todo.title}</h2>
                            <p>{todo.details}</p>
                            <button>Delete</button>
                        </div>
                    </>
                ))
            )}
        </div>
    );
};

export default TodoContainer;
