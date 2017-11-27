import React, { Component } from 'react';
import './Home.css';
import lap from './images/lap.png';
import logis from './images/logis.jpg';
import cel from './images/cel.png';
import camara from './images/camara.png';
import cancel from './images/cancel.png';
import laptop from './images/laptop.png';
import celular from './images/celular.png';
import camera from './images/camera.png';
import instrumentos from './images/instrumentos.png';
import perdida from './images/perdida.png';
import {BrowserRouter,Route,Switch,NavLink,NavNavLink, Redirect
  } from 'react-router-dom'

const Home = () => {
    return (
        <BrowserRouter>
        <div className="container">
            <div className="row">
                <div className=" col-md-2 ">

                </div>
                <h3 className=" space ">Mis Articulos</h3>
                <div className=" articulos  col-sm-10 ">
                    <div className="row unart ">
                        <div className=" col-xs-2 ">
                            <center><img text-center className="lapt" src={lap} /></center>
                        </div>
                        <div className=" col-md-7 ">
                            <h5 className='subtitle'>Laptop</h5>
                            <p>Hp pavilion dv5, 4gb ram 1tb disco</p>
                            <p>1gb video</p>
                            <br/>
                            <br/>
                            <p>s/.2159</p>
                        </div>
                        <div className="col-md-3 ">
                            <img className="imgcancel" src={cancel} />
                            <nav aria-label="...">
                                <ul className="pager">
                                    <li className="next">
                                        <a href="#">
                                            Newer <span aria-hidden="true">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row unart ">
                        <div className=" wite  col-md-2 ">
                            <center><img text-center className="lapt" src={cel} /></center>
                        </div>
                        <div className="  col-xs-7  col-sm-7  col-md-7 col-lg-7">
                            <h5 className='subtitle' >Celular</h5>
                            <p>samsung Galaxy S7</p>
                            <p>Dual SIM</p>
                            <p>s/.2159</p>
                            <button type="button" class="btn btn-danger espaciobtn">Hasta12/33/2018</button>
                            <button type="button" class="btn btn-primary espaciobtn">al 50%</button>
                            <button type="button" class="btn btn-warning espaciobtn">s/.xdia</button>
                        </div>
                        <div className=" col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="imgcancel" src={cancel} />
                            <nav aria-label="...">
                                <ul className="pager">
                                    <li className="next">
                                        <a href="#">
                                            Newer <span aria-hidden="true">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <button type="button" class="btn btn-link btnreclamar">Reclamar</button>

                        </div>
                    </div>
                    <div className="row unart">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <center><img text-center className="lapt" src={camara} /></center>
                        </div>
                        <div className="col-xs-7  col-sm-7  col-md-7 col-lg-7">
                            <h5 className='subtitle'>Camara</h5>
                            <p>Eros rebel T6i</p>
                            <br/><br/><br/><br/>
                            <p>s/.2159</p>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="imgcancel" src={cancel} />
                            <nav aria-label="...">
                                <ul className="pager">
                                    <li className="next">
                                        <a href="#">
                                            Newer <span aria-hidden="true">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row unart ">
                        <div className="wite col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <center><img text-center className="lapt" src={lap} /></center>
                        </div>
                        <div className="col-xs-7  col-sm-7  col-md-7 col-lg-7">
                            <h5 className='subtitle'>Laptop</h5>
                            <p>Hp pavilion dv5, 4gb ram 1tb disco</p>
                            <p>1gb video</p>
                            <br/>
                            <br/>
                            <p>s/.2159</p>  
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            <img className="imgcancel" src={cancel} />
                            <nav aria-label="...">
                                <ul className="pager">
                                    <li className="next">
                                        <a href="#">
                                            Newer <span aria-hidden="true">→</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <h3 className='add'>Agregar Artículo</h3>
                    <a><img className="imgagregar" src={cancel} /></a>

                </div>
            </div>
        
                <Switch>
              </Switch>
              </div>
          </BrowserRouter>
    );
}

export default Home;