import styledComponents from "styled-components";
import Main from "./Main";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";
const MyContainerDropButton = styledComponents.div`
.none {
  display: none;
}  
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



`


const ContainerDropDown = () => {
  return (
    <MyContainerDropButton>
      <article className="nav-bar">
        <NavBar />
      </article>

      <MainContainer />
    </MyContainerDropButton >
  );
}

export default ContainerDropDown;