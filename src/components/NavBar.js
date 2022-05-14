import DropDownButton from "./DropDownButton";


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

      <DropDownButton name="features" opc1="todolist" opc2="calendar" opc3="reminders" opc4="planning" />
      <a href="" className="side-margin">Careers</a>
      <a href="" className="side-margin">About</a>
      <article className="absolute loggin">
        <a href="" className="side-margin">Loggin</a>
        <a href="" className="side-margin">Register</a>
      </article>

    </nav>

  );
}

export default NavBar;