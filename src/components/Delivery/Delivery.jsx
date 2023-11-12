import React from 'react'
import "./Delivery.css"

const Delivery = () => {
  return (
    <div className='delivery' id='delivery'>
      <div className="container">
        <h1 className='text_head'>Доставка и оплата</h1>
        <div className="delivery_grid">
          <div className="delivery_grin_one">
            <h1 className='text_header'>
              Бишкек-Кыргызстан
            </h1>
            <br />
            <h2 className='text_h2'>
              Самовывоз с рынка "Дордой" проход -1/конт.111
            </h2>
            <br />
            <p>Доставка по городу от 150-сом</p>
            <br />
            <p>Заказ доставляется лично в руки в течение дня после его оформления,при условии формирования заказа до 12:00 текущего дня.По вашему желанию возможно оформить доставку в любое удобное время и день для вас.</p>
            <br />
            <p>Доставка в регионы КР от 250-сом</p>
            <br />
            <h2 className='text_h2'>
              Способ оплаты
            </h2>
            <br />
            <p>Наличными при получении</p>
          </div>
          <div className="delivery_grin_two">
            <h1 className='text_header'>
              Доставка в страны СНГ
            </h1>
            <br />
            <h2 className='text_h2'>
              В страны СНГ мы отправляем заказ по 100% предоплате
            </h2>
            <br />
            <h2 className='text_h2'>
              СДЭК(лично в руки)
            </h2>
            <br />
            <p>Заказ доставляется в лично в руки от 3 до 7 рабочих дней не считая дня оформления заказа</p>
            <br />
            <p>Доставка осуществляется наземным и воздушным транспортом во все города РФ и РК и воспроизводится по тарифам транспортных компаний</p>
            <br />
            <p>Минимальный заказ от одного размерного ряда</p>
            <br />
            <h2 className='text_h2'>
              Способ оплаты
            </h2>
            <br />
            <p>Для удобства клиентов возможна любая платежная система</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery