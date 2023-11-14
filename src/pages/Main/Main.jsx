import React from 'react'
import axios from "axios";
import Head from '../../components/Head/Head';
import Footer from '../../components/Footer/Footer';
import Catalog from '../../components/Catalog/Catalog';
import About from '../../components/About/About';
import Delivery from '../../components/Delivery/Delivery';
import Contacts from '../../components/Contacts/Contacts';

const Main = ({ catalog }) => {

    return (
        <div className='main'>
            <Head />
            <Catalog data={catalog} />
            <About />
            <Delivery />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main