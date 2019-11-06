import React from 'react';
const greet = ({name}) =>{    //Destructing the props
// console.log(props)
 return (
 <div>
     <h1>hello {name} </h1> 
     </div>
 )
    
}
export default greet;