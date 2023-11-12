import { useState } from 'react'
import './App.css'
import FirstImage from './assets/first.jpg'
import SecondImage from './assets/second.jpg'
import ThirdImage from './assets/third.png'
import Popup from './components/Popup'
import Header from './components/Header'
import Card from './components/Card'

import { Link } from 'react-router-dom'

function App() {
  const [displayCircle, setDisplayCircle] = useState(false);
  const [{ x, y }, setCoordinates] = useState({ x: 0, y: 0 });


  const handleClick = (e) => {
    // console.log(`ClientX: ${e.clientX}, ClientY: ${e.clientY}`);
    // console.log(`ScreenX: ${e.screenX}, ScreenY: ${e.screenY}`);
    // console.log(`PageX: ${e.pageX}, PageY: ${e.pageY}`);
    // console.log(document.querySelector('.image').naturalWidth);
    // console.log(window.innerWidth);
    // console.log(document.querySelector('.image').naturalHeight);
    // console.log((window.innerWidth/document.querySelector('.image').naturalWidth)*document.querySelector('.image').naturalHeight);
    if (displayCircle) {
      setDisplayCircle(false);
    }
    else {
      setCoordinates({ x: e.pageX, y: e.pageY });
      setDisplayCircle(true);

    }



    // console.log(document.querySelector('.image').offsetTop);
    // console.log(document.querySelector('.image').offsetLeft);
    // console.log("X: "+percentX);
    // console.log("Y: "+percentY);
  }


  return (
    <>
      <Header />
      <main className='homepage-main'>
        <div className="menu">
          <Link to='/leaderboard'><div>Leaderboard</div></Link>
          <a href="https://github.com/akshwalia/where-pikachu" target='_blank'><div className="Github">Git Repo</div></a>
        </div>
        <div className="cards">
          <Card Image={FirstImage} title="First Generation" />
          <Card Image={SecondImage} title="Second Generation" />
          <Card Image={ThirdImage} title="All Generations" />
        </div>
      </main>
    </>
  )
}

export default App
