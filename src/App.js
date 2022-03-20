import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ["Razzak", "Salman", "Shakib", "Shuvo"]
  const products = [
    {name: "Photoshop", price: "$90.99"},
    {name: "Illustrator", price: "$60.99"},
    {name: "PDF Reader", price: "$4.99"},
    {name: "Premiere El", price: "$249.99"}

]

  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        products.map(product => <li>{product.name}</li>)
      }

      </ul>

      {
        products.map(product => <Product product={product}></Product>)
      }
      
      
      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
    <h1>Count: {count}</h1>
    <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
    <h3>Dynamic Users: {users.length}</h3>
    <ul>
    {
      console.log(users)
    }
    {
      users.map(user => <li>{user.id}</li>)
    }
    </ul>
    </div>
  )
}


function Product(props) {
  const productStyle={
    border: "1px solid gray",
    borderRadius: "10px",
    backgroundColor: "lightGray",
    height: "200px",
    width: "200px",
    float: "left",
  }
  const {name, price} = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border:"2px solid red", width:"400px", margin: "10px"}}>
      <h3>My Name: {props.name}</h3>
      <p>My profession: {props.job}</p>
    </div>
  )
}

export default App;
