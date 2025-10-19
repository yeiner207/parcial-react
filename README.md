README - Parte 2: Aplicación React + Vite
Este documento corresponde a la segunda parte de la Actividad Complementaria Corte 2. Se debe
construir una aplicación en React (usando Vite) que consuma el endpoint GET creado en la Parte 1.
Los desarrolladores de este proyecto son Yeiner Stiven López y Juan José Solarte Castaño.
### Descripción del Proyecto La aplicación React obtiene y muestra los datos de los usuarios
consumiendo el endpoint /users del servidor API. Debe visualizar la información básica de cada
usuario, incluyendo su nombre, teléfono, correo, dirección, edad y foto. Los estilos quedan a criterio de
los desarrolladores, pudiendo utilizar cualquier librería CSS o framework.
// src/App.jsx
import { useEffect, useState } from "react";
function App() {
 const [users, setUsers] = useState([]);
 useEffect(() => {
 fetch("http://localhost:3000/users")
 .then(res => res.json())
 .then(data => setUsers(data.users))
 .catch(err => console.error(err));
 }, []);
 return (
 <div style={{ padding: '20px' }}>
 <h1>Lista de Usuarios</h1>
 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
 {users.map((user, index) => (
 <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '200px' }}>
 <img src={user.photoUrl} alt={user.name} style={{ width: '100%', borderRadius: '10px' }} />
 <h3>{user.name}</h3>
 <p><b>Teléfono:</b> {user.phone}</p>
 <p><b>Email:</b> {user.email}</p>
 <p><b>Dirección:</b> {user.address}</p>
 <p><b>Edad:</b> {user.age}</p>
 </div>
 ))}
 </div>
 </div>
 );
}
export default App;
Esta aplicación puede ejecutarse con el comando npm run dev tras instalar las dependencias.
