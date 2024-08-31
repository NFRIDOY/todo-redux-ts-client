import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={()=> dispatch(decrement())}>dispatch - </button>
            {count}
            <button onClick={()=> dispatch(increment())}>dispatch + </button>
        </>
    );
}

export default App;
