import { useState } from "react";

const UseNameState=()=>{
    const [fname, setName] = useState('Default Name')
    return(
        <div>UseNameState function
            <h1>Hi {fname}</h1>
            <form>
                
            </form>
        </div>
    )
}

export default UseNameState;