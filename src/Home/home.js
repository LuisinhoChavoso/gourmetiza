import React from "react";
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
        swal({
          title: "AVISO",
          text: "Não foi possivel sair, tente novamente",
          icon: "error",
        })
      });
  };
  const titulo = 'Home'
  return (
    <div style={{}}>
     <Helmet>
          <title>{ titulo }</title>
        </Helmet>

      <ul>
  <li><a class="active" href=".\home">Home</a></li>
  <li><a href="#news">Receitas</a></li>
  <li><a href="#contact">Contatos</a></li>
  <li style={{float:"right"}} onClick={() => signOut()} ><a href="#about">Sair</a></li>
</ul>
    </div>
  );
}

export default Home;
