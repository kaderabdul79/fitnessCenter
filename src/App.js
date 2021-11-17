import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';

function App() {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <h2>{users.length}</h2>
      {
        users.map((user) => {
          <h1>{user.name}</h1>
          console.log(user.name)
        })
      }
      {/* <ul>
        {
          users.map(user => {
            <li key={user.id}>{user.id} {user.Address}g</li>
          })
        }
      </ul> */}
    </div>
  );
}

export default App;
