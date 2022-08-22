import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

import {sliderItems} from "../data"

import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  background-color: coral;
  position: relative;
  overflow: hidden;
  margin-bottom: 120px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.6;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`height: 80%;`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`font-size: 70px;`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2  ? slideIndex + 1 : 0)
    }

  }

  return (
    <Container>
      <Arrow direction="left"  onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}> 
        {sliderItems.map(item => (

        <Slide key={item.id} bg={item.bg}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>Show</Button>
          </InfoContainer>
        </Slide>
        ))}

        {/* <Slide bg="#35fc03">
          <ImgContainer>
            <Image src={s1} />
          </ImgContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Desc>sssssssssssssssssss</Desc>
            <Button>Show</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="#fc039d">
          <ImgContainer>
            <Image src={s3} />
          </ImgContainer>
          <InfoContainer>
            <Title>Popular Sale</Title>
            <Desc>sssssssssssssssssss</Desc>
            <Button>Show</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>

      <Arrow direction="right"  onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
