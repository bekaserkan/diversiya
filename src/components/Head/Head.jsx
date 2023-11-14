import React, { useState } from 'react'
import "./Head.css"
import { GrClose } from "react-icons/gr"

const Head = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='head' id='head'>
      <div className="container">
        <div className="header">
          <a href="#catalog"><h2>Каталог</h2></a>
          <a href="#about"><h2>О нас</h2></a>
          <a href="#head"><h2 className='h2_center'>lUNAVI</h2></a>
          <a href="#contacts"><h2>Контакты</h2></a>
          <a href="#delivery"><h2>Доставка</h2></a>
        </div>
        <div onClick={() => setMenu(!menu)} className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {menu && <div className="menu">
          <div className='menu_head' >
            <a href="#head"><h2 className='h2_center'>lUNAVI</h2></a>
            <GrClose className='icon' onClick={() => setMenu(false)} size={25} color='var(--black)' />
          </div>
          <a href="#catalog"><h2>Каталог</h2></a>
          <a href="#about"><h2>О нас</h2></a>
          <a href="#contacts"><h2>Контакты</h2></a>
          <a href="#delivery"><h2>Доставка</h2></a>
        </div>}
        <div className="head_contant">
          <div className="head_block"></div>
          <div className="head_image_one"></div>
          <div className="head_image_two"></div>
          <div className="head_image_three"></div>
        </div>
      </div>
    </div>
  )
}

export default Head