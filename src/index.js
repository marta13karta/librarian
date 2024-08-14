import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './styles/global.css';
import Librarian from './components/Librarian';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Librarian />
  </React.StrictMode>
);
