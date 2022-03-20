import logo from './logo.svg';
import './App.css';
import Table from './Table';
import F from './Form'
import {useEffect, useState} from 'react';
function App() {

const[data,setdata]=useState([])


  const datatable=async()=>{
    try {
        fetch('http://localhost:5000/data')
        .then(response => response.json())
        .then((data) => setdata(data));

    } catch (error) {
        console.log(error)
    }
  }






  return (
    <div className="App">
      <F></F>
      <Table  data={data}></Table>
    </div>
  );
}

export default App;
