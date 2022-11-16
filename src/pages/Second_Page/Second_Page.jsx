import React from 'react'
import { useNavigate } from 'react-router-dom'
import Cupcake from '../../components/Cupcake/Cupcake'
import './Second_Page.css'

export default function Second_Page() {

    const navigate = useNavigate();

  return (
    <div className='second_page_contaienr'>
        <Cupcake/>
        <button className='second_page_button' onClick={() => navigate('/third-page')}>Անցնել առաջ</button>
    </div>
  )
}
