import React from 'react';
import './Fruit.css';

function Fruit({id,name,emoji,add,counter,subtract}) {



    return (
    <>
    <div className="fruit">
                <span className="fruitemoji">
                    {emoji}
                </span>
        <span className="fruitname">
                    {name}
                </span>
        <button id="-" type="submit" onClick={()=> {subtract({id,counter})}}>
            -
        </button>
        <span id={id}>
                    {counter}
                </span>
        <button id="+" type="submit" onClick={()=> {add({id})}}>
            +
        </button>
    </div>
    </>

    )
}

export default Fruit;