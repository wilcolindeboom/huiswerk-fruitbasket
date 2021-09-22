import React from 'react';
import './App.css';
import Form from './components/Form.js';
import FruitBasket from "./components/FruitBasket";

function App() {

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitBasket/>
            <Form/>
        </>
    );
}

export default App;
