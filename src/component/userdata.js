import React from 'react'
const Userdetails = ({details}) => {
    console.log(details)
   if(details.length){
    return ( 
        <div  className="scroll">
            {details.map(detail=>(
               <ul tabIndex="0" key={detail.id} className="items">
                   <li >
                       <h3>{detail.id}</h3>
                       <h4>{detail.name}</h4>
                       <p> {detail.items.map(item=>(
                       <span>{item}</span>))}</p>
                       <address>{detail.address}</address>


                   </li>
               </ul>
            ))}

        </div>
    );
   }
   else{
    return(
        <div className="nouserfound">
            <p>NO USER FOUND</p>
        </div>
    )
}

}
 
export default Userdetails;

