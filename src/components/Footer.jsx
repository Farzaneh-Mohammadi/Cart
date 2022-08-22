import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
display: flex;
background-color: #c4f9ed;
padding: 2rem 1rem;
`;

const Left = styled.div`
flex: 1;
padding: 20px;
`;

const Logo = styled.h1`
text-align: start;
margin: 0 10px;
`;

const Desc = styled.div`
margin: 20px 10px;
text-align: start;
`;

const SocialIconContainer = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
margin: 5px;
`

const SocialIcon = styled.div`
width: 37px;
height: 37px;
border-radius: 50%;
color: #fff;
background-color: ${props => props.color};
display: flex;
justify-content: center;
align-items: center;
`





const Center = styled.div`
flex: 1;
padding: 20px;
`;


const Title = styled.h3`
text-align: start;
margin-left: 10%;
`;

const List = styled.ul`
margin: 0;
padding: 0 3rem;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
text-align: start;
width: 50%;
cursor: pointer;
margin-bottom: 5px;
`;



const Right = styled.div`
flex: 1;
padding: .5rem 2rem;`;

const ContactItem = styled.div`
text-align: start;
margin-left: 3rem;
margin-bottom: 15px;
display: flex;
align-items: center;
`



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> LAMAXN.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          elementum tempus egestas sed. Velit egestas dui id ornare arcu.
          Pellentesque habitant morbi tristique senectus.
        </Desc>
        <SocialIconContainer>
            <SocialIcon color="#3B5999">
                <Facebook />
            </SocialIcon>
            <SocialIcon color="#E4405F">
                <Instagram />
            </SocialIcon>
            <SocialIcon color="#55acee">
                <Twitter />
            </SocialIcon>
        </SocialIconContainer>
      </Left>

      <Center>
    <Title>Useful Links: </Title>
    <List>
        <ListItem> Home </ListItem>
        <ListItem> Cart </ListItem>
        <ListItem> Men Fashions </ListItem>
        <ListItem> Women Fashions </ListItem>
        <ListItem> Accessories </ListItem>
        <ListItem> My Account </ListItem>
        <ListItem> Order Tracking </ListItem>
        <ListItem> Wishlist </ListItem>
        <ListItem> Terms </ListItem>
    </List>
      </Center>

      <Right>
        <Title> Contact </Title>
        <ContactItem> <Room /> &nbsp;  622 Dixie Path, South Tobinchester 98336 </ContactItem>
        <ContactItem> <Phone />  &nbsp;  +1 234 56 78 </ContactItem>
        <ContactItem>  <MailOutline />  &nbsp;  contact@lamaxn.dev </ContactItem>
      </Right>


    </Container>
  );
};

export default Footer;
