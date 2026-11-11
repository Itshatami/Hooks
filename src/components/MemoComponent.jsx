// Memoization

import { useMemo, useState } from "react";
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

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return counter;
  }, [counter]);

  return (
    <div>
      <span>{slow}</span>
      <h4>Memo Component</h4>
      <span>{counter}</span>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      {/* <ChildComponent nubmer={number} /> */}
      <br />
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
}

export default MemoComponent;
