import styled from "styled-components";

import { popularProducts } from '../data';
import { Product } from "./Product";

const Container = styled.div`
margin: 5rem 2rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* display: grid; 
grid-template-columns: repeat(5, 1fr);
gap: 10px; */
`;


export const Products = () => {
  return (
    <Container>
        {popularProducts.map((productItem) => (
            <Product key={productItem.id} productItem={productItem}/>
        ))}
    </Container>
  )
}
