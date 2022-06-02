import styledComponents from "styled-components";

const Loggin = () => {
  return (
    <StyleLoggin>
      <a href="" className="side-margin">Loggin</a>
      <a href="" className="side-margin">Register</a>
    </StyleLoggin>
  );
}
const StyleLoggin = styledComponents.article`
display:flex;
align-items:center;
height:5em;
felx-basis:60%;
a{
  backgroud-color:red;
}
@media(max-width:700px){
flex-flow:column nowrap;
}
`

export default Loggin;