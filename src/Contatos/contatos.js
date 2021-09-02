import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { auth } from "../config";
import "../Contatos/contatos.css"

const titulo = "Contatos";

function Contatos() {

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        swal({
          title: "AVISO",
          text: "Deseja mesmo sair??",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((funcsair) => {
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
        });
      });
  };
  
  return (
    <>
      <Helmet>
        <title>{titulo}</title>
      </Helmet>
      <ul>
      
        <li>
          <a href=".\home"> Home </a>
        </li>
        <li>
          <a  href=".\teste"> Receitas </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "white" }}
            class="active" href=".\Contatos"> Contatos </a>
        </li>
        <li style={{ float: "right" }} onClick={() => signOut()}>
          <a href="#about">Sair</a>
        </li>
      </ul><br/>
      <h1 style={{textAlign:"center"}}>Nós dê um feedBack</h1>
   <br/>
      <div class="container">
  <form action="#" class="form-contact" method="post" tabindex="1">
    <input type="text" class="form-contact-input" name="nome" placeholder="Nome" required />
    <input type="email" class="form-contact-input" name="email" placeholder="Email" required />
    <input type="tel" class="form-contact-input" name="tel" placeholder="Telefone" />
    <textarea class="form-contact-textarea" name="conteudo" placeholder="Deixe uma mensagem" required></textarea>
    <button type="reset" class="form-contact-button">Enviar</button>
  </form>
</div>

    </>
  );
}

export default Contatos;
