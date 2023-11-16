import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { calcTotalPrice } from '../../components/utils/utils';
import { deleteItemFromCart } from '../../store/card/reducer';
import axios from 'axios';

const Decor = ({ localQuantities, setLocalQuantities }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(calcTotalPrice(items, localQuantities));

    useEffect(() => {
        setTotalPrice(calcTotalPrice(items, localQuantities));
    }, [items, localQuantities]);

    const handleIncrement = (id) => {
        setLocalQuantities((prevQuantities) => {
            const currentQuantity = prevQuantities[id] || 0;
            const updatedQuantities = {
                ...prevQuantities,
                [id]: currentQuantity + 1,
            };

            return updatedQuantities;
        });
    };

    const handleDecrement = (id) => {
        setLocalQuantities((prevQuantities) => {
            const updatedQuantities = {
                ...prevQuantities,
                [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
            };

            if (updatedQuantities[id] === 0) {
                delete updatedQuantities[id];
                dispatch(deleteItemFromCart(id));
            }

            return updatedQuantities;
        });
    };

    const handleOrder = () => {
        const orderData = Object.entries(localQuantities).map(([id, quantity]) => ({ id, quantity }));

        axios.post('/', orderData)
            .then(response => {
                console.log('Order placed successfully:', response.data);
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
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
                                        <img src={el.image && el.image[0].img} alt="" />
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
                                        <p>{localQuantities[el.id] || 0}</p>
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
                    {totalPrice > 0 ? (
                        <h1>{totalPrice} СОМ</h1>
                    ) : (
                        <p>Ваша корзина пуста</p>
                    )}
                </div>
                <button
                    disabled={totalPrice > 0 ? false : true}
                    onClick={handleOrder}
                    className='button_form_detailed'
                >
                    Заказать
                </button>
            </div>
        </div>
    );
}

// Memoize the Decor component to prevent unnecessary re-renders
export default React.memo(Decor);
