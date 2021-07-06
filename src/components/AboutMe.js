import React from "react";
import author from "../me.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div> 
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Myself Syed Vaiz. I'm a guy how is Energetic, Meticulous and Quick learner. I'm a foodie but loves being healthy and fit.
                    </p>
                </div> 
            </div>                   
        </div>
    )
}

export default AboutMe
