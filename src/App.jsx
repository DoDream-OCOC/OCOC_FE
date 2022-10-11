import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Fail from './pages/Fail';
import LevelSelection from './pages/LevelSelection';
import ClickEng from './pages/ClickEng';
import SignIn from './pages/sign/SignIn';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lvl-slc" element={<LevelSelection />} />
            <Route path="/click-eng" element={<ClickEng />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<Fail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
