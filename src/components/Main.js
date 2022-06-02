import styledComponents from "styled-components";
import MainLogo from "./MainLogo";

const MyStyleMain = styledComponents.div`
  display:flex;
  flex-flow:column nowrap;
  margin:3rem;
  width:40vw;
  height:70%;
  @media(max-width:960px){
      display:none;
`
const Main = () => {
  return (
    <MyStyleMain>
      <article>
        <p className="main-text" >Make <br />remote work</p>
      </article>
      <article>

        <p>Get your team insync.no matter location.<br />Streamline processes create team virtuals.annd<br />watch productivity soar.</p>
      </article>
      <input type="button" value="Learn more" className="button-learn" />
      <br />
      <br />
      <MainLogo />
    </MyStyleMain>);
}

export default Main;