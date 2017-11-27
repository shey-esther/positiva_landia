import React, { Component } from 'react';
import './Activar_seguro.css';
import cancel from './images/cancel.png';
import lady from './images/lady.jpg';
import daño_verde from './images/daño_verde.png';
import robo_verde from './images/robo_verde.png';

const Activar_seguro = () => {
  return (
      <div className="container">
          <div className="row">
              <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  --------------------------
              </div>
              <h3 className=" space ">Agregar Articulo</h3>
              <div className=" articulos col-xs-10 col-xs-offset-3 col-sm-10 col-sm-offset-3 col-md-10 col-md-offset-3 col-lg-10 col-lg-offset-3">
                  <div className="row unart  formacont">
                      <div className="transparent col-xs-5 col-sm-5 col-md-5 col-lg-5">
                          <img className=" ladyimg" src={lady} />
                      </div>
                      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                          <img className=" cancel" src={cancel} />
                          <p className='subtitle floats'>Celular:Samsung Galaxy S7</p>
                          <p className='subtitle'>Valor:S/.1980</p>
                          <div className="row text-center borde_precio">
                              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <img className=" log_verde" src={daño_verde} />
                              </div>
                              <div className=" col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                  <p className='text_robo'>Hasta:15/01/2018</p>
                                  <h3 className=''>Al 30%    S/.1 x día</h3>
                                  <center><img className="robo_verde" src={robo_verde} /></center>
                                  <h6>Robo</h6>
                              </div>
                          </div>
                          <div className="row text-center borde_precio">
                              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <img className=" log_verde" src={daño_verde} />
                              </div>
                              <div className=" col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                  <p className='text_robo'>Hasta:15/01/2018</p>
                                  <h3 className=''>Al 30%    S/.1 x día</h3>
                                  <center><img className="robo_verde" src={robo_verde} /></center>
                                  <h6>Robo</h6>
                              </div>
                          </div>
                          <div className="row text-center borde_precio">
                              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                  <img className=" log_verde" src={daño_verde} />
                              </div>
                              <div className=" col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                  <p className='text_robo'>Hasta:15/01/2018</p>
                                  <h3 className=''>Al 30%    S/.1 x día</h3>
                                  <center><img className="robo_verde" src={robo_verde} /></center>
                                  <h6>Robo</h6>
                              </div>
                          </div>
                          <button type="button" className="onlybtn2 btn btn-info">Agregar</button>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  );
}

export default Activar_seguro;