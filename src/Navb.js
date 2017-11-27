import React, { Component } from 'react';
import Home from './Home';
import Add_articulo from './Add_articulo';
import Pago from './Pago';
import logo from './images/segurolandia.png';
import Activar_seguro from './Activar_seguro';
import logis from './images/logis.jpg';
import './Navb.css';
import { BrowserRouter, Route,Switch,Redirect, NavLink} from 'react-router-dom'

class Navb extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="contenido">
          <nav className='y-web-nav'>
            <img
              className="img responsive"
              src={logo} />
            <div className='cont' >
              <img
                className="img user"
                src={logis} />
              <p className='email' >estheralvaro44@gmail.com</p>
            </div ><hr />
            <div className='cont1'>Menu de navegación</div><hr />
            <div className='y-menu'>
              <div className='y-menu'>
                <div><NavLink to="/Home"><a> Mis Articulos</a></NavLink></div>
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                <div><NavLink to="/Add_articulo"><a>Agregar Articulos</a></NavLink></div>
                <div><NavLink to="/Activar_seguro"><a>Pagos</a></NavLink></div>
                <div><NavLink to="/Pago"><a>Pagos</a></NavLink></div>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route path="/Add_articulo" render={() => <Add_articulo />} />
            <Route path="/Activar_seguro" render={() => <Activar_seguro />} />
            <Route path="/Pago" render={() => <Pago />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default Navb;