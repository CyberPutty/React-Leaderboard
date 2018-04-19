import React from 'react';
function Campers(props){
    return(<tr className="campers">
                 <td>{props.id}</td>
                 <td><img src={props.img}/>{props.username}</td>
                 <td>{props.recent}</td>
                 <td>{props.alltime}</td>
                   </tr>);
   }
export default Campers;