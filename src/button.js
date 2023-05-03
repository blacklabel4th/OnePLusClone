import React from "react";

const button = () => {
  return (
    <div>
      <div className="div1">
        <img className="Card1" src={props.image} alt="pic"></img>
        <div className="description">
          <h1 className="colors" style={{ color: props.color }}>
            {props.name}
          </h1>
          <p>{props.skill}</p>
          <button>
            <h3 className="btn-txt">Learn more</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default button;
