import React from 'react'
import styled from "styled-components";




const Container = styled.div`
flex: 1;
margin: 20px;
height: 58vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;

const Info = styled.div`
position: absolute;
width: 100%;
/* height: 100%; */
padding: 0 0 30px 0;
bottom: 0;
left: 0;
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(185,186,190,1) 100%);
opacity: 0.7;

`;

const Title = styled.p`
color: #fff;
text-shadow: 2px 2px  #1c1c1c;
margin-bottom: 5px;
font-size: 25px;
font-weight: 700;
`;

const Button = styled.button`
border: none;
border-radius: 3px;
padding: 10px;
background-color: #fff;
cursor: pointer;
font-weight: 600;
`;

export const CategoryItem = ({item}) => {
  return (
<Container>
   <Image src={item.img}/>
   <Info>
    <Title>{item.title}</Title>
    <Button>Shop Now</Button>
   </Info>
</Container>
    )
}
