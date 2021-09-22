import React, {useState}  from 'react';
import './App.css';
import Fruit from './components/Fruit.js'

function App() {

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

    function subtract({id,counter}) {

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
        <>
            <h1>Fruitmand bezorgservice</h1>


            {/*Je maakt gebruik van de useState hook van React om de hoeveelheden bij te houden*/}
            {/*Klanten hebben de vrijheid om te kiezen tussen vier typen fruit:*/}
            {/*Bananen 🍌*/}
            {/*Aarbeien 🍓*/}
            {/*Appels 🍏*/}
            {/*Kiwi's 🥝*/}
            {/*Elk type fruit heeft twee buttons: één die de hoeveelheid verhoogd (+) en één die de hoeveelheid verlaagd (-)*/}
            {/*De hoeveelheid mag door de gebruiker niet lager gezet worden dan 0*/}
            {/*De hoeveelheid geselecteerde fruittypes wordt bij iedere update getoond aan de gebruiker*/}
            {/*Er is ook een reset button, die alle counters weer op 0 zet.*/}

            <div className="fruitBasket" >
            <Fruit id="Bananen" name="Bananen" emoji="🍌" add={add} counter={counterBanana} subtract={subtract}/>
            <Fruit id="Aarbeien" name="Aarbeien" emoji="🍓" add={add} counter={counterStrawberry} subtract={subtract}/>
            <Fruit id="Appels" name="Appels" emoji="🍏" add={add} counter={counterApple} subtract={subtract}/>
            <Fruit id="Kiwi's" name="Kiwi's" emoji="🥝" add={add} counter={counterKiwi} subtract={subtract}/>
            </div>

            <button type="button" onClick={resetCounters}>
                reset
            </button>

            {/*Het formulier bevat de volgende velden:*/}
            {/*Voornaam*/}
            {/*Achternaam*/}
            {/*Leeftijd*/}
            {/*Postcode*/}
            {/*Selectbox met bezorgfrequentie. Opties: iedere week, om de week, iedere maand*/}
            {/*Radiobuttons met tijdvak. Opties: overdag, 's avonds*/}
            {/*Opmerking (textarea)*/}
            {/*Akkoord met de voorwaarden (checkbox)*/}
            {/*Verzendbutton*/}
            {/*Pas wanneer de gebruiker op verzenden drukt, worden de formulier-waardes én de fruit-waardes in de console gelogd!*/}

            <form>


            </form>



        </>
    );
}

export default App;
