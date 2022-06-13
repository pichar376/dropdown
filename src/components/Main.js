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

  
  }
      .button-learn{
     heigth:1.5rem;
     line-height:1.5rem;
     transition:all .3s ease-out;
     &:hover{
    background-color:white;
    color:black;
    border:thin solid black;
     }
`
const ContentMainTitle = styledComponents.article`
h1{
  font-weight:700;
  font-size:50px;
  padding:0;
}
`


const Main = () => {
  return (
    <MyStyleMain>
      <ContentMainTitle>
        <h1>Make</h1>
        <h1>remote work</h1>
      </ContentMainTitle>
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