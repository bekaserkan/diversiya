import React from 'react'
import "./Catalog.css"
import Block from './Block'
import { useNavigate } from 'react-router-dom'

const Catalog = ({ data }) => {
    const navigate = useNavigate()

    console.log(data);

    return (
        <div className='catalog' id='catalog'>
            <div className="container">
                <div className="catalog_block">
                    {data && data.map((el, id) => (
                        <div onClick={() => navigate(`/order/${el.id}`)} key={id} className="block">
                            <Block el={el} />
                            <div className="content">
                                <h1 className={el.title.length > 30 ? "content_h1 r" : "content_h1"} >{el.title}</h1>
                                {el.textile ?
                                    <p style={el.textile.length > 120 ? {
                                        height: "54px",
                                        overflow: "hidden"
                                    } : {}} className='content_p' >
                                        {React.createElement("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: el.textile ? el.textile : "",
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
        </div >
    )
}

export default Catalog