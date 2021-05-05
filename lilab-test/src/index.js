import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import FirstComponent from './components/first-component.js';

function App() {
  return (
    <div className="App">
      <FirstComponent />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
