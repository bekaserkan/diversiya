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

function App() {
  const [catalog, setCatalog] = useState([]);
  const items = useSelector((state) => state.cart.itemsInCart);
  const [localQuantities, setLocalQuantities] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("array", items)
  }, [items])

  useEffect(() => {
    axios.get('/data.json')
      .then((response) => {
        setCatalog(response.data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [])

  return (
    <div className="App">
      {/* <div style={{ width: "80%", height: "50vh", background: "#fff", position: "fixed", top: 100, left: "10%", fontSize: "30px", fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999 }} >Сайкал ❤</div> */}
      <div onClick={() => navigate("/decor")} className="bag">
        <div className="bag_block">
          <GiShoppingCart size={35} color='var(-black)' />
          {items.length > 0 ?
            <div className="icon_message">{items.length}</div>
            : ""}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main catalog={catalog} />} />
        <Route path="order/:id" element={<Order catalog={catalog} />} />
        <Route path="decor" element={<Decor items={items} localQuantities={localQuantities} setLocalQuantities={setLocalQuantities} />} />
      </Routes>
    </div>
  );
}

export default App;
