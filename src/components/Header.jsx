import Detective from '../assets/detective.png'
let className;

export default function Header({ pokeInfo }) {
    return (
        <>
            <header>
                
                <a href="/">
                    <img src={Detective} alt="Pikachu with a magnifying glass" />
                    <div className='heading'>
                        <span className='where'>Where's </span> Pikachu
                    </div>
                </a>

                {(pokeInfo) ?
                    <div className="tofind">
                        {pokeInfo.map((pokemon, index) => {
                            if (pokemon.completed)
                                className = 'pokemon completed'
                            else
                                className = 'pokemon'
                            return (

                                <div className={className}>
                                    <img src={pokemon.image} alt={pokemon.name} />
                                    <h3>{pokemon.name}</h3>
                                </div>
                            )
                        })}
                        {/* <div className="pokemon">
                            <img src={images[0]} alt={names[0]} />
                            <h3>{names[0]}</h3>
                        </div>
                        <div className="pokemon">
                            <img src={images[1]} alt={names[1]} />
                            <h3>{names[1]}</h3>
                        </div>
                        <div className="pokemon">
                            <img src={images[2]} alt={names[2]} />
                            <h3>{names[2]}</h3>
                        </div> */}
                    </div> : null}
                    
            </header>
        </>
    )
}