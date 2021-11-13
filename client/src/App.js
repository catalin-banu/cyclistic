import WelcomeComponent from "./components/welcome-component/welcome-component";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<WelcomeComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
