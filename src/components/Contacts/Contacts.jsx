import React from 'react'
import "./Contacts.css"

const Contacts = () => {
  return (
    <div className='contacts' id='contacts'>
      <div className="container">
        <div className="contacts_block">
          <p>Адрес нашего места рынок “Дордой” проход -1/конт.111</p>
          <p>Режим работы: c 8:00 до 16:00 (Бишкек)</p>
          <br />
          <p>Нужна помощь с заказом?</p>
          <p>+(996)706-06-06-16</p>
          <a href="https://whatsapp.com" target='blank'>
            <br />
            <button className='button_form_order w'>
              Написать в WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts