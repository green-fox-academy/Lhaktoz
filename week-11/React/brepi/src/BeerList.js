import Beer from './Beer'

const BeerList = ({ beers }) => {
  return (  
    <div className="beer-list">
    {beers.map(beer => (
      <div className="beer-preview" key= { beer.id }>
      <Beer beer={ beer } />
      </div>
    ))}
    </div>
  );
}

export default BeerList;