import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order";
import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiShoppingCart } from "react-icons/gi"
import { useSelector } from "react-redux";
import Decor from "./pages/Decor/Decor";
import { url } from "./Api";

function App() {
  const [catalog, setCatalog] = useState([]);
  const items = useSelector((state) => state.cart.itemsInCart);
  const [localQuantities, setLocalQuantities] = useState({});
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    localStorage.setItem("array", items)
  }, [items])

  useEffect(() => {
    setLoading(true)
    axios.get(url + "/product/list/")
      .then((response) => {
        setCatalog(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
        setLoading(false)
      });
  }, [])

  return (
    <div className="App">
      <div onClick={() => navigate("/decor")} className="bag">
        <div className="bag_block">
          <GiShoppingCart size={35} color='var(-black)' />
          {items.length > 0 ?
            <div className="icon_message">{items.length}</div>
            : ""}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main catalog={catalog} loading={loading} />} />
        <Route path="order/:id" element={<Order catalog={catalog} />} />
        <Route path="decor" element={<Decor items={items} localQuantities={localQuantities} setLocalQuantities={setLocalQuantities} />} />
      </Routes>
    </div>
  );
}

export default App;
