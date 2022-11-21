import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigUpLines } from 'react-icons/all'
import './First_page.css'

export default function First_Page() {

  const [showName, setShowName] = useState(false);

  const hoverOn = () => setShowName(true);
  const hoverOff = () => setShowName(false);

  return (
    <div className='first_page_container'>
        <div className='link_box'>
          <Link to='/second-page' className="pudding">
            <div className="pudding__part" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <div className="pudding__head"></div>
              <div className="pudding__eye"></div>
              <div className="pudding__mouse"></div>
              <div className="pudding__cream"></div>
              <div className="pudding__cherry"></div>
              <div className="pudding__bottom"></div>
            </div>
            <div className="pudding__sara"></div>
          </Link>
          <div className="link">
              <p className='heart'><TbArrowBigUpLines/></p>
              <p>Սեղմիր այստեղ</p>
          </div>
          <div className="name" style={{opacity: showName ? 1 : 0}}>
              <p>Հասիկո</p>
          </div>
        </div>
    </div>
  )
}
