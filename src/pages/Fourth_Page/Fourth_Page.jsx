import React from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'
import './Fourh_Page.css'

export default function Fourth_Page({modalIsActive, showModal, setShowModal}) {

    const navigate = useNavigate();

    const nextPage = () => {
        modalIsActive();
        setTimeout(() => {
            navigate('/fifth-page')
            setShowModal(false)
        },2500)
    }

  return (
    <div className="fourth_page_container">
        { showModal ? <Modal/> : null}
        <div className="fourth_page_buttons">
            <button onClick={nextPage}>Անցնել առաջ՞</button>
            <button onClick={nextPage}>Թե չանցնել՞</button>
        </div>
        <div class="yoga">
            {/* <h1 align="center">Dhyana Mudra</h1> */}
            <div class="baba"></div>
            <div class="footer"></div>
        </div>
    </div>
  )
}
