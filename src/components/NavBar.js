import { useState } from "react";
import styledComponents from "styled-components";
import DropDownButton from "./DropDownButton";
import DropDownCompany from "./DropDownCompany";
import { BsList } from 'react-icons/bs';


const NavBarStyled = styledComponents.nav`
width:100vw;
display:flex;
align-items:center;
font-size:14px;
  

.links{
display:none;
width:100%;
@media(min-width:770px){
  display:flex;
justify-content:space-evenly;
align-items:center;
}
}


.burguer{
  display:none;
  position:fixed;
  top:-1rem;
  right:1rem;
  @media(max-width:770px){
    display:block;
    font-size:50px;
  }
}
a{
  margin: 2em 2em;
  transition:all .3s ease-out;
  &:hover{
    color:#000;
  }
}

.snap{
font-weight: 700;
margin-right:1.5rem;
}
  `
const ContainerLoggin = styledComponents.div`
display:flex;
justify-content:flex-end;
align-items:center;
 flex-grow:1;
  
  

  .loggin{
  }

  .register{
    display:flex;
justify-content:center;
align-items:center;
    border:thin solid gray;
    width:5rem;
    height:2rem;
    border-radius:10px;
    transition:all .3s ease-out;
  
    &:hover{
     border:thin solid black;
     color:#000;
    }
  }

`



const NavBar = () => {
  const [opacityColorButton, setOpacityColorButton] = useState("btn-inactive");
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active)
  }
  return (

    <NavBarStyled>

      <h3 className="snap">snap</h3>
      <div className="links">

        <DropDownButton name="Features" item1="todolist" item2="calendar" item3="reminders" item4="planning" />




        <DropDownCompany name="Company" item1="History"
          item2="Our Team" item3="Blog" />





        <a href="" className="side-margin">Careers</a>
        <a href="" className="side-margin">About</a>
        <ContainerLoggin>
          <a href="" className="loggin">Loggin</a>
          <a href="" className="register"><span>Register</span></a>
        </ContainerLoggin>

      </div>
      <article className="burguer" onClick={handleMenu}>
        <BsList />
      </article>





    </NavBarStyled >

  );
}

export default NavBar;













