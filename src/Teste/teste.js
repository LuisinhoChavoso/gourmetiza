import React, {useState} from "react"
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import swal from "sweetalert";
import { auth } from "../config";
import "../Contatos/contatos.css"
import styled from "styled-components";
import { Modal } from "../components/Modal";
import { GlobalStyle } from "../globalStyle";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const Button = styled.button`
min-width:100px;
padding:16px 32px;
border-radius:4px;
border: none;
background: #FF0000;
color: #FFF;
font-size:24px;
cursor:pointer;
`;

const titulo = "Contatos";

function Teste() {

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
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
      setShowModal(prev => !prev)
  }
  
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
          <a style={{ textDecoration: "none", color: "white" }}
            class="active" href=".\teste"> Receitas </a>
        </li>
        <li>
          <a href=".\Contatos"> Contatos </a>
        </li>
        <li style={{ float: "right" }} onClick={() => signOut()}>
          <a href="#about">Sair</a>
        </li>
      </ul>
   
        <Container>
            <Button onClick={openModal}>
                +
            </Button>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <GlobalStyle/>
        </Container>

    </>
  );
}

export default Teste;
