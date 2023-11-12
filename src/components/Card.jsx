import { Link } from "react-router-dom";



export default function Card({ Image, title }) {
    let Page;
    if(title==='First Generation')
        Page = '/first';
    else if(title==='Second Generation')
        Page = '/second';
    else if(title==='All Generations')
        Page = '/third';
    return (
        <>
            <section className='card'>
                <img src={Image}/>
                <h3>{title}</h3>
                <Link to={Page}><button className='playbutton'>Play</button></Link>
            </section>
        </>
    )
}