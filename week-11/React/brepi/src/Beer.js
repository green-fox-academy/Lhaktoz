import { useState } from "react";


const Beer = (props) => {
  const [visibleDescription,setVisibleDescription] = useState(false)

  const handleClick = () => { 
    if(!visibleDescription) {
      setVisibleDescription({visibleDescription: true});
     } 
     else {
      setVisibleDescription(false);
    }
  }

  return ( 
      <div onClick={ handleClick } className="beer" >
      {!visibleDescription ? <img src = { props.beer.image_url } height="150px"></img> : <img src = { props.beer.image_url } height="100px" hidden></img> } 
      {visibleDescription ? <p className="description">{ props.beer.description }</p> : <p className="description" hidden>{ props.beer.description }</p>}     
      <p>{ props.beer.name }</p>
    </div>
   );

}
 
export default Beer;