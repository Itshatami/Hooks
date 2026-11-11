import { useEffect } from "react";
import { useTitle } from "./hooks/useTitle";
import { useLocalStorage } from "./hooks/useLocalStorage";

function CustomComponent() {
  //   useEffect(() => {
  //     document.title = "Custom";
  //   }, []);
  useTitle("Custom");

  const [name, setName] = useLocalStorage("name", "");
  console.log(name);
  

  return (
    <div>
      <p>{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default CustomComponent;
