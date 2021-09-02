import React  from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md';


const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position:fixed;
display: flex;
justify-content: center;
align-items: center;
`;

const ModalWrapper = styled.div`
width: 800px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #FF0000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;

const ModalImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  h1{
      font-weight:bolder;
      color:#FF0000;
  }
  button {
    padding: 10px 24px;
    background: #FF0000;
    color: #fff;
    border: none;
  }
  label{
      color:#FF0000;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;



export const Modal = ({showModal, setShowModal}) => {
    return(
        <>
            {showModal ?(
                <Background>
                    <ModalWrapper showModal={showModal}>
                        <ModalImg ><img src="..\src\components\modal.jpg" alt=""/></ModalImg>
                        <ModalContent>
                            <form method="POST">
                                <h1>Nova Receita</h1>
                                <br/>
                                <label style={{
                                    fontWeight:"bolder"
                                }}>Nome:</label>
                                <br/>
                                <input type="text" name="nome_receita" id="nome_receita" required size="35" />
                                <br/>
                                <label style={{
                                    fontWeight:"bolder", width:"30%"
                                }}>Ingredientes:</label>
                                <br/>
                                <textarea type="text" name="ingredientes" id="ingredientes" required />
                                <br/>
                                <label style={{
                                    fontWeight:"bolder"
                                }}>Preparo:</label>
                                <br/>
                                <textarea type="text" name="preparo" id="preparo" required />
                                <br/>
                                <button type="submit" >Cadastrar</button> <button type="reset" >Limpar campos</button>
                            </form>
                            <CloseModalButton aria-label='close modal'onClick={() => setShowModal (prev => !prev)}  />
                        </ModalContent>
                    </ModalWrapper>
                </Background>
            ) : null}
           
        </>
    );
};
