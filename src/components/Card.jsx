import React from 'react'
import "../style/card.css"
import { useNavigate } from 'react-router'

const Card = ({item}) => {

    const navigate = useNavigate();

  return (
    <div className='card'>
        <div className="top">
            <img src={item.thumbnail} alt="" />
            <div className="title">
                 <h4 >{item.title}</h4>
                 <a href={item.game_url} target="_blank" rel="noopener noreferrer">
                     <button>Play</button>
                </a>
            </div>
        </div>
        <div className="bottom">
                <button onClick={() => navigate(`/details/${item.id}`)}>details</button>
                <button><i className="ri-bookmark-line"></i></button>
        </div>
    </div>
  )
}

export default Card