import { useRef, useState } from "react";
import { auth } from "../config";
import Loading from "../assets/loading.gif";
import importe from "../Login/import.css";

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
        alert("Logado com sucesso");
        console.log("success!")
      })
      .catch((error) => {
        alert("email ou senha incorretos, " + error.message);
        console.log("failed!")
      });
    setLoading(false);
  };
  return (
    <div className="body" style={{
            backgroundImage:"url(https://clubedagpu.com.br/wp-content/uploads/2018/07/bg_red.jpg)",
            Overflow: "auto",
            height:"650px",
            
         
    }}>

      {loading && <img src={Loading} alt="Loading" style={{ marginLeft:"31%", position:"absolute", alignItems:"center", justifyContent:"center", height:"400px", width:"500px", marginTop:100 }} />}
      <header
        style={{
          padding: 10,
          backgroundColor: "rgba(255,255,255,0.5)",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontFamily:"Lobster",
            fontSize: "25px",
            textShadow: "3px 1px 1px white"
        }}
      >
        <h1>gourmetiza</h1>
      </header>
      <center>
      <fieldset
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: 60,
          borderStyle:"double",
          borderWidth:"20px",
         
        }}
      >
        <table>
          <tr>
            <td>
              <label style={{color:"white"}}>Email:</label>
            </td>

            <td>
              <input
                type="email"
                ref={emailRef}
                placeholder="Digite seu email"
                pattern=".+@globex\.com"
                size="30"
                required
                style={{ flexDirection: "row",
                        
                        }}
              />
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td>
              <label style={{color:"white"}}>Senha:</label>
            </td>
            <td>
              <input
                required
                type="password"
                ref={passwordRef}
                id="us_senha"
                size="30"
                placeholder="Digite sua senha"
                style={{}}
              />
            </td>
          </tr>
          <br/>
          <br/>
          <tr>
            <td>
              <input
                onClick={login}
                type="submit"
                value="Logar"
                style={{
                marginLeft: "20px",
                backgroundColor: "#fff",
                color: "black",
                border: "2px solid rgba(255,150,0,0.9)",
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
