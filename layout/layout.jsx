import Head from "next/head"
import { Fragment } from "react"
import SideBar from '../components/Sidebar'
import ModalProduct from '../components/ModalProduct'
import Modal from 'react-modal'
import UseKiosk from "../hooks/UseKiosk"

import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from '../components/ProgressBar'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');


const layout = ({children, page}) => {

  const {modal, handleChangeModal} = UseKiosk();

  return (
    <Fragment>
        <Head>
                <title> Cafe - {page ?? ''}</title>
                <meta name="description" content="kiosk coffee shop, online food and beverage"/>
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 ">
                   <SideBar/>
            </aside>
            <main className="md:w-8/12 xl:w-3/4  2xl:w-4/5 h-screen overflow-y-scroll ">
            
              <div
                className="p-10 mt-10"
              >
                  <ProgressBar/>
                   {children}
              </div>

            </main>
        </div>

        {modal && (
            <Modal
              isOpen={modal}
              style={customStyles}
              onRequestClose={handleChangeModal}
            >
              <ModalProduct/>
            </Modal>
             
        )}

              <ToastContainer />
    </Fragment>
  )
}

export default layout