import { FavoriteBorderOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styled from "styled-components";

const Info = styled.div`
  /* opacity: 0; */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(0, 0, 0, 0.2); */
  z-index: 3;
  /* display: flex; */
  padding-right: 1rem;
  align-items: top;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 7px;
  min-width: 250px;
  height: 350px;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  background-color: #ece8e8;
  box-shadow: 3px 3px 5px #a2a2a2;
  border-radius: 10px;
  position: relative;
  /* &:hover ${Info}{
    opacity: 1;
  } */
`;

// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  margin: 1rem 0;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const Button = styled.button`
  width: 90%;
  margin-bottom: 0;
  border-radius: 10px;
  border: 2px solid #c9c9c9;
  background-color: #fff;
  padding: 10px;
`


export const Product = ({productItem}) => {
  return (
    <Container>
        {/* <Circle /> */}
        <Info>
        <Icon>
                <BookmarkBorderIcon />
            </Icon>
            {/* <Icon>
                <ShoppingCartOutlined />
            </Icon> */}
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
        <Image src={productItem.img} />
<Button>Add to Cart</Button>
    </Container>
  )
}
