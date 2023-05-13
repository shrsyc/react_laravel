import './App.css';

import { useState , useEffect } from "react";
import axios from "axios";

function App() {
  const [students , setStudents] = useState([])

  useEffect(()=>{
    async function getAllStudent(){
      try{
          const students = await axios.get("http://127.0.0.1:8000/api/student")
          console.log(students.data)
          setStudents(students.data)
      }catch{
          console.log("error")
      }
    }
    getAllStudent()
  }, [])

  return (
    <div className="App">
      <h1> Connected React JS with Laravel </h1>
      {
        students.map((student , i)=>{
          return(
            <h2>{student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
