import React, { Children } from 'react'
import navbar from '../navbar/navbar'
import footer from '../footer/footer'
const layout = ({Children}) => {
  return (
    <div>
        <navbar/>
        <div className="content">
            {Children}
        </div>
        <footer/>
    </div>
  )
}

export default layout