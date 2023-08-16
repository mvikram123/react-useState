import React,{useState} from "react";



const Lazy=()=>{
    // const[count,setCount]=useState(3+4);
    //    setCount(count+1);


    const[count,setCount]=useState(()=>{
        let sum=0;
        for(let i=1; i<=100; i++){
            sum=sum+i;
        }
        return sum;
    })




    return(


        <div>
                <p>{count}</p>

        </div>
    )
}

export default Lazy;