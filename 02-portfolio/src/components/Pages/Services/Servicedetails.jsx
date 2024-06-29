import React from 'react'
import { useState } from 'react';
import { Modal, Button, ModalBody } from "react-bootstrap";
import {  description } from './Data';


function Servicedetails({s}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
      <button className='ReadMe'  onClick={handleShow}>
                Read More
            </button>

            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="contained-modal-title-vcenter">
                       {s.title}
                    </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className=" mx-sm-2  px-sm-2" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', gap: "6" }} >
                        <img src={s.src} alt="" style={{ objectFit: 'cover', width: '100%' }} />
                        <h3 className="pt-5">{s.title}</h3>
                        <p className="pt-4">{description}</p>
                    </div>
                </Modal.Body>
            </Modal>
    </>
  )
}

export default Servicedetails
