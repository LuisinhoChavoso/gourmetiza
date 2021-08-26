import { Helmet } from "react-helmet";
import "./listar.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Swal from "sweetalert2";
import { auth } from "../config";

const titulo = "LISTAR";

function Listar() {
    const signOut = () => {
        auth.signOut()
          .then(() => {
            Swal.fire({
              title: "AVISO",
              text: "Deseja mesmo sair??",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((funcsair) => {
              if (funcsair) {
                window.location.href = "/";
              }
            });
            
          })
          .catch((error) => {
            Swal.fire({
              title: "AVISO",
              text: "Não foi possivel sair, tente novamente",
              icon: "error",
            })
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
      <ul >
  <li><a class="active" href=".\home"> Home </a></li>
  <li><a href=".\Listar" > Receitas </a></li>
  <li><a  href="#contact"> Contatos </a></li>
  <li style={{float:"right"}} onClick={() => signOut()} ><a href="#about">Sair</a></li>
</ul>
      <Button variant="primary" onClick={handleShow}>
        {" "}
        Receitas{" "}
      </Button>
      <center>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>NOVA RECEITA</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              SAIR
            </Button>
            <Button variant="primary" onClick={handleClose}>
              CADASTRAR
            </Button>
          </Modal.Footer>
        </Modal>
      </center>
    </>
  );
}

export default Listar;
