let className;
export default function Leaderboardcard({ Image, title, selected, setSelected, setLoading }) {
    if(selected===1 && title==='First Generation')
        className='card leaderboardcard selected'
    else if(selected===2 && title==='Second Generation')
        className='card leaderboardcard selected'
    else if(selected===3 && title==='All Generations')
        className='card leaderboardcard selected'
    else
        className='card leaderboardcard'

    const handleSelected = () => {
        setLoading(true);
        if(title==='First Generation')
            setSelected(1);
        else if(title==='Second Generation')
            setSelected(2);
        else if(title==='All Generations')
            setSelected(3);
    }

    return (
        <>
            <section className={className} onClick={handleSelected}>
                <img src={Image}/>
                <h3>{title}</h3>
            </section>
        </>
    )
}