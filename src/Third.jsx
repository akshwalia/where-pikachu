import { useState } from 'react'
import Image from './assets/third.png'
import Popup from './components/Popup'

import Header from './components/Header';
import Instructions from './components/Instructions';
import Win from './components/Win';

import Donphan from './assets/donphan.png'
import Pikachu from './assets/pikachu.png'
import Groudon from './assets/groudon.png'


let pokeInfo = [
    {
        name: 'Donphan',
        image: Donphan
    },
    {
        name: 'Pikachu',
        image: Pikachu
    },
    {
        name: 'Groudon',
        image: Groudon
    }
];

let completed = false;
let timeTaken;

function Third() {
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
            {displayCircle && <Popup x={x} y={y} setDisplayCircle={setDisplayCircle} pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} game={3}/>}

            <Instructions setStartTime={setStartTime}/>
            {completed && <Win timeTaken={timeTaken} game={3}/>}
        </>
    )
}

export default Third
