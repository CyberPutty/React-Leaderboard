import React from 'react';
function TableHead(props)
{
 function icon(){
  if (props.active){
    
    return <div>&#x25BC;</div>;
  }
  else{
    return null;
  }
}
  
  return(
       <th toggle={props.active} id={props.listId}onClick={props.selectList}>{props.text}<span>{icon()}</span></th>
  );
}
export default TableHead;