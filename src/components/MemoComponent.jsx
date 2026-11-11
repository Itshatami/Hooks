// Memoization

import { useState } from "react";
import ChildComponent from "./ChildComponent";

// جلوگیری میکنه از رندر های تکراری
// مثلا وقت هایی که خروجی ها در هر رندر یکیه و نیاز نیست هربار همون محاسبات رو انجام بده

// کی رندر صورت میگیره ؟
// state
// context
// parent

function MemoComponent() {
  console.log("Memo Component is rendered.");

  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h4>Memo Component</h4>
      <span>{counter}</span>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <ChildComponent nubmer={number} />
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
}

export default MemoComponent;
