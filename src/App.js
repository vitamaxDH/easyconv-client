import {React, Component, useState, useEffect} from 'react'
import './App.css';
import NavComponent from "./component/layout/top-nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
    const [ greeting, setGreeting] = useState("hasn't answered yet");

    useEffect(() => {
        // 컴포넌트가 마운트 되고 setTimeout함수를실행합니다.
        axios.get('/api/index')
            .then(res => console.log(res));
    }, []);

    return (
        <div>
            <NavComponent/>
            {greeting}
        </div>
    );
}

export default App;
