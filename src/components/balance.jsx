//^ NOT REQUIRED - TAKE THIS OUT
const { useEffect, useState } = require("react");

import React,{useEffect, useState} from "react";
import Card from './Card';

//! original code, this works displays 2 card

function Balance() {
    const [status, setStatus] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');
    const [balance, setBalance] = useState(() => {
      const storedBalance = localStorage.getItem('balance');
      return storedBalance ? parseFloat(storedBalance) : 0;
    });
  
    useEffect(() => {
      localStorage.setItem('balance', balance);
    }, [balance]);
  
    function validate() {
      if (!transactionAmount) {
        setStatus('Error: Please enter an amount.');
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }
  
    function handleTransaction(type) {
      if (!validate()) return;
      const amount = parseFloat(transactionAmount);
      if (type === 'deposit') {
        const newBalance = balance + amount;
        setBalance(newBalance);
      } else if (type === 'withdraw') {
        if (amount > balance) {
          setStatus('Error: Insufficient balance.');
          setTimeout(() => setStatus(''), 3000);
          return;
        }
        const newBalance = balance - amount;
        setBalance(newBalance);
      }
      setTransactionAmount('');
    }
  //can return card to display transaction amount and two buttons
    return (
      <div>
        <Card
          bgcolor="dark"
          txtcolor="light"
          header="Balance"
          status={status}
          body={
            <>
              Balance: ${balance} <br />
              <br />
              {/* <input
                type="input"
                className="form-control"
                id="transactionAmount"
                placeholder="Transaction Amount"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={() => handleTransaction('deposit')}
              >
                Deposit
              </button>
              <button
                type="submit"
                className="btn btn-light"
                onClick={() => handleTransaction('withdraw')}
              >
                Withdraw
              </button> */}
            </>
          }
        />
      </div>
    );
  }

  export default Balance;
  
  // //from file that works
  
  // //! original code, this works displays 2 card
  
  // function Balance() {
  //   const [status, setStatus] = React.useState('');
  //   const [transactionAmount, setTransactionAmount] = React.useState('');
  //   const [balance, setBalance] = React.useState(() => {
  //     const storedBalance = localStorage.getItem('balance');
  //     return storedBalance ? parseFloat(storedBalance) : 0;
  //   });
  
  //   React.useEffect(() => {
  //     localStorage.setItem('balance', balance);
  //   }, [balance]);
  
  //   function validate() {
  //     if (!transactionAmount) {
  //       setStatus('Error: Please enter an amount.');
  //       setTimeout(() => setStatus(''), 3000);
  //       return false;
  //     }
  //     return true;
  //   }
  
  //   function handleTransaction(type) {
  //     if (!validate()) return;
  //     const amount = parseFloat(transactionAmount);
  //     if (type === 'deposit') {
  //       const newBalance = balance + amount;
  //       setBalance(newBalance);
  //     } else if (type === 'withdraw') {
  //       if (amount > balance) {
  //         setStatus('Error: Insufficient balance.');
  //         setTimeout(() => setStatus(''), 3000);
  //         return;
  //       }
  //       const newBalance = balance - amount;
  //       setBalance(newBalance);
  //     }
  //     setTransactionAmount('');
  //   }
  // //can return card to display transaction amount and two buttons
  //   return (
  //     <div>
  //       <Card
  //         bgcolor="dark"
  //         txtcolor="light"
  //         header="Balance"
  //         status={status}
  //         body={
  //           <>
  //             Balance: ${balance} <br />
  //             <br />
  //             {/* <input
  //               type="input"
  //               className="form-control"
  //               id="transactionAmount"
  //               placeholder="Transaction Amount"
  //               value={transactionAmount}
  //               onChange={(e) => setTransactionAmount(e.currentTarget.value)}
  //             />
  //             <br />
  //             <button
  //               type="submit"
  //               className="btn btn-light"
  //               onClick={() => handleTransaction('deposit')}
  //             >
  //               Deposit
  //             </button>
  //             <button
  //               type="submit"
  //               className="btn btn-light"
  //               onClick={() => handleTransaction('withdraw')}
  //             >
  //               Withdraw
  //             </button> */}
  //           </>
  //         }
  //       />
  //     </div>
  //   );
  // }
  
  // // function Balance() {
  // //   const [showDeposit, setShowDeposit] = React.useState(true);
  // //   const [showWithdraw, setShowWithdraw] = React.useState(true);
  // //   const [status, setStatus] = React.useState('');
  // //   const [deposit, setDeposit] = React.useState('');
  // //   const [withdraw, setWithdraw] = React.useState('');
  // //   const [balance, setBalance] = React.useState(() => {
  // //     const storedBalance = localStorage.getItem('balance');
  // //     return storedBalance ? parseFloat(storedBalance) : 0;
  // //   });
  // //   const ctx = React.useContext(UserContext);
  
  // //   React.useEffect(() => {
  // //   localStorage.setItem('balance', balance);
  // //   }, [balance]); 
    
    
  // //   function validate(field, label) {
  // //     if (!field) {
  // //       setStatus('Error: ' + label);
  // //       setTimeout(() => setStatus(''), 3000);
  // //       return false;
  // //     }
  // //     return true;
  // //   }
  
  // //   function handleDeposit() {
  // //     if (!validate(deposit, 'deposit')) return;
  // //     const newBalance = parseFloat(balance) + parseFloat(deposit);
  // //     setBalance(newBalance);
  // //     setShowDeposit(false);
  // //   }
  
  // //   function handleWithdraw() {
  // //     if (!validate(withdraw, 'withdraw')) return;
  // //     const newBalance = parseFloat(balance) - parseFloat(withdraw);
  // //     setBalance(newBalance);
  // //     setShowWithdraw(false);
  // //   }
  
  // //   function clearDepositForm() {
  // //     setDeposit('');
  // //     setShowDeposit(true);
  // //   }
  
  // //   function clearWithdrawForm() {
  // //     setWithdraw('');
  // //     setShowWithdraw(true);
  // //   }
  
  // //   return (
  // //     <div>
  // //       {showDeposit && (
  // //         <Card
  // //           bgcolor="info"
  // //           header="Deposit"
  // //           status={status}
  // //           body={
  // //             <>
  // //               Balance ${balance} <br />
  // //               Deposit<br />
  // //               <input
  // //                 type="input"
  // //                 className="form-control"
  // //                 id="deposit"
  // //                 placeholder="Deposit Amount"
  // //                 value={deposit}
  // //                 onChange={(e) => setDeposit(e.currentTarget.value)}
  // //               />
  // //               <br />
  
  // //               <button
  // //                 type="submit"
  // //                 className="btn btn-light"
  // //                 onClick={handleDeposit}
  // //               >
  // //                 Deposit
  // //               </button>
  // //             </>
  // //           }
  // //         />
  // //       )}
  
  // //       {!showDeposit && (
  // //         <Card
  // //           bgcolor="info"
  // //           header="Deposit"
  // //           status={status}
  // //           body={
  // //             <>
  // //               <h5>Success</h5>
  // //               <button
  // //                 type="submit"
  // //                 className="btn btn-light"
  // //                 onClick={clearDepositForm}
  // //               >
  // //                 Check Updated Balance
  // //               </button>
  // //             </>
  // //           }
  // //         />
  // //       )}
  
  // //       {showWithdraw && (
  // //         <Card
  // //           bgcolor="info"
  // //           header="Withdraw"
  // //           status={status}
  // //           body={
  // //             <>
  // //               Balance ${balance} <br />
  // //               Withdraw<br />
  // //               <input
  // //                 type="input"
  // //                 className="form-control"
  // //                 id="withdraw"
  // //                 placeholder="Withdraw Amount"
  // //                 value={withdraw}
  // //                 onChange={(e) => setWithdraw(e.currentTarget.value)}
  // //               />
  // //               <br />
  
  // //               <button
  // //                 type="submit"
  // //                 className="btn btn-light"
  // //                 onClick={handleWithdraw}
  // //               >
  // //                 Withdraw
  // //               </button>
  // //             </>
  // //           }
  // //         />
  // //       )}
  
  // //       {!showWithdraw && (
  // //         <Card
  // //           bgcolor="primary"
  // //           header="Withdraw"
  // //           status={status}
  // //           body={
  // //             <>
  // //               <h5>Success</h5>
  // //               <button
  // //                 type="submit"
  // //                 className="btn btn-light"
  // //                 onClick={clearWithdrawForm}
  // //               >
  // //                 Check Updated Balance
  // //               </button>
  // //             </>
  // //           }
  // //         />
  // //       )}
  // //     </div>
  // //   );
  // // }