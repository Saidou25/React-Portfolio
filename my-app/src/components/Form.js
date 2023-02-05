import React from 'react';

function Form() {

  return (
    <div>
 
    <form className="form">
      <input
       
        name="email"
      
        type="email"
        placeholder="email"
      />
      <input
       
        name="userName"
        
        type="text"
        placeholder="username"
      />
      <input
        
        name="password"
        
        type="password"
        placeholder="Password"
      />
      
    </form>
   
    
  </div>

  )   
}

export default Form;
