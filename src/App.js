import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">redux saga</div>
      <button onClick={() => dispatch({ type: "CLICK" })}>Click me</button>
    </>
  );
}

export default App;
