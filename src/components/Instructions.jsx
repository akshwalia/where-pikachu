import { useState } from "react"


export default function Instructions({ setStartTime }) {
    const [displayInstructions, setDisplayInstructions] = useState(true);

    const handleStart = () => {
        setStartTime(new Date().getTime());
        setDisplayInstructions(false);
    };
    
    return (
        <>
            {displayInstructions &&
                <div className="backdrop">
                    <div className='instructions'>
                        <h1>Instructions</h1>
                        <p><strong>Find the Pokemon above in the shortest possible time.</strong></p>
                        <p>When you find a pokemon, click on its position on the image and select it from the list that shows up.</p>
                        <button onClick={handleStart}>Start</button>
                    </div>
                </div>
            }
        </>
    )
}