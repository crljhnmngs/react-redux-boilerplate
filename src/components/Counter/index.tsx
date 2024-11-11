import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    reset,
} from '../../features/counter/counterSlice';
import { selectCounter } from '../../features/counter/counterSelectors';
import { AppDispatch } from '../../store/root';

export const Counter = () => {
    const count = useSelector(selectCounter);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className="h-[90%] flex items-center justify-center flex-col gap-5">
            <p className="text-2xl font-bold">Counter: {count}</p>
            <div className="flex gap-4">
                <button
                    className="px-4 py-2 w-28 bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => dispatch(increment())}
                >
                    Add
                </button>
                <button
                    className={`px-4 py-2 w-28 rounded text-white ${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
                    onClick={() => dispatch(decrement())}
                    disabled={count === 0}
                >
                    Subtract
                </button>
            </div>
            <button
                className={`px-4 py-2 w-28 rounded text-white ${count === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
                onClick={() => dispatch(reset())}
                disabled={count === 0}
            >
                Reset
            </button>
        </div>
    );
};
