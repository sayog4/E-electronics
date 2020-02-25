import React from 'react';

import styled from 'styled-components';

import CollectionItem from './collection-item';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CollectionPreview = ({ title, items, noOfItemsToDisplay }) => {
  const Options =  {
    loop: true,
		items: 4,
		margin: 30,
		dots:false,
    nav:true,
		smartSpeed: 450,
  	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
        items: 1
			},
			580: {
				items: 2
			},
			992: {
				items: 3
      },
      1200:{
        items: 4
      }
    }
  }
  return (
    <Wrapper>
      <h2 className="display-5">{ title.toUpperCase() }</h2>
      <div className="row">
      <OwlCarousel 
        {...Options}
        
      >
        {          
          Object.keys( items ).map( key => items[ key ] ).filter(( item, index ) => index < noOfItemsToDisplay ).map( (item) =>
            
              <CollectionItem  key={item.id}  item={item} urltitle={title} />         
          )
        }
        </OwlCarousel>
      </div>

    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 40px 100px;
  @media only screen and (max-width: 900px) {
    padding: 20px 50px;
  }
  
`;
export default CollectionPreview;