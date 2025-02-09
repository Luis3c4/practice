
import { useState } from 'react'
import './App.css'
import MyBottom from './assets/Components/MyBotton'
import { TwitterFollowCard } from './assets/Components/TwCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]
function App() { 
  const [number,setNumber]=useState(0);
  //batching
  const count=()=>{
    setNumber((number)=>number+1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <MyBottom label={number} count={count}/>
      </div>
      <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
    </>
  )
}

export default App
