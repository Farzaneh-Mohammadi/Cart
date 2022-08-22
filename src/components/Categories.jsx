import React from 'react'
import styled from "styled-components";

import { categories } from '../data';
import { CategoryItem } from './CategoryItem';


const Container = styled.div`
 display: grid;
 padding: 20px;
grid-template-columns: repeat(4, 1fr);
`;


export const Categories = () => {
  return (
<Container>
    {categories.map(item => (
        <CategoryItem key={item.id} item={item} />
    ))}
</Container>
  )
}
