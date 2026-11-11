import React, { memo } from "react";

function ChildComponent({ nubmer }) {
  console.log("Child Component is rendered");

  return <div>ChildComponent : {nubmer}</div>;
}

export default memo(ChildComponent);
