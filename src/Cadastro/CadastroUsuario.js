import React, { useRef } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { auth, database } from "../config";

function CadastroUsuario() {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dataRef = useRef(null);
  const ref = database.ref("usuarios");

  const singUp = (e) => {
    let nome = nomeRef?.current?.value;
    let email = emailRef?.current?.value;
    let password = passwordRef?.current?.value;
    let dataNasc = dataRef?.current?.value;

    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (resp) => {
        const uid = resp?.user?.uid;
        ref.child(uid).push({
          nome,
          email,
          password,
          dataNasc,
        });
        await swal({
          title: "Cadastrado",
          text: "Cadastro Efetuado com Sucesso!!",
          icon: "success",
        });
        window.location.href = "/Home";
      })
      .catch((e) => {
        e?.code === "auth/weak-password"
          ? swal({
              title: "Atenção",
              text: "Senhas deve conter no mínimo 6 dígitos",
              icon: "warning",
              ButtonColor: "rgba(255,0,0,0.9)",
            })
          : alert(e?.message);
      });
  };

  return (
    <div
      className="body"
      style={{
        backgroundImage: "url(../assets/fundo.jpg)",
        Overflow: "auto",
        height: "650px",
      }}
    >
      <header
        style={{
          padding: 10,
          backgroundColor: "rgba(255,0,0,0.9)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Lobster",
          fontSize: "25px",
          color: "white",
          textShadow: "4px 2px 2px black",
        }}
      >
        <h1>GOURMETIZA</h1>
      </header>
      <center>
        <fieldset
          style={{
            marginTop: 100,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: 60,
            borderStyle: "double",
            borderWidth: "20px",
            borderColor: "rgba(255,0,0,0.9)",
          }}
        >
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <tr>
              <td>
                <label style={{ color: "Black", fontWeight: "bolder" }}>
                  Nome:
                </label>
              </td>
              <td>
                <input
                  type="nome"
                  ref={nomeRef}
                  placeholder="Digite seu Nome"
                  required=" required"
                  size="30"
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label style={{ color: "Black", fontWeight: "bolder" }}>
                  Data de Nasc:
                </label>
              </td>
              <td>
                <input
                  type="Date"
                  required="required"
                  size="30"
                  name="data"
                  id="data"
                  ref={dataRef}
                  style={{
                    flexDirection: "row",
                    fontSize: "15px",
                    textAlign: "left",
                  }}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <input
                  type="radio"
                  required="required"
                  size="30"
                  name="F"
                  id="F"
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
                Feminino
              </td>
              <td>
                <input
                  type="radio"
                  required="required"
                  size="30"
                  name="data"
                  id="data"
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
                Masculino
              </td>
            </tr>

            <br />
            <tr>
              <td>
                <label style={{ color: "Black", fontWeight: "bolder" }}>
                  Email:
                </label>
              </td>
              <td>
                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Digite seu Email"
                  pattern=".+@globex\.com"
                  size="30"
                  required="required"
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />

            <tr>
              <td>
                <label style={{ color: "Black", fontWeight: "bolder" }}>
                  Senha:
                </label>
              </td>
              <td>
                <input
                  required
                  type="password"
                  ref={passwordRef}
                  id="us_senha"
                  size="30"
                  name="us_senha"
                  placeholder="Digite sua senha"
                  style={{ fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />

            <tr>
              <td>
                <Link
                  style={{
                    display: "flex",
                    backgroundColor: "rgba(255,0,0,0.9)",
                    border: "#000",
                    padding: 15,
                    cursor: "pointer",
                    alignItems: "center",
                    fontSize: "20px",

                    fontFamily: "arial",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    color: "white",
                    textShadow: "3px 1px 1px black",
                  }}
                  to="/"
                >
                  VOLTAR
                </Link>
              </td>
              <td>
                <input
                  onClick={singUp}
                  type="submit"
                  value="CADASTRAR"
                  style={{
                    fontSize: "20px",
                    fontFamily: "arial",
                    fontWeight: "bolder",
                    display: "flex",
                    backgroundColor: "rgba(225,0,0,0.9)",
                    border: "#000",
                    padding: 15,
                    cursor: "pointer",
                    alignItems: "center",
                    marginLeft: 15,
                    color: "white",
                    textShadow: "3px 1px 1px black",
                  }}
                />
              </td>
            </tr>
          </table>
        </fieldset>
      </center>
    </div>
  );
}
export default CadastroUsuario;
