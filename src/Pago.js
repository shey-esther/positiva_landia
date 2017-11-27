import React, { Component } from 'react';
import './Pago.css';
import cancel from './images/cancel.png';

const Pago = () => {
  return (
    <div className="container">
    <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            --------------------------
        </div>
        <h3 className=" space ">Agregar Laptop</h3>
        <div className=" articulos col-xs-10 col-xs-offset-3 col-sm-10 col-sm-offset-3 col-md-10 col-md-offset-3 col-lg-10 col-lg-offset-3">
            <div className="row unart  formacont">
                <img className=" cancel" src={cancel} />
                <p className='subtitle2'>Recuerda que solo puedes agregar equipos que esten a tu nombre</p>
                <div className='contaddlap'>
                    <p className='subtitle'>Equipo:</p>
                    <div className="col-lg-12">
                        <div className="imtamaño input-group">
                            <div className=" input-group-btn">
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a> </li>
                                    <li><a href="#"> Something else here</a></li>
                                    <li role="separator" className="divider" /> <li>
                                        <a href="#"> Separated link</a>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false"> Action <span className="caret" />
                                </button>
                            </div>
                            <input type="text" placeholder="Seleccione equipo" className=" form-control" aria-label="..." />
                        </div>
                    </div>
                    <p className='subtitle'>Valor Mercado</p>
                    <div className="imtamaño2 input-group">
                        <span className="input-group-addon">$</span>
                        <input type="text" placeholder="Seleccione archivo" className=" form-control" aria-label="Amount (to the nearest dollar)" />
                    </div>
                    <p className='subtitle'>Boleta/Factura del equipo:</p>

                    <div class="col-lg-9">
                        <div className="imtamaño input-group">
                            <span className="input-group-addon" id="basic-addon1">@</span>
                            <input type="text" className=" form-control" placeholder="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <button type="button" className="onlybtn1 btn btn-info">Subir Archivo</button>
                    </div>
                    <button type="button" className="onlybtn2 btn btn-info">Agregar</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Pago;

