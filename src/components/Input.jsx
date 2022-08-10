
import { Boton } from "./Boton";
import Form from 'react-bootstrap/Form';

export const Input = ({nombre, contrasena, onNameChange, onPassChange, onHandlerSubmit, error}) => {

  return (
            <Form onSubmit={onHandlerSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" value={nombre} onChange={onNameChange} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="contrasena"value={contrasena} onChange={onPassChange} />
            </Form.Group>
             {error ? <Form.Text className="text-muted">Favor, ingresa todos los datos</Form.Text> : null}
             {contrasena === "252525" ? <Boton /> : null}
          </Form>
  )
};
