
//& CODE PLAYGROUND

import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import { UserProvider } from './components/context';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
// import Balance from './components/balance';
import AllData from './components/alldata';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <HashRouter>
      <NavBar />
      <UserProvider setLoggedInUser={setLoggedInUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount setLoggedInUser={setLoggedInUser}/>} />
          <Route path="/login/" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          {/* <Route path="/balance/" element={<Balance setLoggedInUser={setLoggedInUser}/>} /> */}
          <Route path="/alldata/" element={<AllData />} />
        </Routes>
      </UserProvider>
    </HashRouter>
  );
};

export default App;




//* DEFAULT TO THIS
// import React, { useState } from 'react';
// import { HashRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './components/navbar';
// import { UserProvider } from './components/context';
// import Home from './components/home';
// import CreateAccount from './components/createaccount';
// import Login from './components/login';
// import Deposit from './components/deposit';
// import Withdraw from './components/withdraw';
// // import Balance from './components/balance';
// import AllData from './components/alldata';


// const App = () => {
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   return (
//     <HashRouter>
//       <NavBar />
//       <UserProvider setLoggedInUser={setLoggedInUser}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/CreateAccount/" element={<CreateAccount setLoggedInUser={setLoggedInUser}/>} />
//           <Route path="/login/" element={<Login setLoggedInUser={setLoggedInUser} />} />
//           <Route path="/deposit/" element={<Deposit />} />
//           <Route path="/withdraw/" element={<Withdraw />} />
//           {/* <Route path="/balance/" element={<Balance setLoggedInUser={setLoggedInUser}/>} /> */}
//           <Route path="/alldata/" element={<AllData />} />
//         </Routes>
//       </UserProvider>
//     </HashRouter>
//   );
// };

// export default App;






