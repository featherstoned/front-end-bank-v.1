
import React,{useContext,useState} from "react";
import Card from './card';
import {UserContext} from './context';

// & CODE PLAYGROUND 
function Login(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);
  
    function validate (field, label){
      if(!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
    }
  
    function handleCreate(){
      console.log(email,password);
      if (!validate(email, 'email')) return;
      if (!validate(password, 'password')) return;
      ctx.users.push({email,password,balance:100});
      setShow(false);
    }
  
    function clearForm(){
      setEmail('');
      setPassword('');
      setShow(true);
    }
  
    return (
      <div style={{ backgroundColor: "aqua", minHeight: "100vh" }}>

      <Card 
        bgcolor="dark"
        txtcolor="white"
        header="Login"
        status={status}
        body={show ? (
          <>
          Username<br/>
          <input 
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter Username"
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
          
          Password<br/>
          <input 
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
          <button 
          type="submit"
          className="btn btn-light"
          onClick={handleCreate}>Login
          </button>
          </>
        ) : (
          <>
          <h5>Success</h5>
          <button 
          type="submit"
          className="btn btn-light"
          onClick={clearForm}>Logout
          </button>
          </>
        )}
        />
        </div>
    );}
        
    export default Login;



    
//* DEFAULT TO THIS
// import React,{useContext,useState} from "react";
// import Card from './card';
// import {UserContext} from './context';

// function Login(){
//     const [show, setShow] = useState(true);
//     const [status, setStatus] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const ctx = useContext(UserContext);
  
//     function validate (field, label){
//       if(!field) {
//         setStatus('Error: ' + label);
//         setTimeout(() => setStatus(''),3000);
//         return false;
//       }
//       return true;
//     }
  
//     function handleCreate(){
//       console.log(email,password);
//       if (!validate(email, 'email')) return;
//       if (!validate(password, 'password')) return;
//       ctx.users.push({email,password,balance:100});
//       setShow(false);
//     }
  
//     function clearForm(){
//       setEmail('');
//       setPassword('');
//       setShow(true);
//     }
  
//     return (
//       <div style={{ backgroundColor: "aqua", minHeight: "100vh" }}>

//       <Card 
//         bgcolor="dark"
//         txtcolor="white"
//         header="Login"
//         status={status}
//         body={show ? (
//           <>
//           Username<br/>
//           <input 
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="Enter Username"
//           value={email}
//           onChange={e => setEmail(e.currentTarget.value)}/><br/>
          
//           Password<br/>
//           <input 
//           type="password"
//           className="form-control"
//           id="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={e => setPassword(e.currentTarget.value)}/><br/>
  
//           <button 
//           type="submit"
//           className="btn btn-light"
//           onClick={handleCreate}>Login
//           </button>
//           </>
//         ) : (
//           <>
//           <h5>Success</h5>
//           <button 
//           type="submit"
//           className="btn btn-light"
//           onClick={clearForm}>Logout
//           </button>
//           </>
//         )}
//         />
//         </div>
//     );}
        
//     export default Login;