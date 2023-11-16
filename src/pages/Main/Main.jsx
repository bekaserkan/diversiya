import React from 'react'
import axios from "axios";
import Head from '../../components/Head/Head';
import Footer from '../../components/Footer/Footer';
import Catalog from '../../components/Catalog/Catalog';
import About from '../../components/About/About';
import Delivery from '../../components/Delivery/Delivery';
import Contacts from '../../components/Contacts/Contacts';
import Loading from '../../components/UI/Loading/Loading';

const Main = ({ catalog, loading }) => {

    return (
        <div className='main'>
            {loading ?
                <div className="loading_div">
                    <Loading />
                </div>
                :
                <>
                    <Head />
                    <Catalog data={catalog} />
                    <About />
                    <Delivery />
                    <Contacts />
                    <Footer />
                </>
            }
        </div>
    )
}

export default Main