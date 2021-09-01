import { Helmet } from "react-helmet";
import "./listar.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import swal from "sweetalert";
import { auth } from "../config";

const titulo = "LISTAR";

function Listar() {


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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Helmet>
        <title>{titulo}</title>
      </Helmet>
      <ul>
      <li>
          <a href=".\teste"> Teste </a>
        </li>
        <li>
          <a href=".\home"> Home </a>
        </li>
        <li>
          <a
            style={{ textDecoration: "none", color: "white" }}
            class="active"
            href=".\Listar"
          >
            {" "}
            Receitas{" "}
          </a>
        </li>
        <li>
          <a href=".\Contatos"> Contatos </a>
        </li>
        <li style={{ float: "right" }} onClick={() => signOut()}>
          <a href="#about">Sair</a>
        </li>
      </ul>
      <Button
        style={{
          
          fontWeight: "bolder",
          backgroundColor: "#EB0505",
          borderColor: "#EB0505",
          marginTop: "40%",
          size: "70%",
          marginLeft: "70%",
          borderRadius: "100%",
          position: "fixed",
        }}
        variant="primary"
        onClick={handleShow}
      >
        {" "}
        +{" "}
      </Button>
      <center>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>NOVA RECEITA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label  >Nome:</label>
            <br />
            <input
              type="text"
              name="nome_receita"
              id="nome_receita"
              size="60"
            />
            <br />
            <label>Ingredientes:</label>
            <br />
            <textarea
              type="text"
              name="ingredientes"
              id="ingredientes"
              size="50"
              style={{width:"100%"}}
            />
            <br />
            <label>Preparo:</label>
            <br />
            <textarea style={{width:"100%"}} type="text" name="preparo" id="preparo" size="50" />
             <script>
          $nome = document.getElementById['nome_receita'];
          </script>
          </Modal.Body>
         
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              SAIR
            </Button>
            <Button
              style={{
                backgroundColor: "#EB0505",
                borderColor: "#EB0505",
              }}
              variant="primary"
              onClick={handleClose}
            >
              CADASTRAR
            </Button>
          </Modal.Footer>
        </Modal>
      </center>
      
    </>
  );
  }

export default Listar;
