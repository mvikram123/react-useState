import React , {useState} from "react";


let a=10;

const State1=()=>{

    let[count,setCount]=useState(0);
    // let a=20;

    function increase1(){

        a=a+1;
        console.log(a);

        
        
    }

    function increase2(){

        count=count+1
        setCount(count)
    }

    function decrease(){
        if(count>0)
        count=count-1
        setCount(count)
    }

    function reset(){
        count=0
        setCount(0);


    }


    return (

        <div>
                <h1>hey value of a={a}</h1>
                <button onClick={increase1}>increase1</button>
                <h1>hey value of count={count}</h1>
                <button onClick={increase2}>increase</button>
                <button onClick={decrease}>decrease</button>
                <button onClick={reset}>reset</button>

        </div>
    )
}
export default State1;