import { useEffect } from "react";
import { useTitle } from "./hooks/useTitle";

function CustomComponent() {
  //   useEffect(() => {
  //     document.title = "Custom";
  //   }, []);
  useTitle("Custom");

  return <div>CustomComponent</div>;
}

export default CustomComponent;
