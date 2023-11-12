
import { useEffect, useState } from 'react'
import './App.css'
import FirstImage from './assets/first.jpg'
import SecondImage from './assets/second.jpg'
import ThirdImage from './assets/third.png'
import Header from './components/Header'
import Leaderboardcard from './components/Leaderboardcard'
import moment from 'moment'



function Leaderboard() {
  const [selected, setSelected] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  for(let i=0;i<data.length;i++) {
    if(i%10===0)
      data[i].rank = i+1+"st";
    else if(i%10===1)
      data[i].rank = i+1+"nd";
    else if(i%10===2)
      data[i].rank = i+1+"rd";
    else
      data[i].rank = i+1+"th";

    if(i===10 || i===110) 
      data[i].rank = i+1+"th";
  }
    

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/leaderboard/' + selected);
      const data = await response.json();
      setData(data);
      console.log(data);
      setLoading(false);
    }
    fetchData();
  }, [selected]);

  return (
    <>
      <Header />

      <main className='homepage-main'>
        <div className="description">Select the game whose leaderboard you'd like to see</div>
        <div className="cards">
          <Leaderboardcard Image={FirstImage} title="First Generation" selected={selected} setSelected={setSelected} setLoading={setLoading}/>
          <Leaderboardcard Image={SecondImage} title="Second Generation" selected={selected} setSelected={setSelected} setLoading={setLoading}/>
          <Leaderboardcard Image={ThirdImage} title="All Generations" selected={selected} setSelected={setSelected} setLoading={setLoading}/>
        </div>

        {loading ? <div className="loading">Loading...</div> :
        (data.length===0) ? <div className="loading">No data available</div> : (
        <div className="leaderboard">
          <div className="rank">
            <h3>Rank</h3>
            <hr />
            {data.map((item) => {
              let className;
              if(item.rank==='1st')
                className='first';
              else if(item.rank==='2nd')
                className='second';
              else if(item.rank==='3rd')
                className='third';
              else
                className='';
                
              return <div id={className}>{item.rank}</div>
            })}

          </div>
          <div className="names">
            <h3>Name</h3>
            <hr />
            {data.map((item) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div className="timetaken">
            <h3>Time Taken</h3>
            <hr />
            {data.map((item) => (
              <div>{item.timetaken}s</div>
            ))}
          </div>
          <div className="date">
            <h3>Date</h3>
            <hr />
            {data.map((item) => (
              <div>{moment(item.date).format('DD/MM/YYYY')}</div>
            ))}
          </div>
        </div>)}
      </main>
    </>
  )
}

export default Leaderboard
