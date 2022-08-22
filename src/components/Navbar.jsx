import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  padding-top: 1rem;
`;


const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
border: 1px solid lightgray;
border-radius: 5px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 3px 10px;
`

const Input = styled.input`
border: none;

:hover, :focus{
    outline: none;
}
`


const Center = styled.div`
flex: 1;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`;


export const Navbar = () => {
  return (
<Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
            <Search style={{color: "gray", fontSize: "20px"}} />
            </SearchContainer>
        </Left>


        {/* <Center>center</Center> */}


        <Right>
        <MenuItem>
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
        </Right>

    </Wrapper>
    </Container>
  )
  
};
