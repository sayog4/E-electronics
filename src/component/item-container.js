import React from 'react';

// import ItemCard from './item-cards';

const ItemContainer = ({datas}) => {
  console.log(datas);
  
  return (
    <React.Fragment>
    {
      datas.map( data => {
        return (
          <>
          <h2 className="display-3">{data.title}</h2>
          <div className="row">
            {
              data.items.map( item => (
                
              <div className="col col-md-3">
              </div>) 
              )
            }
          </div>
          </>
        )
      })
    }
    
      
    </React.Fragment>
  );
}

export default ItemContainer;