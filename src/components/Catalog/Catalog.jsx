import React, { useState } from 'react'
import "./Catalog.css"
import Block from './Block'

const Catalog = ({ data }) => {

    console.log(data.products);

    return (
        <div className='catalog' id='catalog'>
            <div className="container">
                <div className="catalog_block">
                    {data && data.products && data.products.map((el, id) => (
                        <div key={id} className="block">
                            <Block el={el} />
                            <div className="content">
                                <h1 className='content_h1'>{el.title}</h1>
                                {el.text ?
                                    <p className='content_p' >
                                        {React.createElement("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: el.text ? el.text : "",
                                            },
                                        })}
                                    </p>
                                    : ""}
                                {el.price ?
                                    <p className='content_price'>{el.price} СОМ</p>
                                    : ""}
                            </div>
                            <div className="btns">
                                <button className='button_form_detailed'>
                                    Подробнее
                                </button>
                                <button className='button_form_order'>
                                    Заказать
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog