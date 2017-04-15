import React from 'react'
import './Montage.css'

const MontageLife = () => {
  return (
    <div className='montage'>
      <iframe
        className='vidz'
        src="https://player.vimeo.com/video/200922358?color=ffd9db&byline=0&portrait=0"
        width="640"
        height="360"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen>
    </iframe>
    <iframe
              className='vidz'

      src="https://player.vimeo.com/video/151367434?color=ffffff&byline=0&portrait=0"
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen>
    </iframe>
    <iframe
              className='vidz'

      src="https://player.vimeo.com/video/151743858?color=ffffff&byline=0&portrait=0"
      width="640"
      height="360"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen>
    </iframe>
  </div>
  )
}

export default MontageLife