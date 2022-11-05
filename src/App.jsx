import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Fail from './pages/Fail';
import PlayGame from './pages/PlayGame';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';
import MyPage from './pages/Mypage';
import Background from './components/background';

function App() {
  return (
    <>
      <div className="App">
        <Background />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play-game" element={<PlayGame />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="*" element={<Fail />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
