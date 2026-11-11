import { Route, Routes } from "react-router-dom";
import MemoComponent from "./components/MemoComponent";
import RefComponent from "./components/RefComponent";
import TransitionComponent from "./components/TransitionComponent";
import CustomComponent from "./components/CustomComponent";

function App() {
  return (
    <>
      <h1>Ocean wave</h1>
      <Routes>
        <Route path="/" element={<CustomComponent />} />
        <Route path="/memo" element={<MemoComponent />} />
      </Routes>
      {/* <RefComponent /> */}
      {/* <MemoComponent /> */}
      {/* <TransitionComponent /> */}
    </>
  );
}

export default App;
