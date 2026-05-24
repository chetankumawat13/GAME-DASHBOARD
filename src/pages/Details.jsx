import React, { useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router'
import "../style/details.css"
import Preview from '../components/Preview'

const Details = () => {
    const data = useLoaderData()
    console.log(data);
    const navigate = useNavigate()


  return (
    <div className='details-page'>
        <div className="back-button">
            <button onClick={() => navigate("/")}><i className="ri-arrow-go-back-fill"></i></button>
            <h4>Details</h4>
        </div>
        <div className="top">
            <div className="left">
                <img src={data.thumbnail} alt="" />
                <a href={data.game_url} target='_blank' >
                    <button>play</button>
                </a>
            </div>
            <div className="right">
                <h2>{data.title}</h2>
                <h5>{data.developer}</h5>
                <p>{data.short_description}</p>
                <div className="buttons">
                    <button>{data.platform}</button>
                    <button className='live'>{data.status}</button>
                </div>
            </div>
        </div>
        <div className="bottom">
            <h2>Preview</h2>
            {data.screenshots.map((shot,idx) => {
                return(
                    <Preview key={idx} shot={shot} />
                )
            })}
        </div>
    </div>
  )
}

export default Details