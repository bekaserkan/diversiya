import React, { useEffect, useState } from 'react'
import "./Order.css"
import { useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { BsArrowLeft } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../store/card/reducer'
import axios from 'axios'
import { url } from '../../Api'
import Loading from '../../components/UI/Loading/Loading'

const Order = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const navigete = useNavigate()
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.itemsInCart);
    const [btn, setBtn] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(url + `/product/${id}`)
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
                setLoading(false)
            });
    }, [id])

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
        dots: false,
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if (data) {
            const exists = items.some(obj => obj.id === data.id);

            if (exists) {
                setBtn(false)
            } else {
                setBtn(true)
            }
        }
    }, [items, data])

    function Order() {
        const existingItem = items.find((obj) => obj.id === data.id);

        if (existingItem) {
            dispatch(deleteItemFromCart(data.id));
        } else {
            dispatch(setItemInCart(data));
        }
    }

    return (
        <div className='order'>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <>
                    <div className="header_order">
                        <div className="header_order_block">
                            <AiOutlineClose onClick={() => navigete(-1)} className='close' style={{ cursor: "pointer" }} size={30} color='var(-black)' />
                            <BsArrowLeft onClick={() => navigete(-1)} className='arrow' style={{ cursor: "pointer" }} size={25} color='var(-black)' />
                        </div>
                    </div>
                    <div className="order_block">
                        <div className="slider">
                            <Slider {...settings}>
                                {data && data.image && data.image.map(el =>
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
                                {btn ?
                                    <button onClick={Order} style={{ marginTop: "20px" }} className='button_form_detailed'>
                                        В корзину
                                    </button> :
                                    <button onClick={Order} style={{ marginTop: "20px" }} className='button_form_order'>
                                        Удалить из корзины
                                    </button>
                                }
                                {data.textile ?
                                    <p className='content_p' >
                                        {React.createElement("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: data.textile ? `Ткань: ${data.textile}` : "",
                                            },
                                        })}
                                    </p>
                                    : ""}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Order