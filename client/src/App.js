import MainComponent from "./components/public-side/main-component/main-component";
import AdminComponent from "./components/admin-side/admin-component/admin-component";
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainComponent/>} />
        <Route path="/admin" element={<AdminComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
