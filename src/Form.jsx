import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then((result)=>console.log(result))
        .catch(err=>console.log(err)) 
        navigate('/login')
    }
    
  return (
      <div>
        <center>
          <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
         <div className="row" style={{border:"2px solid white", width:"350px", borderRadius:"50px", backgroundColor:"#b8e3ff"}}>
             <div className="col">
             <label>NAME: </label><br/>
           <input type="text" className="form-control" placeholder="name"  onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="col">
    <label>E-MAIL: </label><br/>
    <input type="text" className="form-control" placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="col">
    <label>PASSWORD: </label><br/>
    <input type="text" className="form-control" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
  </div>
<br/>
<button style={{background:"green",width:"180px",color:"white", borderRadius:"20px"}}>register</button>

<h4>Already have an account ?</h4>
<Link to="/login"><button style={{width:"180px",background:"purple",color:"white", borderRadius:"20px"}}>login</button></Link>

</div>
</form>
</center>
 </div>
  )
}

export default Form
