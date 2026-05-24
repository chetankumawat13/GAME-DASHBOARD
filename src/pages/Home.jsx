import React from 'react'
import Button from '../components/Button'
import '../style/home.css'
import { useLoaderData } from 'react-router'
import Card from '../components/Card'

const Home = () => {

  const data = useLoaderData()
  console.log(data);

  return (
    <div className='home'>
          <div className="top">
             <h3>Categories</h3>
              <Button />
              <div className="cards">
                {data.map((item,idx) => (
                  <Card key={idx} item={item} />
                ))}
              </div>
          </div>
    </div>
  )
}

export default Home