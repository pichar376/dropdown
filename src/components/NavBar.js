
import styledComponents from "styled-components";
import DropDownFeatures from "./DropDownFeatures";
import DropDownCompany from "./DropDownCompany";
import { BsList } from 'react-icons/bs';
import { IoCloseOutline } from "react-icons/io5";



const NavBarStyled = styledComponents.nav`
width:100vw;
display:flex;
align-items:center;
font-size:14px;
@media(max-width:770px){
  justify-content:space-between;
  align-items:baseline;
  .snap{
    font-size:45px;
  }
}
a{
  margin: 2em 2em;
  transition:all .3s ease-out;
  text-decoration:none;
  color:#00000075;
  &:hover{
    color:#000;
  }
  @media(max-width:770px){
      margin:0;
    }
}

.snap{
font-weight: 700;
margin-right:1.5rem;
 margin-left:1rem;
}
  `
const ContainerLoggin = styledComponents.div`
display:flex;
justify-content:flex-end;
align-items:center;
 flex-grow:1;
 .register{
      display:flex;
justify-content:center;
align-items:center;
  border:thin solid gray;
    width:5rem;
    height:2rem;
    border-radius:10px;
 }

@media(max-width:770px){
  flex-grow:0; 
  flex-flow:column wrap;
    gap:2rem;
  
  .register{
    
    
    &:hover{
     border:thin solid;
     color:#000;
    }
  }

`
const ContainerMenuBurguer = styledComponents.article`
 display:none;
  @media(max-width:770px){
    position:sticky;
    right:.5rem;
  display:block;
    font-size:50px;
    z-index:999;
  }
`
const MenuLinks = styledComponents.div`
width:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
heigth:3rem;

@media(max-width:770px){
   position:absolute;
  background-color:white;
  width:60vw;
  top:0;
  right:${({ active }) => (active ? "0" : "-45rem")};
  bottom:0;
  display:flex;
  flex-flow:column wrap;
  align-items:center;
  justify-content:space-evenly;
   border-radius:15px 0 0 15px;
  transition:all .8s ease-in-out;
  z-index:999;
  a,.register{
    color: #00000075;
   &:hover{
    color:#00000050;
    font-weight:700;
   } 
  }


}

`



const NavBar = ({ active, setActive }) => {


  const handleMenu = () => {
    setActive(!active)
  }
  return (

    <NavBarStyled>

      <h3 className="snap">snap</h3>
      <MenuLinks active={active} >

        <DropDownFeatures name="Features" item1="todolist" item2="calendar" item3="reminders" item4="planning" />

        <DropDownCompany name="Company" item1="History"
          item2="Our Team" item3="Blog" />

        <a href="">Careers</a>
        <a href="" >About</a>
        <ContainerLoggin>
          <a href="" className="loggin-button">Loggin</a>
          <a href="" className="register"><span>Register</span></a>
        </ContainerLoggin>


      </MenuLinks>
      <ContainerMenuBurguer onClick={handleMenu}>
        {active ? <IoCloseOutline /> : <BsList />}
      </ContainerMenuBurguer>

    </NavBarStyled >

  );
}

export default NavBar;




















