import React from "react";
import { auth } from "../config";

function Home() {
  const signOut = () => {
    auth.signOut
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <h1>Você esta na home</h1>
      <input type="button" value="sair" onClick={() => signOut()} />
    </>
  );
}

export default Home;
