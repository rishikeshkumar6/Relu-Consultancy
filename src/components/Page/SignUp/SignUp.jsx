import React,{useState} from 'react'
import styles from './SignUp.module.css'
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { auth } from '../../../Firebase'
import InputControlComponents from '../../Atoms/InputControlComponents/InputControlComponents'
import { Link,useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [Input,setInput]=useState({
        name:"",
        email:"",
        password:""
    })
    const [Error,setError]=useState("")
    const navigate=useNavigate()
    const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false)
    const handleChange=(event)=>{
        setInput({...Input,[event.target.name]:event.target.value})
    }
    const handleSubmit=(event)=>{
       event.preventDefault()
       if(!Input.name || !Input.email || !Input.password){
        setError("Please fill all of field")
        return
       }
       setSubmitButtonDisabled(true)
       createUserWithEmailAndPassword(auth,Input.email,Input.password).then(async (resolve)=>{
        setSubmitButtonDisabled(false)
        const user=resolve.user
        await updateProfile(user,{
            displayName:Input.name
        })
        console.log(user)
      
       
        if(resolve){
            navigate('/')
        }
       }).catch((error)=>{
        setSubmitButtonDisabled(false)
       setError(error.message)
       })
     
    }
  return (
    <div className={styles.parentcontainer}>
     <div className={styles.innerBox}>
        <h1>Register</h1>
        <InputControlComponents type="text" label="Name" placeholder="Enter Your name" 
         name="name" value={Input.name} onChange={handleChange}/>
      
        <InputControlComponents type="email" label="Email" placeholder="Enter Your Email Address"
         name="email" value={Input.email} onChange={handleChange}/>
       
        <InputControlComponents type="password" label="Password" placeholder="Enter Your Password" 
         name="password" value={Input.password} onChange={handleChange}/>
        
        <div className={styles.footer}>
            <button onClick={handleSubmit} disabled={submitButtonDisabled}>Register</button>
            <p>Already have an account?{" "}
            <span>
                <Link to="/login">SignIn</Link>
            </span>
            </p>
            {Error && <span>{Error}</span>}
        </div>
     </div>
    </div>
  )
}

export default SignUp