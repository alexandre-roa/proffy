import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import api from '../../services/api';

import './styles.css'

function Landing() {

  const [totalConnections, setConnections] = useState()

  useEffect(() => {
    api.get('connections').then(response => {
      const {total} = response.data

      setConnections(total)
    }
    )
  },[])

  return (
    <div id='landing-page'>
      <div id='landing-page-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt='Plataforma de estudos'
          className='hero-image'
        />

        <div className="buttons-container">
            <Link to='/study' className='study'>
                <img src={studyIcon} alt='study' />
                Estudar
            </Link>
            <Link to='/give-classes' className='give-classes'>
                <img src={giveClassesIcon} alt='Dar aula' />
                Dar Aula
            </Link>
        </div>

        <span className='total-connections'>
            Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt='Coração roxo'></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;
