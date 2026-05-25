import React, { useContext } from 'react'
import { GameDataContext } from '../context/GameContext'
import "../style/save.css"
import Card from '../components/Card'
import SaveCard from '../components/SaveCard'



const Save = () => {

 const {save} = useContext(GameDataContext)

 if(save.length === 0){
    return <h1>No saved Games</h1>
 }
  return (
    <div className='save-game'>
        <h2>Saved Gallery</h2>
        <div className="save-cards">
             {save.map((data) => (
                 <SaveCard data={data} />
             ))}
        </div>
    </div>
  )
}

export default Save