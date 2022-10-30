import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Fail from './pages/Fail';
import ClickEng from './pages/ClickEng';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/click-eng" element={<ClickEng />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<Fail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
