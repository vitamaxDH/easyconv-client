import {React, Component, useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from "./component/layout/top-nav.component";
import FooterComponent from "./component/layout/footer.component";
import MainComponent from "./component/main/main.component";

const App = () => {
    return (
        <div>
            <NavComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
