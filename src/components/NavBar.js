import { useState } from "react";
import ContainerLoggin from "./ContainerLoggin";
import DropDownButton from "./DropDownButton";
import DropDownCompany from "./DropDownCompany";


const flexBar = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  height: "5em",
  justifyContent: "space-between",

}
const mySelect = {

}
const NavBar = () => {
  const [opacityColorButton, setOpacityColorButton] = useState("btn-inactive");
  return (

    <nav style={flexBar}>
      <h3 className="weight">snap</h3>

      <DropDownButton name="Features" item1="todolist" item2="calendar" item3="reminders" item4="planning" />
      <DropDownCompany name="Company" item1="History"
        item2="Our Team" item3="Blog" />
      <a href="" className="side-margin">Careers</a>
      <a href="" className="side-margin">About</a>
      <ContainerLoggin />
    </nav>

  );
}

export default NavBar;