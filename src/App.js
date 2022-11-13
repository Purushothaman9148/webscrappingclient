import { useState, useEffect } from "react";
import './App.css';


const API = "http://localhost:4000/";

function App() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(data => data.json())
      .then(res => setResult(res))
  }, [])

  return (
    <div>
      <input type="text" placeholder="search..."></input>
      <div className="App">
        {result.map(res => (
          <Scrapper key={res._id} data={res} />))};
      </div>
    </div>
  );
}

function Scrapper({ data }) {
  return (<div>
    <h1>{data.type}</h1>
    <img src={data.img} alt={data.title} />
    <p>{data.title}</p>
    <p>{data.price}</p>
  </div>);
}
export default App;



