import React from 'react'
import styled from 'styled-components';
const Detail = () => {
  return (
      <>
    <Container>
        <Controls>
    <h3 style={{color:"yellow"}}>Subscriber</h3>
    <br />
    <h2 style={{letterSpacing:"2px"}}>Frozen II</h2>
    <br />
    <Desc><h4> 7 min  </h4>
    <h4> 15 </h4>
    <h4>Animation </h4>
    <h4> U </h4> <h4>English</h4></Desc>
<br />
    <p>Lorem ipsum dolor sit 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima inventore placeat, iste voluptate quibusdam!</p>
<br /><br />
    <ControlButtons>
        <MovieButton>
            <img src="./images/play-icon-white.png" alt="play" />
            <span>Watch Movie</span>
        </MovieButton>
        <WatchButton>
        <div>        <button>+</button>
            <h6>WATCHLIST</h6></div>
        <div>       
         <button>+</button>
            <h6>SHARE</h6>
            </div>
        </WatchButton>
    </ControlButtons>
    </Controls>
        <DetailImg>
    <img src='./images/Frozen.webp' alt="ku" />
        </DetailImg>

    </Container>
    <br />
    <br />
    <h2 style={{marginleft: "23px",
padding:"20px 40px"}}>More like this</h2>
<Containers>
<Box>
    <a href='./detail'><img src="./images/Shangchi.webp" alt=""/></a>
</Box>
<Box>
    <img src="./images/Wanda-vision.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Rudra.webp" alt=""/>
</Box>
<Box>
    <img src="./images/IceAge.webp" alt=""/>
</Box>
<Box>
    <img src="./images/What-if.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Frozen.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Eternals.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Encato.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Rudra.webp" alt=""/>
</Box>
<Box>
    <img src="./images/674425-h.webp" alt=""/>
</Box>
<Box>
    <img src="./images/IceAge.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Frozen.webp" alt=""/>
</Box>
<Box>
    <img src="./images/Wanda-vision.webp" alt=""/>
</Box>
<Box>
    <img src="./images/What-if.webp" alt=""/>
</Box>
</Containers>
    </>

  )
}

export default Detail;

const Containers = styled.div`
min-height: max-content;
width: 100vw;
padding:20px 20px;
display: grid;
grid-template-rows: repeat(auto,minmax(0,1fr));
grid-template-columns: repeat(auto-fit,minmax(180px,1fr));

@media (max-width:768px){
    grid-template-columns: repeat(auto-fill,minmax(170px,1fr));
}

@media (max-width:376px){
    justify-content: center;
    grid-template-columns: repeat(1,1fr);
}
`
const Box = styled.div` 
height: 190px;
width: 170px;
border-radius:10px;
margin-bottom: 30px;
margin-bottom: 10px;
cursor: pointer;
border: none;
background-color: #161824;
border: 2px solid white;
transition: transform 0.3s;
img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
&:hover{
    transform: scale(1.10);
}
@media (max-width:768px){
    height: 190px;
    width: 170px;
}
@media (max-width:376px){
 height: 100%;
 width: 100%;
}
`
const Container = styled.div` 
position: relative;
min-height: calc(100vh-60px);
margin-left: 23px;
padding:20px 20px;
width: 97vw;
border: 2px solid rgba(0, 0, 255, 0.644);
border-radius: 10px;
margin-top: 20px;
display: flex;
align-items: center;

@media (max-width:768px){
    &{
        flex-direction: column;
        align-self: auto;
        border: none;
        width: 100vw;
        margin-left: 0px;
        /* padding:6px; */
        font-size: 10px;
    }
}

`
const ControlButtons = styled.div` 
height: max-content;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:912px){
    span{
        font-size: 12px;
    }
    font-size: smaller;
}

`
const MovieButton = styled.div` 
display: flex;
align-items: center;
cursor: pointer;
span{
    margin-left: 5px;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
    letter-spacing: 1.5px;
}
`

const WatchButton = styled.div` 
display: flex;
justify-content: center;
cursor: pointer;
 button{
     border: none;
     cursor: pointer;
     font-size: 40px;
     background: none;
     color: #fff; 
 }
 div{
     display: flex;
     flex-direction: column;
     margin-right: 20px;
 }
`

const DetailImg = styled.div`
    border-radius: 10px;
    width: 60%;
    height: 400px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
    @media (max-width:768px){
    &{
        display: block;
        width: 100%;
        height: 100%;
        
        img{
            width: 100%;
            height: 100%;
            background-size: cover;
            object-fit: cover;
        }
    }
}

 `
const Controls = styled.div` 
display:flex;
flex-direction: column;
padding: 40px 20px;
border-radius: 10px;
width:40%;
height: 400px;
background-color: #040714;
&:after{
    border-right:2px ridge black;
    border-left: transparent;
    opacity: 0.3;
}
@media (max-width:768px){
    &{
        display: none;
    }
}

`

const Desc = styled.div` 
display: flex;
h4{
    &:after{
        content: ".";

    }
}
`

const Wrapbg = styled.div` 
padding: 0px calc(3.5vw);
img{
    height: 100%;
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.4;
}
`


const Wrap = styled.div` 

`

const PLayButton = styled.button`
display: flex;
cursor: pointer;
align-items: center;
padding:3px 10px;
/* margin-right: 10px; */
letter-spacing: 1.8px;
opacity: 0.5;
/* color: #fff; */
 `

const TrailerButton = styled.button`
display: flex;
cursor: pointer;
align-items: center;
padding:3px 10px;
letter-spacing: 1.8px;


`
const AddButton=styled.button` 
height: 50px;
cursor: pointer;
font-size: 30px;
border: 2px solid rgb(249,249,249,0.8);
/* border-color: rgb(249,249,249,0.8); */
/* background: rgb(198,198,198,0.8); */
background: rgb(100,100,100,0.8);
width: 50px;
/* border: none; */
border-radius: 50%;
`

const GroupButton=styled.button` 
cursor: pointer;
height: 50px;
width: 50px;
border-radius: 50%;
border: none;
background-color: #100;

`
// const Container = styled.div` 
// overflow-x: hidden;
// /* margin-top: 60px; */
// min-height: calc(100vh-60px);
// /* width: 100vw; */
// position: relative;
// `
// const Wrap = styled.div` 
// padding: 0px calc(3.5vw);
// img{
//     height: 100%;
// width:100%;
// position: fixed;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// z-index: -1;
// opacity: 0.4;
// }`