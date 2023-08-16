import React, { useState } from "react";




const FormValidation=()=>{
    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // const[password,setPassword]=useState("")
    // const[confirmPassword,setConfirmPassword]=useState("")
    const [error,setError]=useState("");
    const[success,setSuccess]=useState("");

    const[user,setUser]=useState({name:"", email:"", password:"" , confirmPassword:""})
    console.log(user);
    const{name,email,password,confirmPassword}=user
     function submitForm(e){

        e.preventDefault()
        if(!name || !email || !password|| !confirmPassword){
            // alert("all fields are required")
            setError("all fields are required")
            return;
        }
       
        

        if(name.trim().includes(" ")===false)
        {
        // alert("space is required between two words")
        setError("Minimum two words are required in name")
        setSuccess("")
        return;
       }

    if(email.includes("@")===false){
        // alert("email should be valid")
        setError("Email should be valid")
        setSuccess("")
        return;
    }
    if(password.length<8){
        // alert("password should be at least 8 character")
        setError("Password should be at least 8 character")
        setSuccess("")
        return;
    }
    if(password!==confirmPassword){
        // alert("password did not match")
        setError("Password did not match")
        setSuccess("")
        return;
    }
    // alert("form has submitted successfully")
    setSuccess("Form has submitted successfully")
    setError("");


     }
   

    return(

        <div>
           {<h3 style={{color:"red"}}>{error}</h3>}
           {<h3 style={{color:"green"}}>{success}</h3>}
            <form>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setUser({...user, name:e.target.value})}></input>

            <input type="email" placeholder="Enter your email"  onChange={(e)=>setUser({...user, email:e.target.value})}></input>

            <input type="password" placeholder="Enter your password"  onChange={(e)=>setUser({...user, password:e.target.value})}></input>

            <input type="password" placeholder="Enter your confirm password"  onChange={(e)=>setUser({...user, confirmPassword:e.target.value})}></input>
            <button onClick={submitForm}>submit</button>
            </form>
        </div>
    )
}

export default FormValidation;