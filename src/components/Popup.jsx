import Pikachu from '../assets/pikachu.png';
import Eevee from '../assets/eevee.png';
import Meowth from '../assets/meowth.png';
import { useState } from 'react';

export default function Popup({ x, y, setDisplayCircle, pokemonInfo, setPokemonInfo ,game, completed, setCompleted }) {
    
    let popUpx, popUpy;
    if(x > window.innerWidth/1.8)
        popUpx = x - 230;
    else    
        popUpx = x ;

    if(y > window.innerHeight/1.8)
        popUpy = y - 230;
    else    
        popUpy = y ;


    const handleAnswer = async (e) => {

        let percentX = x / window.innerWidth * 100;
        let percentY = (y - document.querySelector('.image').offsetTop) / ((window.innerWidth / document.querySelector('.image').naturalWidth) * document.querySelector('.image').naturalHeight) * 100;

        console.log("X: "+percentX);
        console.log("Y: "+percentY);

        const pokemon = e.target.innerText;
        const response = await fetch('https://where-pikachu-api.onrender.com/pokemon/'+game+'/'+pokemon,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({x: percentX, y: percentY})
        });
        const data = await response.json();
        if(data.message === 'Correct') {
            alert('Correct! You found '+pokemon+'!');
            let temp = pokemonInfo.filter((poke) => poke.name !== pokemon)
            setPokemonInfo(temp);
            console.log(temp);
        }
        else
            alert('Wrong!');
        setDisplayCircle(false);
    };

    return (
        <div className="popup" style={{top: popUpy+30, left: popUpx+30}}>
            {pokemonInfo.map((pokemon) => {
                return (
                    <div className="option" onClick={handleAnswer}>
                        <img src={pokemon.image} className='optionicon'  />
                        <div>{pokemon.name}</div>
                    </div>
                )
            })}
        </div>
    )
}