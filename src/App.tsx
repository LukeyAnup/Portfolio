import "./App.css";
import Button from "./component/reusable/button";
import Navbar from "./component/reusable/navbar";
import Portfolio from "./component/views/portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Portfolio />
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
    </div>
  );
}

export default App;
