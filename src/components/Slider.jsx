import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import styled from "styled-components";


const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
background-color: coral;
position: relative;
`;


const Arrow = styled.div`
width: 40px;
height: 40px;
opacity: 0.8;
background-color: #eee;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "20px"};
right: ${props => props.direction === "right" && "20px"};
margin: auto;
cursor: pointer;
`;



export const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>

    <Wrapper>
      
    </Wrapper>

        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
