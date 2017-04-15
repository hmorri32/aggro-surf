import React from 'react';
import './Montage.css';
import hangfive from './assets/aggro-pix/hangfive.jpg'
import abstractblueblack from './assets/aggro-pix/abstractblueblack.jpg'
import abstractoil from './assets/aggro-pix/abstractoil.jpg'
import boardslidebrah from './assets/aggro-pix/boardslidebrah.jpg'
import breakwall from './assets/aggro-pix/breakwall.jpg'
import chic from './assets/aggro-pix/chic.jpg'
import dusk from './assets/aggro-pix/dusk.jpg'
import hipsters from './assets/aggro-pix/hipsters.jpg'
import jesussurfs from './assets/aggro-pix/jesussurfs.jpg'
import palms from './assets/aggro-pix/palms.jpg'
import snapper from './assets/aggro-pix/snapper.jpg'

const MontageLife = () => {
  return (
    <div className='montage'>
      <iframe
        className='vidz'
        src="https://player.vimeo.com/video/200922358?color=ffd9db&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <img src={boardslidebrah} className='vidz'/>
      <iframe
        className='vidz'
        src="https://player.vimeo.com/video/72287506?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <img src={breakwall} className='vidz'/>
      <img src={chic} className='vidz'/>
      <img src={abstractoil} className='vidz' />
      <img src={dusk} className='vidz' />
      <iframe
        className='vidz'
        src="https://player.vimeo.com/video/151367434?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <img src={hangfive} className='vidz'/>
      <img src={abstractblueblack} className='vidz' />
      <img src={hipsters} className='vidz'/>
      <iframe
        className='vidz'
        src="https://player.vimeo.com/video/151743858?color=ffffff&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen>
      </iframe>
      <img src={palms} className='vidz'/>
      <img src={jesussurfs} className='vidz'/>
      <img src={snapper} className='vidz'/>
    </div>
  )
}

export default MontageLife