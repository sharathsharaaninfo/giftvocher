import React, { useState, useEffect } from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import VideoModal from './components/VideoModal';
import Akshaya from './Akshaya/akshaya';
import Udupi from  './Udupi/udupi'
import SIJE from './SIJE/sije'
import Mysuru from './Mysuru/mysuru'
import Madurai from './Madurai/madurai'
import Hyderabad from './Hyderabad/hyderabad'
import Hoodi from './Hoodi/hoodi'
import Bhimagala from './Bhimagala/bhimagala'
import ThankYouPage from'./SIJE/ThankYouPage'
import Home from './components/Home/home';
import Hassan from './Hassan/hassan'
import Generic from './Generic/generic'
import Akshayatritiya from './Akshayatritiya/Akshayatritiya'

function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    setVideoModalOpen(false);
  }, []);

  const handleClose = () => {
    setVideoModalOpen(false);
  };

  return (
    <div className="app">
        <Link to="/Akshaya"></Link>
        {/* <InputBox />
        <VideoModal isOpen={videoModalOpen} onClose={handleClose} /> */}
      <Link to="/Udupi"></Link>
      <Link to="/SIJE"></Link>
      <Link to="/Mysuru"></Link>
      <Link to="/Madurai"></Link>
      <Link to="/Hyderabad"></Link>
      <Link to="/Hoodi"></Link>
      <Link to="/Bhimagala"></Link>
      <Link to="/Hassan"></Link>
      <Link to="/Generic"></Link>
      <Link to="/Akshayatritiya"></Link>
      <Routes>
    
        <Route exact path="/Akshaya" element={<Akshaya />} />
        <Route exact path="/Udupi" element={<Udupi />} />
        <Route exact path="/SIJE" element={<SIJE />} />
        <Route exact path="/Mysuru" element={<Mysuru />} />
        <Route exact path="/Madurai" element={<Madurai />} />
        <Route exact path="/Hyderabad" element={<Hyderabad />} />
        <Route exact path="/Hoodi" element={<Hoodi />} />
        <Route exact path="/Bhimagala" element={<Bhimagala />} />
        <Route exact path="/Hassan" element={<Hassan />} />
        <Route exact path="/Generic" element={<Generic />} />
        <Route exact path="/Akshayatritiya" element={<Akshayatritiya/>}/>
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route
        exact  path="/"
          element={
            <div className="content">
              <Home />
              {/* <Mob/> */}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
