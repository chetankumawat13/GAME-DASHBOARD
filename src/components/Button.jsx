import React from 'react'
import "../style/button.css"
import { useLocation, useNavigate } from 'react-router';

const Button = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const categories = [
        "All",
        "racing",
        "Shooter",
        "open-world",
        "sports",
        "zombie",
        "horror",
        "military",
        "anime"
      ];

  return (
    <div className='buttons'>
        {categories.map((data,idx) => (
            <button className={location.pathname === `/category/${data}` ? "active" : ""}  onClick={() => navigate(`/category/${data}`)} key={idx}>{data}</button>
        ))}
    </div>
  )
}

export default Button