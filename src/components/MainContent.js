import styledComponents from "styled-components";
import MainLogo from "./MainLogo";

const MyStyleMain = styledComponents.div`
  display:flex;
  justify-content:center;
  flex-flow:column wrap;
  margin:7rem 5rem;
  min-width:450px;
  height:70%;
   

  @media(max-width:960px){
   flex-direction:column;
   width:100%;
   align-items:center;
   margin:0 auto;
   justify-content:center;
  }
   
`
const Button = styledComponents.button`
     heigth:1.5rem;
     line-height:1.5rem;
     width:7rem;
     font-weight:600;
     background-color:#000;
     border-radius:10px;
     color:white;
     padding:5px;
     transition:all .3s ease-out;
     border:none;
     margin-top:1rem;
     &:hover{
     background-color:#fff;
     color:#000;
     }
     @media(max-width:770px){
      padding:10px;
      font-weight:700;
     }
`
const ContentMainTitle = styledComponents.article`
@media(max-width:960px){
   display:flex;
   margin:0 auto;
  h1{
    text-align:center;
    margin-right:.5rem;
  }
  }
h1{
  font-weight:700;
  font-size:50px;
}
`
const MyTextMain = styledComponents.article`
width:55%;
font-size:14px;
p{
  padding:0;
  margin:0;
}
@media(max-width:960px){
text-align:center;
margin:0 auto;
}
`


const MainContent = () => {

  return (
    <MyStyleMain>



      <ContentMainTitle>
        <h1>Make</h1>
        <h1>remote work</h1>
      </ContentMainTitle>
      <MyTextMain>
        <p>Get your team insync.no matter location.Streamline processes create team virtuals.annd watch productivity soar.</p>
      </MyTextMain>
      < Button>Learn more</Button>
      <br />
      <br />
      <MainLogo />
    </MyStyleMain >);
}

export default MainContent;