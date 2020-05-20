import React from 'react';
import {Modal} from 'react-bootstrap';
import './modal.css'

const Modal3 = (props) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <Modal.Body>
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/FqDhNUFhNg8?rel=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/zPumzAeR_QQ?rel=0;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            </Modal.Body>
        </Modal>
    );
}

export default Modal3;