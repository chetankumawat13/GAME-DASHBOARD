import React, { useContext } from 'react'
import { GameDataContext } from '../context/GameContext'



const Save = () => {

 const {save,removedFromSave} = useContext(GameDataContext)

 if(save.length === 0){
    return <h1>No saved Games</h1>
 }
  return (
    <div>
        
    </div>
  )
}

export default Save