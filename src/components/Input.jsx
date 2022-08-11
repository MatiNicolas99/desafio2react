
import { Boton } from "./Boton";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Input = ({nombre, contrasena, onNameChange, onPassChange, onHandlerSubmit, error}) => {

  return (
            <>
            {error ? <Button variant="danger">Favor, ingresa todos los datos</Button> : null}
            <Form onSubmit={onHandlerSubmit}>
            <Form.Group className="mb-3 w-25" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" name="nombre" value={nombre} onChange={onNameChange} />
            </Form.Group>
    
            <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="contrasena"value={contrasena} onChange={onPassChange} />
            </Form.Group>
             {contrasena === "252525" ? <Boton /> : null}
          </Form>
          </>
  )
};
