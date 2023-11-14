import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order";
import { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [catalog, setCatalog] = useState([]);

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
      <Routes>
        <Route path="/" element={<Main catalog={catalog} />} />
        <Route path="order/:id" element={<Order catalog={catalog} />} />
      </Routes>
    </div>
  );
}

export default App;
