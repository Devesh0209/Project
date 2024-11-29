import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Devices from './components/DeviceToggle';
import SecurityCameras from './components/SecurityCamera';
// import Navbar from './components/Navbar';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => (
    <div className="dashboard">
        {/* <Navbar />  */}
        <Header />
        <Overview />
        <Devices />
        <SecurityCameras />
    </div>
);

export default App;
