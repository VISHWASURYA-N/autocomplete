import React ,{ useEffect, useState } from 'react';
import Userdetails from './component/userdata';
function App() {
  const [details,setDetails]=useState(null)
 const [display, setDisplay] = useState(false)
const [search, setSearch] = useState("")
  const getData=async()=>{
    const response=await fetch('http://localhost:8000/details');
    const data=await response.json();
    console.log(data)
    setDetails(data)
  }
  useEffect(()=>{
    getData()
  },[])
 
  return (
    <div className="App">
      
       <div>
            <input type="search" name="search" value={search} id=" search" onClick={()=>(setDisplay(!display))} placeholder="search users by ID adresss,nam.." onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        <div>
        {details && display && <Userdetails details={details.filter(detail=>(
          detail.name.includes(search)|| 
          detail.id.includes(search) ||
          detail.address.includes(search) ||
         console.log( detail.items.filter(item=>(item)).filter(term=>(term.includes(search))))
         
          ))} />}
        </div>
  
    </div>
  );
 
}

export default App;
