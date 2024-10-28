/* eslint-disable no-unused-vars */
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> Sejspizza App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play" />
        <img src={assets.app_store} alt="App Store" />
      </div>
    </div>
  )
}

export default AppDownload
