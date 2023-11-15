import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { calcTotalPrice } from '../../components/utils/utils';
import { decrementQuantity, incrementQuantity } from '../../store/card/reducer';

const Decor = () => {
    const items = useSelector((state) => state.cart.itemsInCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const totalPrice = calcTotalPrice(items);

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };

    return (
        <div className='decor'>
            <div className="header_order">
                <div className="header_order_block">
                    <AiOutlineClose onClick={() => navigate(-1)} className='close' style={{ cursor: "pointer" }} size={30} color='var(-black)' />
                    <BsArrowLeft onClick={() => navigate(-1)} className='arrow' style={{ cursor: "pointer" }} size={25} color='var(-black)' />
                </div>
            </div>
            <div className="container">
                <div className="decor_block">
                    <div>
                        <h1>Список вещей</h1>
                        <div className="decor_list">
                            {items.map((el) => (
                                <div className="cart_block" key={el.id}>
                                    <div>
                                        <img src={el.editions[0].img} alt="" />
                                    </div>
                                    <div>
                                        <h2>{el.title}</h2>
                                        {el.price == null ? (
                                            ''
                                        ) : (
                                            <p>
                                                {el.price} СОМ
                                            </p>
                                        )}
                                    </div>
                                    <div className="count">
                                        <div className="plus" onClick={() => handleIncrement(el.id)}>
                                            +
                                        </div>
                                        <p>{el.quantity}</p>
                                        <div className="minus" onClick={() => handleDecrement(el.id)}>
                                            -
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1>Ваш заказ</h1>
                        <div className="input_box">
                            <label>Ваше имя</label>
                            <input type="text" placeholder='' />
                        </div>
                        <div className="input_box">
                            <label>Ваш телефон</label>
                            <input type="text" placeholder='' />
                        </div>
                    </div>
                </div>
                <div className="div">
                    <h1>Итог:</h1>
                    {totalPrice > 0 ?
                        <h1>{totalPrice} СОМ</h1>
                        : ""}
                </div>
                <button className='button_form_detailed'>
                    Заказать
                </button>
            </div>
        </div>
    );
}

export default Decor;
