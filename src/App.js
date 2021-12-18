import logo from './logo.svg';
import './App.css';
import { useState , useEffect, useRef } from 'react';
// kader
// xpQc6Ta9i6jF8Vg1


// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://kader:<password>@cluster0.vxcvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


function App() {
  const [users,setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  
  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const handleSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const user = {name: name, email: email}
    e.preventDefault();

    fetch('http://localhost:4000/users',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const addUser = data;
      const newUser = [...users, addUser];
      setUsers(newUser);
    })
    nameRef.current.value = "";
    emailRef.current.value = "";

  }
  return (
    <div className="App">
      <h2>{users.length}</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} placeholder="name"></input>
        <input type="email" ref={emailRef} placeholder="email"></input>
        <input type="submit" value="submit"></input>
      </form>

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
