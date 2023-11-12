import { useNavigate } from 'react-router-dom';

export default function Win({ timeTaken, game }) {
    timeTaken = timeTaken / 1000;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('playername').value;
        console.log(name);

        const response = await fetch('http://localhost:3000/leaderboard/'+game,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name, timetaken: timeTaken })
            });
        const data = await response.json();
        console.log(data);
        navigate('/leaderboard');
        window.location.reload();
    }
    return (
        <div className="backdrop">
            <div className='instructions'>
                <h1>Congratulations!</h1>
                <p>You found all the Pokemon in {timeTaken}s.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your name" id="playername" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
};