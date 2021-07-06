import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons"; 
import { faCode, faDatabase, faDesktop, faFileCode, faProjectDiagram, faServer } from "@fortawesome/free-solid-svg-icons";

const Skillset = () => {
    return (
        <div className="skillset">
            <h1 className="py-5">Skillset</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box1">
                              <div className="circle"><FontAwesomeIcon className="icon" icon={faCode} size="2x"/> </div>
                                <h3>Programing languages</h3>
                                
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box2">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/> </div>
                                <h3>Web deveploment</h3>
                                
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>PHP</li>
                                
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box3">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDatabase} size="2x"/> </div>
                                <h3>Database</h3>
                                
                                    <li>SQL</li>
                                    <li>Firebase</li>
                                   
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                            <div className="box4">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faServer} size="2x"/> </div>
                                <h3>Version Control</h3>
                                
                                    <li>Github</li>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Skillset

