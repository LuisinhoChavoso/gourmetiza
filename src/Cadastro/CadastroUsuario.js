import { useRef } from "react";
import { Link } from "react-router-dom";

function CadastroUsuario() {
  const nomeRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const cadastroUsuario = () => {};

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
                  placeholder="Digite seu nome"
                  required
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />
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
                  placeholder="Digite seu email"
                  pattern=".+@globex\.com"
                  size="30"
                  required
                  style={{ flexDirection: "row", fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />
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
                  placeholder="Digite sua senha"
                  style={{ fontSize: "15px" }}
                />
              </td>
            </tr>
            <br />
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
                    color: "#000",
                    fontFamily: "arial",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    color:"white",
                    textShadow:"3px 1px 1px black"
                  }}
                  to="/"
                >
                  VOLTAR
                </Link>
              </td>
              <td>
                <input
                  type="button"
                  value="CADASTRAR"
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontFamily: "arial",
                    fontWeight: "bolder",
                    display: "flex",
                    backgroundColor: "rgba(255,0,0,0.9)",
                    border: "#000",
                    padding: 15,
                    cursor: "pointer",
                    alignItems: "center",
                    marginLeft: 15,
                    color:"white",
                    textShadow:"3px 1px 1px black"
                  }}
                  onClick={() => alert("Cadastrando")}
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
