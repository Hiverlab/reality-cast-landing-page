import React from 'react';
import {Modal} from 'react-bootstrap';
import './modal.css'

const Modal1 = (props) => {
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            
            <Modal.Body>
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0;autoplay=1"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/k_eNxzn9DT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </Modal.Body>
        </Modal>
    );
}

export default Modal1;