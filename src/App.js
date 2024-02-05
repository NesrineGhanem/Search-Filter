import {useState} from 'react'
import './App.css';
import jsonData from "./MOCK_DATA.json";
function App() {
  const [searchTerm,setSearchTerm]=useState('')

  return (
    <div className="App">
     <input type="text" placeholder="search..."
     onChange={(e)=>setSearchTerm
      (e.target.value)}
     />
     {jsonData.filter((val)=>{
      if(searchTerm === ""){
        return val
      } else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
        return val
      }
     })
     .map((val,key)=>{
      return <div className="user" key={key}>
       <p>{val.first_name}</p>
      </div>
    })}
    </div>
  );
}

export default App;
 