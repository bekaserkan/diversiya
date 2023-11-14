import React from 'react'
import "./Catalog.css"
import Block from './Block'
import { useNavigate } from 'react-router-dom'

const Catalog = ({ data }) => {
    const navigate = useNavigate()

    return (
        <div className='catalog' id='catalog'>
            <div className="container">
                <div className="catalog_block">
                    {data && data.products && data.products.map((el, id) => (
                        <div onClick={() => navigate(`/order/${el.uid}`)} key={id} className="block">
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