import { useState } from "react";
import styledComponents from "styled-components";
const MydropDownButton = styledComponents.div`
display:flex;
position:relative;
`
const MenuList = styledComponents.ul`
display:${({ click }) => (click ? "flex" : "none")};
 background-color: white;
 box-shadow: 0 0 1rem #00000025;
 border-radius:3px;
  position: absolute;
  flex-flow:column wrap;
  justify-content:space-evenly;
  top:2rem;
  width:5rem;
  height:6rem;
  left:0rem;

`
const ItemList = styledComponents.li`
list-style-type:none;
margin-left:-1.4rem;
font-size:15px;
`
const StyledButton = styledComponents.button`
border:none;
color:${({ click }) => (click ? "black" : "#00000075")};

`
const ArrowButton = styledComponents.article`
svg{
  margin-left:.5rem;
}
`




const DropDownCompany = ({ name, item1, item2, item3 }) => {




  const [click, setClick] = useState(false);

  const downArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" /></svg>;

  const upArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>;


  const handleClick = () => {
    setClick(!click)
  }

  return (
    <MydropDownButton onClick={handleClick}>
      <StyledButton click={click}>{name}</StyledButton>
      <ArrowButton click={click}>
        {click ? downArrow : upArrow}
      </ArrowButton>


      <MenuList click={click}>
        <ItemList >{item1}</ItemList>
        <ItemList  >{item2}</ItemList>
        <ItemList >{item3}</ItemList>
      </MenuList>
    </MydropDownButton >
  );
}

export default DropDownCompany;