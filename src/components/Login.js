import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/logo-blue.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="login_card">
        <img src={logo} alt="logo" />
        <form>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            autoComplete="off"
            autoFocus
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            id="password"
            required
          />
          <button type="submit">Login</button>
          <button type="submit">Login With Google</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import logo from '../assets/images/logo-blue.svg'
// import { Button,Form } from 'react-bootstrap'

// const Login = () => {
//   return (
//     <div className='login'>
//         <div className='login_card'>                                    REACT BOOTSTRAP
//             <img src={logo} alt="logo" />
//             <Form.Control placeholder='Enter Your Email Address' required autoFocus />
//             <Form.Control placeholder='Enter Your Password' required/>
//             <Button>LOGIN</Button><br></br>
//             <Button>LOGIN WITH GOOGLE</Button>
//         </div>
//     </div>
//   )
// }

// export default Login
