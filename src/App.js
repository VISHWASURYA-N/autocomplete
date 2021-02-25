import React ,{ useEffect, useState ,useRef} from 'react';
import Searchinput from './component/searchform';
import Userdetails from './component/userdata';
function App() {
  const [details,setDetails]=useState(null);
 const [display, setDisplay] = useState(false);
const [search, setSearch] = useState("");
const wrapperRef= useRef(null);
  const getData=async()=>{
    const response=await fetch('http://localhost:8000/details');
    const data=await response.json();
    setDetails(data)
  }
  useEffect(()=>{
    getData()
  
  },[])
  useEffect(()=>{
    window.addEventListener("mousedown",handleClickOutside);
    return ()=>{
      window.removeEventListener("mousedown",handleClickOutside)
    }
  },[]);
  const handleClickOutside=event=>{
    if(wrapperRef.current && !wrapperRef.current.contains(event.target)){
      setDisplay(false)
    } 
   }
  let displayDetails=(data,input)=>{
    setDisplay(data)
    setSearch(input)
  

}
 
  return (
    <div className="App">
      <Searchinput displayDetails={ displayDetails}/>
        <div  ref={wrapperRef} >
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
