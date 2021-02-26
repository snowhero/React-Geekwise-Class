import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <div>
    <img src="https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg"/>
    <p>Batman vs Superman</p>
  </div>,
  document.getElementById('root')
);


// const rootElement = document.getElementById("root");
// const card = document.createElement('div');
// const title = document.createElement('p');
// const poster = document.createElement('img');
// const type = document.createElement('p');

// poster.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/2/20/Batman_v_Superman_poster.jpg');


// card.append(poster);

// rootElement.append(card);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
