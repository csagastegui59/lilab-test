import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Body from './components/body';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar/>
      <Body />
      <Footer/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
