import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { calcTotalPrice } from '../../components/utils/utils';
import { deleteItemFrom, deleteItemFromCart } from '../../store/card/reducer';
import axios from 'axios';
import { url } from '../../Api';
import Loading from '../../components/UI/Loading/Loading';

const Decor = () => {
    const items = useSelector((state) => state.cart.itemsInCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState();
    const [loading, setLoading] = useState(false);
    const [decor, setDecor] = useState({
        name: "",
        phone: ""
    });

    const [decorVisablet, setDecorVisablet] = useState({
        nameVisablet: false,
        phoneVisablet: false
    });

    const [localQuantities, setLocalQuantities] = useState({})

    useEffect(() => {
        const newTotalPrice = items.reduce((total, el) => {
            const quantity = localQuantities[el.id] || 0;
            return total + el.price * quantity;
        }, 0);

        setTotalPrice(newTotalPrice);
    }, [items, localQuantities]);

    useEffect(() => {
        const newItems = items.filter((el) => localQuantities[el.id] === undefined);
        const newQuantities = Object.fromEntries(newItems.map((el) => [el.id, 1]));

        setLocalQuantities((prevQuantities) => ({
            ...prevQuantities,
            ...newQuantities
        }));
    }, [items]);

    const handleIncrement = (id) => {
        setLocalQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 0) + 1
        }));
    };

    const handleDecrement = (id) => {
        setLocalQuantities((prevQuantities) => {
            const updatedQuantities = {
                ...prevQuantities,
                [id]: Math.max((prevQuantities[id] || 0) - 1, 0)
            };

            if (updatedQuantities[id] === 0) {
                const { [id]: removed, ...rest } = updatedQuantities;
                dispatch(deleteItemFromCart(id));
                return rest;
            }

            return updatedQuantities;
        });
    };

    const handleOrder = () => {
        setLoading(true);

        if (decor.phone) {
            setDecorVisablet({ ...decor, phoneVisablet: false });
        } else {
            setDecorVisablet({ ...decor, phoneVisablet: true });
        }

        if (decor.name && decor.phone) {
            const orderData = items.map((el) => ({
                id: Number(el.id),
                count: localQuantities[el.id] || 0,
                title: el.title,
                size: el.size
            }));

            const dataNew = {
                products: orderData,
                name: decor.name,
                phone: decor.phone
            };

            axios.post(url + '/buy/', dataNew)
                .then(response => {
                    if (response.data.response) {
                        dispatch(deleteItemFrom([]));
                        navigate("/");
                    }
                })
                .catch(error => {
                    console.error('Error placing order:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (decor.name === "") {
            setDecorVisablet({ ...decor, nameVisablet: true });
            setLoading(false);
        } else if (decor.phone === "") {
            setDecorVisablet({ ...decor, phoneVisablet: true });
            setLoading(false);
        }
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
                                        <p>{localQuantities[el.id] || ""}</p>
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
                            <input value={decor.name} onChange={(e) => setDecor({ ...decor, name: e.target.value })} type="text" placeholder='' />
                            {decorVisablet.nameVisablet && <p className='red'>Введите имя!</p>}
                        </div>
                        <div className="input_box">
                            <label>Ваш телефон</label>
                            <input value={decor.phone} onChange={(e) => setDecor({ ...decor, phone: e.target.value })} type="text" placeholder='' />
                            {decorVisablet.phoneVisablet && <p className='red'>Введите номер!</p>}
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
                    disabled={totalPrice == 0 ? false : true}
                    onClick={handleOrder}
                    className='button_form_detailed'
                >
                    {loading ? <Loading /> : "Заказать"}
                </button>
            </div>
        </div>
    );
};

export default React.memo(Decor);
