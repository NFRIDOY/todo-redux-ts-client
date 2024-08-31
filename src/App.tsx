import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
    decrement,
    increment,
    incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { add } from "./redux/features/todo/todoSlice";

function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const todos = useSelector((state: RootState) => state.todo.value);
    const dispatch = useDispatch();
    console.log(todos);

    return (
        <>
            <button onClick={() => dispatch(decrement())}>dispatch - </button>
            {count}
            <button onClick={() => dispatch(increment())}>dispatch + </button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                dispatch +{" "}
            </button>
            <button onClick={() => dispatch(add({title:`titletitletitletitle ${count}`, details:"detailsdetailsdetailsdetails "}))}>
                Add To Todo
            </button>
            {todos.map((todo) => (
                <>
                    <div className="todoBox">
                        <h1>{todo.title}</h1>
                        <p>{todo.details}</p>
                    </div>
                </>
            ))}
        </>
    );
}

export default App;
