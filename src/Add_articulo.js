import React, { Component } from 'react';
import './Add_articulo.css';
import laptop from './images/laptop.png';
import celular from './images/celular.png';
import camera from './images/camera.png';
import instrumentos from './images/instrumentos.png';
import cancel from './images/cancel.png';
import perdida from './images/perdida.png';
import lap from './images/lap.png';
import cel from './images/cel.png';
import camara from './images/camara.png';

const Add_articulo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-md-2 ">
          ------------------
                  </div>
        <h3 className=" space ">Agregar Articulo</h3>
        <div className=" articulos col-md-10 ">
          <div className="row unart ">
            <img className=" cancel" src={cancel} />
            <div className='contaddlap'>
              <p className='subtitle'>Articulo:</p>
              <div className="imtamaño2 input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></span>
                <input type="text" placeholder=" Celular" className=" form-control" aria-label="Amount (to the nearest dollar)" />
              </div>
              <button type="button" className="onlybtn2 btn btn-info">Buscar</button>
            </div>
            <div className=" camarafont col-md-2 ">
              <p>Laptop I7 asus</p>
              <center><img text-center className="lapt" src={lap} /></center>
              <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
              <p className='parraf'>s/.1500</p>
            </div>
            <div className=" camarafont col-md-2 ">
              <p>Laptop I7 asus</p>
              <center><img text-center className="lapt" src={lap} /></center>
              <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
              <p className='parraf'>s/.1500</p>
            </div>
            <div className=" camarafont col-md-2 ">
              <p>Laptop I7 asus</p>
              <center><img text-center className="lapt" src={lap} /></center>
              <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
              <p className='parraf'>s/.1500</p>
            </div>
            <div className=" camarafont col-md-2 ">
              <p>Laptop I7 asus</p>
              <center><img text-center className="lapt" src={lap} /></center>
              <i class=" posit fa fa-plus-circle" aria-hidden="true"></i>
              <p className='parraf'>s/.1500</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}


export default Add_articulo;