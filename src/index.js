import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navb from './Navb';
import Add_articulo from './Add_articulo';
import Activar_seguro from './Activar_seguro';
import Home from './Home';
import Pago from './Pago';

import registerServiceWorker from './registerServiceWorker';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

const Index = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Navb} />
        <Route exact path="/Navb" component={Navb} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Add_articulo" component={Add_articulo} />
        <Route exact path="/Activar_seguro" component={Activar_seguro} />
        <Route exact path="/Pago" component={Pago} />
        <Route render={() => <Redirect to={'/'} />} />
      </Switch>
    </HashRouter>

  );
}



ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
