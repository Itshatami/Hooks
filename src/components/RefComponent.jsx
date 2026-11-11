import { useEffect, useRef, useState } from "react";

// const variable
// ref
// state

function RefComponent() {
  console.log("re-render");

  const services = [
    { id: 1, title: "integrated AI" },
    { id: 2, title: "chat" },
    { id: 3, title: "monitoring" },
  ];

  const number = useRef(0);
  const [counter, setCounter] = useState(0);

  const input = useRef(null);

  useEffect(()=> {
    input.current.focus()
  } , [])

  const numberHandler = () => {
    // number.current++;
    // services.push({id:4 , title:"javadi"})
    // console.log(number);
    // console.log(services);
    console.log(input.current.value)
  };

  const counterHandler = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <h3>Ref Component</h3>
      <p>{number.current}</p>
      <input type="text" ref={input} />
      <button onClick={numberHandler}>Increase</button>
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
      </ul>

      <p>{counter}</p>
      <button onClick={counterHandler}>count</button>
    </div>
  );
}

export default RefComponent;
