import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../../../redux/features/counter/counterSlice";
import { RootState } from "../../../redux/store";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>dispatch - </button>
            {count}
            <button onClick={() => dispatch(increment())}>dispatch + </button>
            <button onClick={() => dispatch(incrementByAmount(5))}>
                dispatch + +{" "}
            </button>
        </div>
    );
};

export default Counter;
