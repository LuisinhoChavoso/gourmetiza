import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/home";
import Listar from "./Listar/listar"
import CadastroUsuario from "./Cadastro/CadastroUsuario";
import Contatos from "./Contatos/contatos"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/cadastro-usuario" exact={true} component={CadastroUsuario} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/listar" exact={true} component={Listar} />
          <Route path="/contatos" exact={true} component={Contatos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
