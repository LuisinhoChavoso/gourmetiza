import { useRef, useState } from "react";
import { auth } from "../config";
import Loading from "../assets/loading.gif";
import swal from "sweetalert";
import { Link } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const login = () => {
    const email = emailRef?.current?.value;
    const senha = passwordRef?.current?.value;
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        swal({
          title: "AVISO",
          text: "Logado com sucesso.",
          icon: "success",
        });
        console.log("success!");
        window.location.href = "/Home";
      })
      .catch(() => {
        swal({
          title: "AVISO",
          text: "Falha ao logar, verifique seus dados!",
          icon: "error",
        });
        console.log("failed!");
      });
    setLoading(false);
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
      {loading && (
        <img
          src={Loading}
          alt="Loading"
          style={{
            borderRadius: 50,
            marginLeft: "31%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            height: "400px",
            width: "500px",
            marginTop: 150,
          }}
        />
      )}
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
          boxShadow: "black 5px 2px 2px",
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
                  required="required"
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
                  required="required"
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
            <tr style={{ display: "flex", flexDirection: "row" }}>
              <td>
                <Link
                  style={{
                    display: "flex",
                    backgroundColor: "rgba(255,0,0,0.9)",
                    border: "#000",
                    padding: 15,
                    cursor: "pointer",
                    alignItems: "center",
                  
                    fontSize: 20,
                    fontFamily: "arial",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    textShadow: "3px 1px 1px black",
                    color: "white",
                  }}
                  to="/cadastro-usuario"
                >
                  CADASTRAR
                </Link>
              </td>
              <td>
                <input
                  onClick={login}
                  type="submit"
                  value="LOGAR"
                  style={{
           
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
                    textShadow: "3px 1px 1px black",
                    color: "white",
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

export default Login;
