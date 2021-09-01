
import { auth } from "../config";
import  "./home.css"
import swal from "sweetalert";
import { Helmet } from 'react-helmet'



function Home() {
  const signOut = () => {
    auth.signOut()
      .then(() => {
        swal({
          title: "AVISO",
          text: "Deseja mesmo sair??",
          icon: "warning",
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "",
            closeModal: true
          }
        })
        .then((funcsair) => {
          if (funcsair) {
            window.location.href = "/";
          }
        });
        
      })
      .catch((error) => {
        swal({
          title: "AVISO",
          text: "Não foi possivel sair, tente novamente",
          icon: "error",
        })
      });
  };
  const titulo = 'Home'
 

  return (
    <div class="body" style={{}}>
     <Helmet>
          <title>{ titulo }</title>
        </Helmet>

      <ul>
      <li>
          <a href=".\teste"> Teste </a>
        </li>
  <li><a style={{
    textDecoration:"none", color:"white"
  }} class="active" href=".\home"> Home </a></li>
  <li><a href=".\Listar" > Receitas </a></li>
  <li><a  href=".\contatos"> Contatos </a></li>
  <li style={{float:"right"}} onClick={() => signOut()} ><a href="#about">Sair</a></li>
</ul>
<h1 style={{
  textAlign:"center",
}}>Bem vindo</h1>
   <div>
     <img src="..\assets\back.png" alt=""/>
   </div>

    </div>
  );
}


export default Home;
