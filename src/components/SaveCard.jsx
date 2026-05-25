import React, { useContext } from 'react'
import '../style/savedcard.css'
import { GameDataContext } from '../context/GameContext';
import { useNavigate } from 'react-router';

const SaveCard = ({data}) => {

    const {removeFromSave} = useContext(GameDataContext)
    const navigate = useNavigate()

    console.log(data);
  return (
    <div className='saved-card'>
        <div className="top">
            <img src={data.thumbnail} alt="" />
            <div className="title">
                <h4>{data.title}</h4>
                <a href={data.game_url} target="_blank" rel="noopener noreferrer">
                     <button>Play</button>
                </a>
            </div>
        </div>
        <div className="bottom">
            <button onClick={() => navigate(`/details/${data.id}`)}>details</button>
            <button onClick={() => removeFromSave(data.id)}><i className="ri-delete-bin-line"></i></button>
        </div>
    </div>
  )
}

export default SaveCard