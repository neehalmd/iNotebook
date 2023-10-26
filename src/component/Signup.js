import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
const Signup = (props) => {
  let navigate = useNavigate();
  const[credentials,setCrendentials] =useState({
    name : "",
    email:"",
    password:"",
    cpassword:""
    
});
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const {name,email,password} =credentials
    const response = await fetch("http://localhost:5000/api/auth/createUser",{
      
        method :'POST',
        headers : {
          'Content-Type' : 'application/json'
         
        },
        body:JSON.stringify({name:name,email:email,password:password})
      });
      const json  = await response.json()
      console.log(json)
      if(json.success){
        props.showAlert("Logged In Successfully","success")
        localStorage.setItem('token', json.authToken);
        navigate("/");
      }else{
        props.showAlert("Invalid Credentials","danger")
      }
     
        
    }
  const onChange = (e)=>{
    setCrendentials({...credentials,[e.target.name]:e.target.value})
    
}
  return (
    <>
    <div className='mb-5'>
      <h1>SignUp to use to iNoteBook</h1></div>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name="name"
          />
        </div>
          <label htmlFor="email" name="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={onChange}
            name="password"
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            onChange={onChange}
            name="cpassword"
          />
        </div>
        
       
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div></>
  );
  }

export default Signup
