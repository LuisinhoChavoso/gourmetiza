import { Helmet } from 'react-helmet'

const titulo = 'Home'

function Listar() {
    return (
    <>
     <Helmet>
          <title>{ titulo }</title>
        </Helmet>

        <h1 style={{
            textAlign:"center"
        }}>esta é a pagina de listar</h1>
    </>
    );
  }
  
  export default Listar;