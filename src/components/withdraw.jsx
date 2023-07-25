//! REQUIRED COMPONENT
//? functionality: (alert insufficient funds), (button disabled), (alert NaN) - all updated in handleWithdraw function

//& CODE PLAYGROUND
import React,{useState, useEffect, useContext} from "react";
import {UserContext} from './context';
import Card from './card';

function Withdraw() {
    const [showWithdraw, setShowWithdraw] = useState(true);
    const [status, setStatus] = useState('');
    const [withdraw, setWithdraw] = useState('');
    const [balance, setBalance] = useState(() => {
      const storedBalance = localStorage.getItem('balance');
      return storedBalance ? parseFloat(storedBalance) : 0;
    });
    const ctx = useContext(UserContext);
  
    useEffect(() => {
    localStorage.setItem('balance', balance);
    }, [balance]); 
  
    function validate(field, label) {
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }
  
  
    function handleWithdraw() {
      
      if (!validate(withdraw, 'withdraw')) return;
      
      const withdrawAmount = parseFloat(withdraw);
      if (isNaN(withdrawAmount)) {
        alert('that is not a number');
        return;
      }
      
      if (withdrawAmount > balance) {
        alert('you aint got that kind of money');
        return;
      }

      const newBalance = parseFloat(balance) - parseFloat(withdraw);
      setBalance(newBalance);
      setShowWithdraw(false);
    }
  
  
    function clearWithdrawForm() {
      setWithdraw('');
      setShowWithdraw(true);
    }
  
    const isButtonDisabled = withdraw === '';

    return (
      <div style={{ backgroundColor: "blue", minHeight: "100vh" }}>
      
        {showWithdraw && (
          <Card
            bgcolor="dark"
            txtcolor="white"
            header="Withdraw"
            status={status}
            body={
              <>
                Balance ${balance} <br />
                Withdraw<br />
                <input
                  type="input"
                  className="form-control"
                  id="withdraw"
                  placeholder="Withdraw Amount"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
                <br />
  
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleWithdraw}
                  disabled={isButtonDisabled}
                >
                  Withdraw
                </button>
              </>
            }
          />
        )}
  
        {!showWithdraw && (
          <Card
            bgcolor="success"
            txtcolor="white"
            header="Withdraw"
            status={status}
            body={
              <>
                <h5>Success</h5>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearWithdrawForm}
                >
                  Check Updated Balance
                </button>
              </>
            }
          />
        )}
      </div>
    );
  }

  export default Withdraw;
  
//! DON'T DELETE - DEFAULT TO THIS - REQUIRED COMPONENT
// //? functionality: (alert insufficient funds), (button disabled), (alert NaN) - all updated in handleWithdraw function

// import React,{useState, useEffect, useContext} from "react";
// import {UserContext} from './context';
// // import {Card} from bootstrap;
// import Card from './card';

// function Withdraw() {
//     // const [showDeposit, setShowDeposit] = React.useState(true);
//     const [showWithdraw, setShowWithdraw] = useState(true);
//     const [status, setStatus] = useState('');
//     // const [deposit, setDeposit] = React.useState('');
//     const [withdraw, setWithdraw] = useState('');
//     const [balance, setBalance] = useState(() => {
//       const storedBalance = localStorage.getItem('balance');
//       return storedBalance ? parseFloat(storedBalance) : 0;
//     });
//     const ctx = useContext(UserContext);
  
//     useEffect(() => {
//     localStorage.setItem('balance', balance);
//     }, [balance]); 
  
//     function validate(field, label) {
//       if (!field) {
//         setStatus('Error: ' + label);
//         setTimeout(() => setStatus(''), 3000);
//         return false;
//       }
//       return true;
//     }
  
//     // function handleDeposit() {
//       // if (!validate(deposit, 'deposit')) return;
//     //   const newBalance = parseFloat(balance) + parseFloat(deposit);
//     //   setBalance(newBalance);
//     //   setShowDeposit(false);
//     // }
  
//     function handleWithdraw() {
      
//       if (!validate(withdraw, 'withdraw')) return;
      
//       const withdrawAmount = parseFloat(withdraw);
//       if (isNaN(withdrawAmount)) {
//         alert('that is not a number');
//         return;
//       }
      
//       if (withdrawAmount > balance) {
//         alert('you aint got that kind of money');
//         return;
//       }

//       const newBalance = parseFloat(balance) - parseFloat(withdraw);
//       setBalance(newBalance);
//       setShowWithdraw(false);
//     }
  
//     // function clearDepositForm() {
//     //   setDeposit('');
//     //   setShowDeposit(true);
//     // }
  
//     function clearWithdrawForm() {
//       setWithdraw('');
//       setShowWithdraw(true);
//     }
  
//     const isButtonDisabled = withdraw === '';

//     return (
//       <div>
      
//         {/* {showDeposit && (
//           <Card
//             bgcolor="info"
//             header="Deposit"
//             status={status}
//             body={
//               <> */}
//                 {/* Balance ${balance} <br />
//                 Deposit<br />
//                 <input
//                   type="input"
//                   className="form-control"
//                   id="deposit"
//                   placeholder="Deposit Amount"
//                   value={deposit}
//                   onChange={(e) => setDeposit(e.currentTarget.value)}
//                 />
//                 <br />
  
//                 <button
//                   type="submit"
//                   className="btn btn-light"
//                   onClick={handleDeposit}
//                 >
//                   Deposit
//                 </button>
//               </>
//             }
//           />
//         )} */}
  
//         {/* {!showDeposit && (
//           <Card
//             bgcolor="info"
//             header="Deposit"
//             status={status}
//             body={
//               <>
//                 <h5>Success</h5>
//                 <button
//                   type="submit"
//                   className="btn btn-light"
//                   onClick={clearDepositForm}
//                 >
//                   Check Updated Balance
//                 </button>
//               </>
//             }
//           />
//         )} */}
  
//         {showWithdraw && (
//           <Card
//             bgcolor="dark"
//             txtcolor="white"
//             header="Withdraw"
//             status={status}
//             body={
//               <>
//                 Balance ${balance} <br />
//                 Withdraw<br />
//                 <input
//                   type="input"
//                   className="form-control"
//                   id="withdraw"
//                   placeholder="Withdraw Amount"
//                   value={withdraw}
//                   onChange={(e) => setWithdraw(e.currentTarget.value)}
//                 />
//                 <br />
  
//                 <button
//                   type="submit"
//                   className="btn btn-light"
//                   onClick={handleWithdraw}
//                   disabled={isButtonDisabled}
//                 >
//                   Withdraw
//                 </button>
//               </>
//             }
//           />
//         )}
  
//         {!showWithdraw && (
//           <Card
//             bgcolor="success"
//             txtcolor="white"
//             header="Withdraw"
//             status={status}
//             body={
//               <>
//                 <h5>Success</h5>
//                 <button
//                   type="submit"
//                   className="btn btn-light"
//                   onClick={clearWithdrawForm}
//                 >
//                   Check Updated Balance
//                 </button>
//               </>
//             }
//           />
//         )}
//       </div>
//     );
//   }

//   export default Withdraw;
  
  