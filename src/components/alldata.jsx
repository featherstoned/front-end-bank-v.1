
//! REQUIRED 
// //TODO: All Data functionality:
//   //~ All User Submissions Appear On All Data Page
//   //~ All Data Displayed On Bootstrap Card NOT JSON

//& CODE PLAYGROUND  
import React,{useContext} from "react";
import {UserContext} from './context';
import Card from './card';

  const AllData = () => {
    const ctx = useContext(UserContext);
  
    return (
      <div style={{ backgroundColor: "yellow", minHeight: "100vh" }}>

        {ctx.users.map((user, index) => (
          <Card
            key={index}
            bgcolor="dark"
            txtcolor="white"
            header={`User ${index + 1}`}
            body={
              <>
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Password:</strong> {user.password} <br />
                <strong>Opening Balance:</strong> ${user.balance.toFixed(2)} <br />
              </>
            }
          />
        ))}
      </div>
    );
  };
  export default AllData;
  





  


//* DEFAULT TO THIS - IT WORKS
// import {UserContext} from './context';
// import Card from './card';
  
// const AllData = () => {
//   const ctx = useContext(UserContext);

//   return (
//     <div style={{ backgroundColor: "yellow", minHeight: "100vh" }}>

//       {ctx.users.map((user, index) => (
//         <Card
//           key={index}
//           bgcolor="dark"
//           txtcolor="white"
//           header={`User ${index + 1}`}
//           body={
//             <>
//               <strong>Name:</strong> {user.name} <br />
//               <strong>Email:</strong> {user.email} <br />
//               <strong>Password:</strong> {user.password} <br />
//               <strong>Opening Balance:</strong> ${user.balance.toFixed(2)} <br />
//             </>
//           }
//         />
//       ))}
//     </div>
//   );
// };
// export default AllData;






