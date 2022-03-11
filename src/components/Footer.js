import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
        <AboutSec>
           <AboutTop> <h5>About Disney+ Hotstar</h5>
            <h5>Terms Of Use</h5>
            <h5>Privacy Policy</h5>
            <h5>FAQ</h5>
            <h5>Feedback</h5>
            <h5>Careers</h5></AboutTop>
            <br/>
<AboutBottom>
<p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
</AboutBottom>

        </AboutSec>
        <ConnectSec>
        <h6>Connect with us</h6>
        <br />
        <a href="/di"><img src="./images/fb.svg" alt="fb" width={30} height={30}/></a> 
        <span>          </span>
        <a href="gg"><img src="./images/Twiter.svg" style={{marginLeft:"5px"}} alt="fb" width={30} height={30}/></a>
        </ConnectSec>
        <AppSec>
        <h6>Disney+ Hotstar App</h6>
        <br />
        <a href="/di"><img src="./images/GooglePLay.png" alt="fb" style={{objectFit:"cover"}} width={120} height={40}/></a> 
        <span>          </span>
        {/* <a href="gg"><img src="./images/AppStore.png" style={{marginLeft:"5px"}} alt="fb" width={120} height={40}/></a> */}
        </AppSec>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
/* border: 2px solid blue; */
width: 100%;
height: 150px;
padding:27px 40px;
display: flex;
justify-content: space-between;
`

const AboutSec = styled.div` 
width: 50%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display:flex;
flex-direction: column;
`
const AboutTop = styled.div`
display:flex; 
justify-content:space-between;
color: #ffffffcc;
font-size: 14px;
`
const AboutBottom = styled.div`

color: #dadada;
font-size:12px;
word-wrap: normal;
`

const ConnectSec = styled.div` `
const AppSec = styled.div` `
