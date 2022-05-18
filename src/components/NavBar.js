import DropDownButton from "./DropDownButton";
import DropDownCareers from "./DropDownCareers";


const flexBar = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "5em"

}
const mySelect = {

}
const NavBar = () => {
  return (
    <nav style={flexBar}>
      <h3 className="side-margin">sap</h3>

      <DropDownButton name="features" item1="todolist" item2="calendar" item3="reminders" item4="planning" />
      <DropDownCareers name="Careers" item1="History"
        item2="Our Team" item3="Blog" />     <a href="" className="side-margin">About</a>
      <article className="absolute loggin">
        <a href="" className="side-margin">Loggin</a>
        <a href="" className="side-margin">Register</a>
      </article>

    </nav>

  );
}

export default NavBar;