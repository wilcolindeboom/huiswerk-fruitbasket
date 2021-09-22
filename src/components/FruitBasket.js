import React, {useState}  from 'react';
import './FruitBasket.css';
import Fruit from './Fruit.js';




function FruitBasket() {

    const [counterApple, setCounterApple] = useState(0);
    const [counterKiwi, setCounterKiwi] = useState(0);
    const [counterStrawberry, setcounterStrawberry] = useState(0);
    const [counterBanana, setcounterBanana] = useState(0);


    function add({id}) {

        switch (id) {
            case "Appels":
                setCounterApple(counterApple + 1);
                break;
            case "Aarbeien":
                setcounterStrawberry(counterStrawberry + 1);
                break;
            case "Bananen":
                setcounterBanana(counterBanana + 1);
                break;

            default:
                setCounterKiwi(counterKiwi + 1);
        }
    }

    function subtract({id, counter}) {

        switch (counter) {
            case 0:
                // counter cannot be lower then zero
                break;

            default:

                switch (id) {
                    case "Appels":
                        setCounterApple(counterApple - 1);
                        break;
                    case "Aarbeien":
                        setcounterStrawberry(counterStrawberry - 1);
                        break;
                    case "Bananen":
                        setcounterBanana(counterBanana - 1);
                        break;

                    default:
                        setCounterKiwi(counterKiwi - 1);
                }
        }
    }

    function resetCounters() {
        console.log("reset");
        setCounterApple(0);
        setCounterKiwi(0);
        setcounterStrawberry(0);
        setcounterBanana(0);
    }


    return (

        <div className="fruitBasket">
            <Fruit id="Bananen" name="Bananen" emoji="🍌" add={add} counter={counterBanana} subtract={subtract}/>
            <Fruit id="Aarbeien" name="Aarbeien" emoji="🍓" add={add} counter={counterStrawberry} subtract={subtract}/>
            <Fruit id="Appels" name="Appels" emoji="🍏" add={add} counter={counterApple} subtract={subtract}/>
            <Fruit id="Kiwi's" name="Kiwi's" emoji="🥝" add={add} counter={counterKiwi} subtract={subtract}/>
            <button type="button" onClick={resetCounters}>
                reset
            </button>
        </div>

    );

}


export default FruitBasket;