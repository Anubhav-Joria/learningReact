import React, {useReducer} from 'react'

const ReducerHook = () => {
    //Step : 1
    let initialState = 0;

    // Step 3 : declaring the reducer function
    const reducer = (s ,action) =>{
        switch(action){
            case "increment" : return s + 1;
            case "decrement" : return s - 1;
            case "reset" : return initialState;
            default:return s;
        }
    }
    //Step : 2 -> usereducer returns -> state and dispatch method by which we can call action
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>{count} </h1>
      <button onClick = {() => {dispatch("increment")}}> Increment </button>
      <button onClick = {() => {dispatch("decrement")}}> Decrement </button>
      <button onClick = {() => {dispatch("reset")}}> Reset </button>

      
    </div>
  )
}

export default ReducerHook
