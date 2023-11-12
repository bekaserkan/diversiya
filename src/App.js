import { useEffect, useState } from "react";
import Catalog from "./components/Catalog/Catalog";
import Head from "./components/Head/Head";
import axios from "axios";
import About from "./components/About/About";
import Delivery from "./components/Delivery/Delivery";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

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
      <Head />
      <Catalog data={catalog} />
      <About />
      <Delivery />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
