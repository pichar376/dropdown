import { useState } from "react";
import styledComponents from "styled-components";
import DropDownButton from "./DropDownButton";
import DropDownCompany from "./DropDownCompany";
import { BsList } from 'react-icons/bs';
import Loggin from "./Loggin";


const NavBarStyled = styledComponents.nav`


  width:100;
  display: flex;
  align-items:center;
  justify-content:space-between;
  height: 5em;
  top: 0;

  .burguer{
    position:fixed;
    top:0rem;
    right:1rem;
    font-size:3rem;
  @media(min-width:700px){
      display:none;
     }
    }
    
   
    
     .item-loggin{
       display:flex;
       justify-content:flex-end;
      flex-basis:70%;
      

      
    }
  //  &{
  //    @media(max-width:700px){
  //      position:relative;

  //    }
   }
  .links{
display:flex;
justify-content:space-evenly;
align-items:center;
transition:all .6s ease-in-out;
@media(max-width:700px){
      position:absolute;
      background-color:#00000075;
      top:4rem;
      left:1000px;
      right:0;
      bottom:0;
      display:flex;
      flex-direction:column;
      align-items:center;

      .drop-button-company,.drop-button{
        margin-left:2.5rem;
      }


      a{
        color:white;
      }
      
      
      
    }
  }
  .links.active{
      top:4rem;
      left:0px;
      right:0px;
      bottom:0;
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

      <h3>snap</h3>
      <div className={`links ${active ? "active" : ""}`}>
        <article class="drop-button">
          <DropDownButton name="Features" item1="todolist" item2="calendar" item3="reminders" item4="planning" />
        </article>


        <article className="drop-button-company">
          <DropDownCompany name="Company" item1="History"
            item2="Our Team" item3="Blog" />
        </article>




        <a href="" className="side-margin">Careers</a>
        <a href="" className="side-margin">About</a>
        <article className="item-loggin">
          <Loggin />

        </article>
      </div>
      <article className="burguer" onClick={handleMenu}>
        <BsList />
      </article>





    </NavBarStyled >

  );
}

export default NavBar;