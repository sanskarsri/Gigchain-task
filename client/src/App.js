import Barchart from "./components/Barchart";
import Boxrow from "./components/Boxrow";
import Tablerow from "./components/TableRow";

function App() {
  return (
    <div className="container">
      <Boxrow />
      <Barchart />
      <Tablerow />
    </div>
  );
}

export default App;
