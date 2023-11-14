import React, { useEffect, useState } from 'react'
import "./Order.css"
import { useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { BsArrowLeft } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";

const Order = ({ catalog }) => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const navigete = useNavigate()

    useEffect(() => {
        if (catalog && catalog.products) {
            const filteredData = catalog.products.filter((obj) => obj.uid == id).map(el => el)
            setData(filteredData[0]);
        }
    }, [catalog, id]);

    const settings = {
        customPaging: function (i) {
            return (
                <a className='flex_image'>
                    <img
                        className='dots_image'
                        src={data.gallery && data.gallery[i] ? data.gallery[i].img : ''}
                        alt={`dot-${i}`}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='order'>
            <div className="header_order">
                <div className="header_order_block">
                    <AiOutlineClose onClick={() => navigete(-1)} className='close' style={{ cursor: "pointer" }} size={30} color='var(-black)' />
                    <BsArrowLeft onClick={() => navigete(-1)} className='arrow' style={{ cursor: "pointer" }} size={25} color='var(-black)' />
                </div>
            </div>
            <div className="order_block">
                <div className="slider">
                    <Slider {...settings}>
                        {data && data.gallery && data.gallery.map(el =>
                            <div>
                                <div className='image_order' style={{ background: `url(${el.img}) no-repeat center / cover` }} ></div>
                            </div>
                        )}
                    </Slider>
                </div>
                <div className="block">
                    <div className="content">
                        <h1 className='content_h1'>{data.title}</h1>
                        {data.price ?
                            <p className='content_price'>{data.price} СОМ</p>
                            : ""}
                        <button style={{ marginTop: "20px" }} className='button_form_detailed'>
                            В корзину
                        </button>
                        {data.text ?
                            <p className='content_p' >
                                {React.createElement("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: data.text ? data.text : "",
                                    },
                                })}
                            </p>
                            : ""}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Order