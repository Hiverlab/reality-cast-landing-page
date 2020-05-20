import React from 'react';
import { Button } from 'react-bootstrap';
import { Play } from 'react-bootstrap-icons';
import Modal1 from './modals/Modal1';
import Modal2 from './modals/Modal2';
import Modal3 from './modals/Modal3';
import './featuredpresentations.css'

const FeaturedPresentations = () => {
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    return (
        <section id="featured-presentations" className="container text-center">

            
            <h2 className="mb-5 feature-title font-weight-bold">Featured Reality Cast Presentations</h2>

            
            <div className="row">

            
                <div className="col-lg-4 col-md-12 mb-4">

                <div class="view z-depth-1-half">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(28).jpg" class="img-fluid" alt=""/>
                    <div class="mask flex-center">
                        <button type="button" class="btn-circle" onClick={() => setShow(true)}><i id="feature-icon" class="fa fa-play"></i></button> 
                        <Modal1
                            show={show}
                            onHide={() => setShow(false)}
                            />    
                    </div>
                </div>

                    {/* <div class="container-image z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" className="img-fluid" alt="Snow"/>
                        <button type="button" class="btn-circle"><i class="fa fa-play"></i></button>
                        <Modal1
                            show={show}
                            onHide={() => setShow(false)}
                        />
                    </div> */}

                    {/* <div className="img-container view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" className="img-fluid" alt=""/>
                        
                        <div className="mask flex-center rgba-black-light">
                            <Button variant="outline-light" onClick={() => setShow(true)}>
                                <Play color="white" size={48}/>
                            </Button>
                            <button id="image-button" type="button" onClick={() => setShow(true)}>Hello</button>
                            <Modal1
                            show={show}
                            onHide={() => setShow(false)}
                            />
                            <div className="white-text text-center">John Tan: The Future of AR</div>
                        </div>
                    </div> */}

                    <h4 className="my-4 font-weight-bold">John Tan: The Future of AR</h4>

                </div>
            
                <div className="col-lg-4 col-md-6 mb-4">

                    <div class="view z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" class="img-fluid" alt=""/>
                        <div class="mask flex-center">
                            <button type="button" class="btn-circle" onClick={() => setShow1(true)}><i id="feature-icon" class="fa fa-play"></i></button> 
                            <Modal2
                                show={show1}
                                onHide={() => setShow1(false)}
                                />    
                        </div>
                    </div>

                    {/* <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" className="img-fluid" alt=""/>
                        <div className="mask flex-center rgba-black-light">
                            <Button variant="outline-light" onClick={() => setShow1(true)}>
                                <Play color="white" size={48}/>
                            </Button>

                            <Modal2
                            show={show1}
                            onHide={() => setShow1(false)}
                            />
                        </div>
                    </div> */}

                    <h4 className="my-4 font-weight-bold">AR: Expanding creative possibilities</h4>
                    {/* <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        maiores nam,
                        aperiam minima
                        assumenda deleniti hic.</p> */}

                </div>
        
                <div className="col-lg-4 col-md-6 mb-4">

                    <div class="view z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" class="img-fluid" alt=""/>
                        <div class="mask flex-center">
                            <button type="button" class="btn-circle" onClick={() => setShow2(true)}><i id="feature-icon" class="fa fa-play"></i></button> 
                            <Modal3
                            show={show2}
                            onHide={() => setShow2(false)}
                            />    
                        </div>
                    </div>

                    {/* <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" className="img-fluid" alt=""/>
                        <div className="mask flex-center rgba-black-light">
                            <Button variant="outline-light" onClick={() => setShow2(true)}>
                                <Play color="white" size={48}/>
                            </Button>

                            <Modal3
                            show={show2}
                            onHide={() => setShow2(false)}
                            />
                        </div>
                    </div> */}

                    <h4 className="my-4 font-weight-bold">AR in Search: A new way to learn</h4>
                    {/* <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        maiores nam,
                        aperiam minima
                        assumenda deleniti hic.</p> */}

                </div>
        

            </div>
        
            {/* <div className="row">

                
                <div className="col-lg-4 col-md-12 mb-4">

                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg" className="img-fluid" alt=""/>
                        <div className="mask rgba-white-slight"></div>
                    </div>

                    <h4 className="my-4 font-weight-bold">Heading</h4>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        maiores nam,
                        aperiam minima
                        assumenda deleniti hic.</p>

                </div>
            
                <div className="col-lg-4 col-md-6 mb-4">

                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" className="img-fluid" alt=""/>
                        <div className="mask rgba-white-slight"></div>
                    </div>

                    <h4 className="my-4 font-weight-bold">Heading</h4>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        maiores nam,
                        aperiam minima
                        assumenda deleniti hic.</p>

                </div>
                
                <div className="col-lg-4 col-md-6 mb-4">

                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" className="img-fluid" alt=""/>
                        <div className="mask rgba-white-slight"></div>
                    </div>

                    <h4 className="my-4 font-weight-bold">Heading</h4>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                        maiores nam,
                        aperiam minima
                        assumenda deleniti hic.</p>

                </div>
            

            </div> */}
    

        </section>
    );
}
export default FeaturedPresentations; 