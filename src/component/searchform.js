import React,{useState} from 'react';
const Searchinput = ({displayDetails}) => {
    const [click, setClick] = useState(false);
    const [input, setInput] = useState("")
   
    displayDetails(click,input)
    return ( 
        <div >
            <form >
        <input type="search" name="search" value={input} id=" search" autoComplete="on" onClick={()=>(setClick(!click))} placeholder="search users by ID adresss,nam.." onChange={(e)=>{setInput(e.target.value)}}/>
        </form>     
    </div>
     );
}
 
export default Searchinput;