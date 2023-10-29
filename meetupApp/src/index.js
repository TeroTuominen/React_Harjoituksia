import React from 'react'; //React kirjasto
import ReactDOM from 'react-dom'; //React kirjasto
import { BrowserRouter } from 'react-router-dom'; //React kirjasto

import './index.css'; //CSS tiedosto
import App from './App'; //App komponentti

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
document.getElementById('root')
);

