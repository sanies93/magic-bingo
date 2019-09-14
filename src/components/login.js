import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// maybe add a button



class Login extends React.Component {
  state = {
    email: '',
    username: '',
    password: '',
  }

  render() {
      return(
          <div>
              <Link to="/">Back to Game</Link>
            <form>
              <input
                name = 'username'
                placeholder = 'username' />

            <input
                name = 'email'
                placeholder = 'email' />


             <input 
                name = 'password'
                type = 'password'
                placeholder = 'password' />
        
                <button onClick={() => this.onSubmit()} type="primary">Submit</button>
              </form>
              
            </div>

      )
  }  
}


  
       
    



export default Login;