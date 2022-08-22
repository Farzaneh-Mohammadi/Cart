import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div`

`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 80%;
height: 80vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`;

const Title = styled.h1`
font-weight: 200;
text-align: start;
`;

const Desc = styled.p`
margin: 20px 0;
text-align: start;
`;

const Price = styled.p`
font-weight: 100;
font-size: 30px;
text-align: start;
`;



const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

       <Wrapper>

            <ImgContainer>
                <Image src={"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"} />
            </ImgContainer>

            <InfoContainer>
                <Title>JumpSuit</Title>
                <Desc> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.</Desc>
                <Price> $20 </Price>
            </InfoContainer>

       </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
