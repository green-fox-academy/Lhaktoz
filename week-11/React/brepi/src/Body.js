import { useEffect, useState } from "react";
import BeerList from './BeerList'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const Body = () => {
  const [beers, setBeers] = useState(null)
  const [error,setError] = useState(null);

  const [page, setPage] = useState(1);
  const onChange =(page) =>{
    setPage(page);
  }
  const [currentPageSize, setCurrentPageSize] = useState(6);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${currentPageSize}`)
      .then(res => {
        if(!res.ok) {
          throw Error('Error')
        }
        return res.json();
      })
      .then(data => {
        setBeers(data)
        console.log(data)
      })
      .catch(err => {
        setError(err.message);
      })
  }, [page,currentPageSize])

  return ( 
    <content className = "content">
      {error && <div> { error }</div> }
      {beers && <BeerList beers = { beers } />}
      { <Pagination defaultCurrent={1} total={50} onChange={onChange} /> }
    </content>
   );
}
 
export default Body;