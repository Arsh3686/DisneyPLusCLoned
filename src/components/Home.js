import React ,{useEffect} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
// import * as firebase from "firebase/app";


const Home = () => {
// useEffect( ()=>{
// },[])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies title={"Latest & Trending"}/>
      <Movies title={"Popular Shows"}/>
      <Movies title={"Movies Recomended for you"}/>
      <Movies title={"Popular Movies"} />
      <Movies title={"Top Rated"}/>
    </Container>
  )
}

export default Home; 

const Container = styled.main`
overflow-x: hidden;
min-height: calc(100vh - 60px);
padding:0 calc(3.5vw + 5px) ;
position: relative;
   &:before{
        background: url("./images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
} 
`