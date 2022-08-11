import { useState } from "react";
import { Input } from "./components/Input"
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(false);

  const onNameChange = (e) => {
    setNombre(e.target.value);
  };
  const onPassChange = (e) => {
    setContrasena(e.target.value);
  };

  const onHandlerSubmit = (e) => {
    e.preventDefault();

    if(nombre === "" || contrasena === "") {
        setError(true);
        return;
    };
    setError(false);
    setContrasena("");
    setNombre("");
  };

  return (
    <>
    <h1>Desafío estado de los componentes y eventos</h1>
    <Input 
    nombre={nombre} 
    contrasena={contrasena} 
    onNameChange={onNameChange}
    onPassChange={onPassChange}
    onHandlerSubmit={onHandlerSubmit}
    error={error}
    />
    </>
  )
};
