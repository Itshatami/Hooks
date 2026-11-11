import { useState, useTransition } from "react";

function arrayCreator(number = 10) {
  const myArr = [];
  for (let index = number; index > 0; index--) {
    myArr.push(index);
  }
  return myArr;
} 

function TransitionComponent() {
  console.log("Transition Component Rendered");

  const [counter, setCounter] = useState(arrayCreator());
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setValue(event.target.value);
    startTransition(()=> setCounter(arrayCreator(event.target.value)));
  };

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />

      {isPending ? <h1>Loading...</h1> : counter.map((i) => (
        <p key={i}>{i}</p>
      ))}
      
    </div>
  );
}

export default TransitionComponent;
