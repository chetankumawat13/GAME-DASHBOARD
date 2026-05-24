import React, { useState } from 'react'

const Preview = ({shot}) => {

    const [loader, setLoader] = useState(false)

  return (
    <div image-wrapper>
        {!loader && <div className="skeleton"></div>}
        <img src={shot.image} onLoad={() => setLoader(true)} style={{display: loader ? "block" : "none"}} alt="" />
    </div>
  )
}

export default Preview