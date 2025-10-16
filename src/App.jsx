import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUers();
  }, []);
  const getUers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();

    const users = data.users;
    setUsers(users);
    console.log(users);
  };

  return (
    <>
      <h1>Usuarios</h1>
      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img src={user.photo} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.adress}</p>
            <p>{user.age} años</p>
          </div>
        ))}
      </div>


    </>
  )
}

export default App
