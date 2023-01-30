import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StateProvider} from "./redux/StateProvider";
import reducer, { initialState } from "./reducer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState}>
       <App />
    </StateProvider>
  </React.StrictMode>
);

