import React from 'react';

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import './styles.css'

function Landing() {
  return (
    <div id='landing-page'>
      <div id='landing-page-content' className='container'>
        <div className='logo-container'>
          <img src={logoImg} alt='Proffy' />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt='Plataforma de estudos'
          className='hero-image'
        />

        <div className="buttons-container">
            <a href='/' className='study'>
                <img src={studyIcon} alt='study' />
                Estudar
            </a>
            <a href='/' className='give-classes'>
                <img src={giveClassesIcon} alt='Dar aula' />
                Dar aula
            </a>
        </div>

        <span className='total-connections'>
            Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt='Coração roxo'></img>
        </span>
      </div>
    </div>
  );
}

export default Landing;
