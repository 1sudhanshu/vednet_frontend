import Routers from "./Routes";
import { ToastContainer } from "react-bootstrap";
import '../src/App.css'
const App = () => {
  return (
    <>
      <Routers />
      <ToastContainer />
    </>
  );
};

export default App;
