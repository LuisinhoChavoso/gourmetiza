import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import CadastroUsuario from "./Cadastro/CadastroUsuario";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact={true} component={Login} />
          <Route path="/cadastro-usuario" exact={true} component={CadastroUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
