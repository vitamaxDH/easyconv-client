import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

import TopNav from "./components/layout/top-nav.component";

const App = () => {
    return (
        <Router>
            <TopNav/>
        </Router>
    );
}

export default App;
