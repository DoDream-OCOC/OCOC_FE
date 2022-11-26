import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// Pages
import Home from './pages/Home';
import Fail from './pages/Fail';
import PlayGame from './pages/PlayGame';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';
import Test from './pages/Test';
import MyPage from './pages/Mypage';
import Background from './components/background';
import { useSelector } from 'react-redux';

function App() {
  const { stage, life } = useSelector(state => state.game);
  const [color, setColor] = useState('#D2FFFC');

  React.useLayoutEffect(() => {
    if (stage >= 11) {
      setColor('#FFEAD2');
    } else if (stage >= 21) {
      setColor('#DADEFC');
    }
  });

  return (
    <>
      <div className="App">
        <Background color={color} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play-game" element={<PlayGame />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-page" element={<MyPage />} />
            <Route path="*" element={<Fail />} />
            {process.env.NODE_ENV === 'development' && <Route path="/test" element={<Test />} />}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
