import styled from "styled-components"

const Movies = (e) => {
    console.log(e);
  return (
    
    <Container>
    <h5>{e.title}</h5>
<Content>
        <Wrap>
        <img src="./images/viewers-disney.png" alt="j" />
        </Wrap>
        <Wrap>
        <img src="./images/viewers-disney.png" alt="j" />
        </Wrap>
        <Wrap>
        <img src="./images/viewers-disney.png" alt="j" />
        </Wrap>
        <Wrap>
        <img src="./images/viewers-disney.png" alt="j" />
        </Wrap>
</Content>
    </Container>
  )
}

export default Movies

const Container = styled.div``

const Content = styled.div` 
margin: 20px 0px;
display: grid;
grid-template-columns: repeat(4,minmax(0,1fr));
grid-gap: 25px;
`

const Wrap = styled.div` 
cursor: pointer;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,rgb(0 0 0 /73%) 0px 16px 10px -10px;
border: 2px solid rgba(249,249,249,0.1);
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
border-radius: 10px;

img{
    height: 100%;
    width: 100%;
}
&:hover{
    transform: scale(1.05);
    box-shadow:rgb(0 0 0 /80%) 0px 40px 58px -16px,rgb(0 0 0 /72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249,0.8);
}
`