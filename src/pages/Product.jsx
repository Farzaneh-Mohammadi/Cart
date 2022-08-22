import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import { Products } from "../components/Products";
import Footer from "../components/Footer";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`flex: 1;`;

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



const FilterContainer = styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
border-radius: 5px;
`

const FilterSizeOption = styled.option`
  
`



const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
   display: flex;
  align-items: center;
 font-weight: 700;
`

const Amount = styled.span `
  width: 30px;
  height: 30px;
  border: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
border-radius: 7px;
`


const Button = styled.button `
  padding: 15px;
  width: 40%;
color: #fff;
font-size: 15px;
font-weight: 500;
border: none;
  border-radius: 5px;
  background-color: teal;
  cursor: pointer;
`


// const Add = styled. `
  
// `

// const Remove = styled.`
  
// `


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image
            src={
              "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"
            }
          />
        </ImgContainer>

        <InfoContainer>
          <Title>JumpSuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </Desc>
          <Price> $20 </Price>


            <FilterContainer>

              <Filter>
                <FilterTitle>Color: &nbsp;</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="blue" />
                <FilterColor color="gray" />
                </Filter>

                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>

              </FilterContainer>


              <AddContainer>
                <AmountContainer>
                  <Remove />
                  <Amount>1</Amount>
                  <Add />
                </AmountContainer>
                <Button>Add to Cart</Button>
                </AddContainer>

        </InfoContainer>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Product;
