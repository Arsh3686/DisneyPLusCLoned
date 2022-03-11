import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
      
    <Container>
        <TopImg>
{/* <h1>gey</h1> */}
<img src="./images/cta-logo-one.svg"  alt="boom"/>
    </TopImg>
    <br />
    <MidPara>
        <button>GET ALL FREE</button>
        <br />
        <br />
        <span>Get Premier Access to Raya and the Last Dragon for an additional fee with  a Disney+ subscription </span>
    </MidPara>
    <br />
    <BottomImg>
    <img src="./images/cta-logo-two.png"  alt="boom"/>
    </BottomImg>
    </Container>
      

  )
}

export default Login

// const ContainerCollector = styled.div`
// box-sizing: border-box;
// overflow-x:hidden;
// min-height: 100vh;
// width: 100%;
// 
// background-position:fixed;
// display: flex;
// background-repeat: no-repeat;
// /* align-items: center; */
// /* justify-content: center; */
// `

const Container = styled.div` 
display: flex;
align-items:center;
justify-content: center;
height: 97vh;
flex-direction: column;
background: url('./images/login-background.jpg');
/* background-position: center; */
background-size: cover;
object-fit:cover;
background-repeat: no-repeat;
`
const TopImg = styled.div`
img{
width: 100%;
height: max-content;
    z-flex:-1;
}
`
const MidPara = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
width :400px;
margin: 10px 0;
height: 110px;
padding: 4px;
/* border: none; */
/* border: 1px solid blue; */
button{
    background-color: rgba(0, 0, 255, 0.8);
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    width :100%;
    padding: 12px;
    &:hover{
        transform: scale(1.05);
    }
}
text-align: center;
span{
    width: 100%;
    
    font-size: 14px;
    
    /* color: green; */
}
`
const BottomImg = styled.div`
img{
    object-fit: cover;
    width: 600px;
}
`