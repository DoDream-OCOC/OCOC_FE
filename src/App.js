import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Fail from "./pages/Fail";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Fail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
