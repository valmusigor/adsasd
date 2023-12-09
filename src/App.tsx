import React from 'react';
import './App.css';
import {Counter} from './Counter';

function App() {
    return (
        <div className="App">
            <Counter limit={5}/>
        </div>
    );
}

export default App;
