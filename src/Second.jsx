import { useState } from 'react'
import Image from './assets/second.jpg'
import Popup from './components/Popup'

import Header from './components/Header';
import Instructions from './components/Instructions';
import Win from './components/Win';

import Pikachu from './assets/pikachu.png'
import Mime from './assets/mr-mime.png'
import Azurill from './assets/azurill.png'


let pokeInfo = [
    {
        name: 'Mr.Mime',
        image: Mime
    },
    {
        name: 'Pikachu',
        image: Pikachu
    },
    {
        name: 'Azurill',
        image: Azurill
    }
];

let completed = false;
let timeTaken;

function Second() {
    const [displayCircle, setDisplayCircle] = useState(false);
    const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });
    let [pokemonInfo, setPokemonInfo] = useState(pokeInfo);
    let [startTime, setStartTime] = useState(new Date().getTime());
    
    

    pokeInfo = pokeInfo.map((pokemon) => {
        pokemonInfo.includes(pokemon) ? pokemon.completed = false : pokemon.completed = true;
        return pokemon;
    });

    if(pokemonInfo.length === 0) {
        completed = true;
        timeTaken = new Date().getTime() - startTime;
        console.log(timeTaken);
    }

    const handleClick = (e) => {  
        if (displayCircle) {
            setDisplayCircle(false);
        }
        else {
            setCoordinates({ x: e.pageX, y: e.pageY });
            setDisplayCircle(true);
        }
    }
    

    return (
        <>
            <Header pokeInfo={pokeInfo}/>
            <img src={Image} alt="Blehhh" className='image' onClick={handleClick} />
            {displayCircle && <div className='circle' style={{ top: y - 25, left: x - 25 }}></div>}
            {displayCircle && <Popup x={x} y={y} setDisplayCircle={setDisplayCircle} pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} game={2}/>}

            <Instructions setStartTime={setStartTime}/>
            {completed && <Win timeTaken={timeTaken} game={2}/>}
        </>
    )
}

export default Second
