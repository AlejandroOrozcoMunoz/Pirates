import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginRegistro from './componentes/LoginRegistro';
import Registro from './componentes/Registro';



const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
        <Route path="/login" exact render={()=><LoginRegistro />} />
        <Route path="/register" exact render={()=> <Registro/> } />
        </Switch>
      </BrowserRouter>
      </div>
      )
}



export default App;


