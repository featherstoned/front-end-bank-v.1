//& CODE PLAYGROUND - NEEDS MORE STYLING
import React from 'react';
import Card from './card';
// import '../styles.css';
// import '../index.css';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    minHeight: '100vh', // Set the minimum height to cover the entire viewport
    backgroundImage: `url('./assets/surfer.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: '100%', // Adjust the size of the image here percent or pixels or cover
    // backgroundColor: '#3a0e29',
  };

  

  const cardStyle = {
    maxWidth: '30rem',
    marginBottom: '500px',
    padding: '25px',
    backgroundColor: 'transparent',
    borderRadius: '15px',
  };

  const textStyle = {
    textAlign: 'center',
    fontFamily: 'Ysabeau SC', 
    // backgroundColor: 'red',
  };
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <Card
          bgcolor= 'light'
          txtcolor='dark' 
          header={<h5 className="text-center" style={textStyle}>E Komo Mai & Welcome</h5>}
          title={<h5 style={textStyle}>Hawaii's Bank With No Security</h5>}
          body={<h1 style={textStyle}>Aloha Bank</h1>}
       ></Card>
      </div>
    </div>
  );
};

export default Home;

//* DEFAULT TO THIS
// import React from 'react';
// import MyCard from './card';

// const Home = () => {
//   const containerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh', // Set the minimum height to cover the entire viewport
//     backgroundImage: `url('./assets/surfer.jpg')`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center',
//     backgroundSize: 'cover',
//   };
// //maybe move this into a div className and style in css
//   const cardStyle = {
//     maxWidth: '30rem',
//     // marginTop: '100px',
//     marginBottom: '500px',
//     padding: '25px',
//     backgroundColor: 'transparent',
//     borderRadius: '15px',
//     // 'rgba(255, 255, 255, 0.7)', // Add a semi-transparent background to the card
//   };

//   const textStyle = {
//     textAlign: 'center',
//     fontFamily: 'Times New Roman',
//     // backgroundColor: 'blue',
    
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle}>
//         <MyCard
//           bgcolor="dark"
//           txtcolor="light"
//           header={<h5 className="text-center">Welcome</h5>}
//           title={<h5 style={textStyle}>A New Dawn In Banking</h5>}
//           body={<h1 style={textStyle}>Aloha Bank</h1>}
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;


  
  
  
  
    
  
  
  
  