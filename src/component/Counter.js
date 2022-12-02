import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount, resetCount } from './services/action/CounterAction';


// state count = 0
// action = increment decrement reset
// reduder = logic gula kaj korbe
// store 

const Counter = () => {
   
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const {count} = state;
    //  console.log(count);
    const incrementCounter = () =>{
       dispatch(incrementCount())
    }
    const resetCounter = () =>{
       dispatch(resetCount())
    }
    const decrementCounter = () =>{
       dispatch(decrementCount())
    }
    return (
        <div>
            <h2>Counter app using redux</h2>
             <h3>Count: {count} </h3>
             <button onClick={incrementCounter}>Increment</button>
             <button onClick={resetCounter}>Reset</button>
             <button onClick={decrementCounter}>Decrement</button>
        </div>
    );
};

export default Counter;