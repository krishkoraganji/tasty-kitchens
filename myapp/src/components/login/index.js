import { useState } from "react"
import { useNavigate } from "react-router-dom"
import img from '../images/Rectangle-1456@1x.png'
import './index.css'
function Login() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigation=useNavigate()
    const submitForm=async(e)=>{
      e.preventDefault()
      const url='https://apis.ccbp.in/login'
      const options={method:'POST',
      body:JSON.stringify({username,password})}
      try{
        const response= await fetch(url,options)
        if (response.ok){
          const data=await response.json()
          console.log(data)
          localStorage.setItem("jwtToken",data.jwt_token)
          setError('')
          navigation('/')
        }else{
          const error=await response.json()
          setError(error.error_msg)
        }
      
      }catch(error){
        console.log(error)
      }
      
    }
    console.log(error)
  return (
      <div>
      <div className="mobile-view">
            <img className="open-img" src={img} alt="dp"/>
            <form onSubmit={submitForm} method="POST">
            <h2>Login</h2>
            <div className="user-pass">
            <label htmlFor="username">USERNAME</label>
            <input id="username" type="text" onChange={e=>setUsername(e.target.value)} value={username}/>
            </div>
            <div className="user-pass">
            <label htmlFor="password">PASSWORD</label>
            <input id="password" type="password" onChange={e=>setPassword(e.target.value)} value={password}/>
            {error && <p style={{color:'red'}}>{error}</p>}
            </div>
            <input type='submit' value='Login'/>
            </form>
      </div>
      </div>
  )
}
export default Login