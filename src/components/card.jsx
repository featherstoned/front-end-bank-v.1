//& CODE PLAYGROUND

import React from "react";

const Card = (props) => {
  function classes() {
  const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
  const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
  const font = props.fontFamily ? ' font-' + props.fontFamily : ' ';
  return 'card mb-3 ' + bg + txt;
}

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "30vh" }}
    >
      <div className={classes()} style={{ maxWidth: "10rem" }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body}
          {props.status && <div id="createStatus">{props.status}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;



//* DEFAULT TO THIS
// import React from "react";

// const Card = (props) => {
//   function classes() {
//     const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
//     const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
//     const font = props.fontFamily ? ' font-' + props.fontFamily : ' ';
//     return 'card mb-3 ' + bg + txt;
//   }

//   return (
//     <div className={classes()} style={{ maxWidth: "18rem" }}>
//       <div className="card-header">{props.header}</div>
//       <div className="card-body">
//         {props.title && <h5 className="card-title">{props.title}</h5>}
//         {props.text && <p className="card-text">{props.text}</p>}
//         {props.body}
//         {props.status && <div id="createStatus">{props.status}</div>}
//       </div>
//     </div>
//   );
// };

// export default Card;
