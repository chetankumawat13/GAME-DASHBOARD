import React, { createContext, useEffect, useState } from 'react'

export const GameDataContext = createContext()



const GameContext = ({children}) => {

    const [save, setSave] = useState(
        JSON.parse(localStorage.getItem("save") || "[]")
    )
    
    useEffect(() => {
        localStorage.setItem("save",JSON.stringify(save))
    },[save])

    const addToSave = (game) => {
        setSave((prev) => {
            const exists = prev.find((item) => item.id === game.id)
            if(exists){
                return prev
            }
            return [...prev, game]
        })
    }

    const removeFromSave = (id) => {
        setSave((prev) => {
            return prev.filter((game) => game.id !== id)
        })
    }

  return (
     <GameDataContext.Provider value={{save,addToSave,removeFromSave}}>
        {children}
     </GameDataContext.Provider>
  )
}

export default GameContext