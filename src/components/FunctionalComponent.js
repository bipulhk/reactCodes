import { useState } from "react";

const FunctionalComponent = () =>{
    const [counter,setCounter] = useState(0);
    const increment=()=>{
        setCounter(counter+1);
    }
    const decrement =()=>{
        setCounter(counter-1);
    }
    const reset =()=>{
        setCounter(0);
    }
    return(
        <div>FunctionalComponent
            <h1>current counter is {counter}</h1>
            <button onClick={decrement}> decrease</button>
            <button onClick={reset}> reset</button>
            <button onClick={increment}> click me</button>
        </div>
    )
    
}

export default FunctionalComponent;