/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione explicabo, asperiores ducimus atque aut ea quae odio quis! Error delectus alias nam nobis aperiam beatae at, ipsam nihil harum inventore ex vitae ut necessitatibus!</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) =>{
            return (
                <div key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
