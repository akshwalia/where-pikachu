import { useState, useEffect } from 'react'
import './App.css'
import FirstImage from './assets/first.jpg'
import SecondImage from './assets/second.jpg'
import ThirdImage from './assets/third.png'
import Popup from './components/Popup'
import Header from './components/Header'
import Card from './components/Card'

import { Link } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const startAPI = async () => {
      try {
        const response = await fetch('https://where-pikachu-api.onrender.com/');
        const data = await response.json();
        setLoading(false);
      }
      catch (err) {
        console.log(err);
      }
    }
    startAPI();
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <div className='loading'>Loading...</div>
      </>
    )
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
