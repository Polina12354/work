import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';

function App() {
  const src="https://pingpong73.ru/handler/playersapi"

  const [players, setPlayers] = useState([])
  useEffect(()=>{
    axios
      .get(src, {"Content-Type": "application/json"})
      .then(data => {
        console.log(data);
        setPlayers(data.data);
      })
  },[])

  return (
    <div className="App">
      <Table striped bordered >
        <thead>
          <tr>
            <th>#</th>
            <th>Имя и Фамилия</th>
            <th>Год рождения</th>
            <th>Город</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
      {players.map(
        (item,i) =>
        {
          i+=1
          return(
        <tr>
          <td>{i++}</td>
          <td>{item.name}</td>
          <td>{item.byear}</td>
          <td>{item.city}</td>
          <td>{item.rating}</td>
        </tr>
            )
        })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
