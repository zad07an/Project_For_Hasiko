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
          <Link to='/second-page' class="pudding">
            <div class="pudding__part" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
              <div class="pudding__head"></div>
              <div class="pudding__eye"></div>
              <div class="pudding__mouse"></div>
              <div class="pudding__cream"></div>
              <div class="pudding__cherry"></div>
              <div class="pudding__bottom"></div>
            </div>
            <div class="pudding__sara"></div>
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
