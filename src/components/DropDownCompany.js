import { useState } from "react";
import styledComponents from "styled-components";

const DropDownCompany = ({ name, item1, item2, item3 }) => {
  const MydropDownButton = styledComponents.div`

  
position:relative;
display:flex;
flex-flow:row wrap;
margin:1em;
  section{
  display:flex;
  align-items:center;
@media(max-width:700px){

.btn-inactive{
  margin-right:.5em;
  border:none;
  color:#eee;
  background-color:transparent;
}
.btn-active {
  background-color:transparent;
  color: #eee;
  border: none;
  margin-right:.5em;
  font-weight: 450;
}
}

@media(min-width:700px){

.btn-active {
  color: #000;
  border: none;
  font-weight: 450;
}
.btn-inactive {
  color: #00000097;
  border: none;
  display: flex;
}
}
}

`



  const [activeMenu, setActiveMenu] = useState(false);

  const [addStyle, setAddStyle] = useState("none");

  const [opacityColorCompany, setOpacityColorCompany] = useState("btn-inactive");

  const downArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" /></svg>;

  const upArrow = <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" /></svg>;

  const handleClick = () => {
    if (!activeMenu) {
      setActiveMenu(true)
      setAddStyle("company-list")
      setOpacityColorCompany("btn-active")
    } else {
      setActiveMenu(false)
      setAddStyle("none")
      setOpacityColorCompany("btn-inactive")

    }
  }

  return (
    <MydropDownButton>
      <section onClick={handleClick}>
        <input type="button" value={name} className={opacityColorCompany} />

        {activeMenu ? downArrow : upArrow}
      </section>

      <ul className={addStyle}>
        <li className="item-company">{item1}</li>
        <li className="item-company">{item2}</li>
        <li className="item-company" >{item3}</li>

      </ul>
    </MydropDownButton >
  );
}

export default DropDownCompany;