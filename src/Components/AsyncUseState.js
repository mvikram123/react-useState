import React,{useState} from "react";




const AsyncUseState=()=>{
    let[count,setCount]=useState(0);

    function increase1(){

        setCount(count+1)//async in nature
        console.log(count)
        setCount(count+1)
        console.log(count)
    }

    function increase2(){

        setCount((count)=>count+1)//call back function
        console.log(count)
       
        setCount((count)=>count+1)
        console.log(count)
    }




    return(


        <div>

            <p>{count}</p>
            <button onClick={increase1}>increase1</button>
            <button onClick={increase2}>increase2</button>


        </div>
    )
}
export default AsyncUseState;