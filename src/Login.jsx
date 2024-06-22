import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{console.log(result)
      if(result.data=="success"){
        navigate('/home')
      }
  })
  .catch(err=>console.log(err))
  }
  return (
   
        <div>
          <center>
            <form onSubmit={handleSubmit}>
      <div className="row" style={{border:"2px solid white", width:"350px", borderRadius:"50px"}}>
            <h1 style={{color:"red"}}>LOGIN</h1>
      
  <div className="col">
    <label>E-MAIL: </label><br/>
    <input type="text" className="form-control" placeholder="e-mail"onChange={(e)=>setEmail(e.target.value)} />
  </div>
  <div className="col">
    <label>PASSWORD: </label><br/>
    <input type="password" className="form-control" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
  </div>
<br/>
<button style={{background:"purple",color:"white", borderRadius:"20px",width:"180px"}}>LOGIN</button>
<h4>don't have an account</h4>
<Link to="/register"><button style={{background:"green",color:"white", borderRadius:"20px",width:"180px"}}>register</button></Link>
</div>
</form>
</center>
 </div>
   
  )
}

export default Login
  