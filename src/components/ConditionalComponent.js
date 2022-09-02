import { useState } from "react";
// best way is to use a ternary operator
const ConditionalComponent=()=>{
    const [display] = useState(false);
    return display ? (
        <div>
            <h3>TRU HAI</h3>
        </div>
    ) : (
        <div>
        <h3>FALSE HAI</h3>
    </div>
    )
}

// const ConditionalComponent=()=>{
//     const [display, setDisplay] = useState(true);
//     let output;
//     if(display){
//         output = <h3>TRU HAI</h3>
//     }else{
//         return(
//             <h3>FALSE hai bhay</h3>
//         )
//     }
//     return output;
// }
// 

export default ConditionalComponent;