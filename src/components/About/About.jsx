import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="container">
        <div className="about_block">
          <div>
            <img className='absolute' src="https://thumb.tildacdn.com/tild3935-3138-4237-b337-313633346238/-/resize/492x/-/format/webp/___4.png" alt="" />
            <img src="https://thumb.tildacdn.com/tild6239-3763-4161-a563-633534323764/-/resize/978x/-/format/webp/______.png" alt="" />
            <p style={{ textAlign: "center", marginTop: 20 }}>Диверсия - будь лучшей версией себя!</p>
          </div>
          <div>
            <p>Diversiya - это бренд вышедший из Кыргызстана.Основателем и идейным вдохновителем является талантливый модельер-дизайнер Диана Канжарбекова</p>
            <ul className='ul_form'>
              <li>Самые трендовые модели на рынке</li>
              <li>Доступные цены и соответсвующее качество</li>
              <li>Индивидуальная проверка посадки платьев</li>
              <li>Идеальная посадка</li>
              <li>Еженедельное обновление коллекций</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About