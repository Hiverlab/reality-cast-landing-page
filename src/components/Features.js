import React, { Component } from 'react';
import './features.css'

export default class Features extends Component {
    render() {
        return (
            <section id="features" className="container text-center">

                <h2 className="mb-5 features-title font-weight-bold">Features</h2>

                <div className="row justify-content-center">

                    <div className="col-sm-6 mb-5">
                        <video width="260" height="193"  autoPlay muted loop playsInline>
                            <source src="https://github.com/Hiverlab/reality-cast-landing-page/master/public/images/2d%20to%20ar.mp4" type="video/mp4"/>
                        </video>
                        {/* <img className="image-fluid" src="/images/graph.png" width="193" height="193" alt=""/> */}
                        <h4 className="item-title my-4 font-weight-bold">Easily turn 2D into AR</h4>
                        <p className="item-description container">Easily convert 2D media and powerpoint slides into AR with a few 
                        simple clicks through Reality Cast's Creater Center.</p>
                    </div>
        
                    <div className="col-sm-6 mb-5">
                        <video width="260" height="193" autoPlay muted loop playsInline>
                            <source src="https://github.com/Hiverlab/reality-cast-landing-page/blob/master/public/images/cloud%20collab.mp4" type="video/mp4"/>
                        </video>
                        {/* <img className="image-fluid" src="/images/cloud.png" width="260" height="193"alt=""/> */}
                        <h4 className="item-title my-4 font-weight-bold">Cloud Collaboration</h4>
                        <p className="item-description container">Collaborate on the presentation with your team
                        through our online web portal.</p>
                    </div>
           

                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-6 mb-5">
                        <img className="image-fluid" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/easy_setup.png?token=AMBYZPRNRSGNXKOT63VBV4S6YS5SG" width="193" height="200"alt=""/>
                        {/* <Image src="/images/easy_setup.png" fluid></Image> */}
                        <h4 className="item-title my-4 font-weight-bold">Easy setup, full control</h4>
                        <p className="item-description container">Set up and present anytime, anywhere quickly.
                        Control the position of objects and flow of your presentation.
                        Everything you need to setup and conduct your presentatoin is contained in 
                        just one app!</p>
                    </div>

                    <div className="col-sm-6 mb-5">
                        <img className="image-fluid" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/mediafiles.png?token=AMBYZPWGMDARP3RMJFUQCBC6YS5I4" width="240" height="197"alt=""/>
                        <h4 className="item-title my-4 font-weight-bold">Supports a wide range of media files</h4>
                        <p className="item-description container">Reality Cast supports images, 3D models, animations, and videos.
                        Allowing you to create a really immersive experienve in your presentation!</p>
                    </div>
                </div>

                <div className="break"></div>

                <div className="row d-flex justify-content-center mb-5">

                    <div className="col-md-8">

                        <h3 className="sub-title">Connect with your favourite broadcasting platform</h3>

                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-3 mb-5 ">
                        <img className="image-fluid icon-shadow" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/zoom.png?token=AMBYZPSFRDC26VUCJG3COES6YS5D6" width="150" height="150" alt=""/>
                        <h5 className="my-4">Zoom</h5>
                    </div>
                    <div className="col-sm-3 mb-5">
                        <img className="image-fluid icon-shadow" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/streamlabs.png?token=AMBYZPSGGDVWOEBIBVGCJZS6YS5JK" width="150" height="150" alt=""/>
                        <h5 className="my-4">Streamlabs</h5>
                    </div>
                    <div className="col-sm-3 mb-5">
                        <img  className="image-fluid icon-shadow" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/lightstream.png?token=AMBYZPWOUPLREKHALW77DIS6YS5G2" width="150" height="150"alt=""/>
                        <h5 className="my-4">Lightstream</h5>
                    </div>
                    <div className="col-sm-3 mb-5">
                        <img className="image-fluid icon-shadow" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/wirecast.png?token=AMBYZPWPDPIGGFA5W27BZDC6YS5F6" width="150" height="150"alt=""/>
                        <h5 className="my-4 ">Wirecast</h5>
                    </div>
                </div>
     
                <div className="row d-flex justify-content-center mb-4">

                    <div className="col-md-8">

                        <h5>...and many more</h5>

                    </div>

                </div>
            </section>
        );
    }
}
