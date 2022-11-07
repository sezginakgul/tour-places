import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
    </div>
  );
}

export default App;
