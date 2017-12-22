import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import News from './News';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App>
            <Route exact path="/"component={Home}/>
            <Route path="/news" component={News}/>
            {/* <Route path="/schedule" component={Schedule}/>
            <Route path="/groundmap" component={GroundMap}/> */}
            
        </App>
    </Router>, 
    document.getElementById('root')
);
    registerServiceWorker();

