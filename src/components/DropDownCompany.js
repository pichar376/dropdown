import { useState } from "react";
import styledComponents from "styled-components";
const MydropDownButtonContainer = styledComponents.div`
margin:2em 2em;
position:relative;
align-items:center;
input:hover{
      color:#000;
    }
svg:hover{
cursor:pointer;
}
@media(max-width:770px){
margin:0;
}
`


const MenuList = styledComponents.ul`
display:flex;
 visibility:${({ click }) => (click ? "visible" : "hidden")};
  opacity:${({ click }) => (click ? "1" : "0")};
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
transition:all .3s ease-in;

    @media(max-width:770px){
  position:initial;
  display:block;
  visibility:${({ click }) => (click ? "visible" : "hidden")};
  opacity:${({ click }) => (click ? "1" : "0")};
  margin:0;
  height:auto;
  
  box-shadow:0 0 0;
   transform: translateX(-8rem);
  }
`
const ItemList = styledComponents.li`
list-style-type:none;
margin-left:-1.4rem;
font-size:15px;
@media(max-width:770px){
   display:flex;
   align-items:center;
     border-bottom:thin solid #00000025;
     width:20rem;;
     transition:all .2s ease-in;
    &:hover{
        background-color:#00000010;
}
`

const StyledButtonCompany = styledComponents.section`
display:flex;
align-items:center;
`
const Button = styledComponents.button`
border:none;
color:${({ click }) => (click ? "black" : "#00000075")};
margin-right:.5rem;
transition:all .3s ease-in-out;
&:hover{
      color:#000;
    }
@media(max-width:770px){
  background-color:transparent;
 &:hover{
 color:#000;
    }
}
`




const DropDownCompany = ({ name, item1, item2, item3 }) => {




  const [click, setClick] = useState(false);

  // arrows that will be after the button

  const downArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" /></svg>;

  const upArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>;


  const handleClick = () => {
    setClick(!click)
  }
  console.log(downArrow)
  return (
    <MydropDownButtonContainer onClick={handleClick}>
      <StyledButtonCompany click={click}>

        <Button>{name}</Button>
        {click ? downArrow : upArrow}
      </StyledButtonCompany>

      <MenuList click={click}>
        <ItemList >{item1}</ItemList>
        <ItemList  >{item2}</ItemList>
        <ItemList >{item3}</ItemList>
      </MenuList>
    </MydropDownButtonContainer >
  );
}

export default DropDownCompany;