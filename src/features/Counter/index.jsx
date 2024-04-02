import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const handleIncreaseClick = () => {
        const action = increase(); // Hàm action creator
        dispatch(action);
    };
    const handleDecreaseClick = () => {
        const action = decrease(); // Hàm action creator
        dispatch(action);
    };
    return (
        <div>
            Counter : {counter}
            <div>
                <button onClick={handleIncreaseClick}>increase</button>
                <button onClick={handleDecreaseClick}>decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;
