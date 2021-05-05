import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      Hola Mundo
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
