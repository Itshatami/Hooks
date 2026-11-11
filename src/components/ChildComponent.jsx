import React, { memo } from "react";

function ChildComponent({ nubmer, clickHandler }) {
  console.log("Child Component is rendered");

  return (
    <div>
      <h5>ChildComponent : {nubmer}</h5>
      <button onClick={clickHandler}>+child</button>
    </div>
  );
}

export default memo(ChildComponent);
