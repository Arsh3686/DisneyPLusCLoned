import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return ( <>
    <Nav>
      <Logo src="./images/logo.svg" />
      <NavMenu>
          <a >
            <img src="./images/home-icon.svg" alt='j' />
            <span>HOME</span>
          </a>
          <a >
            <img src="./images/search-icon.svg" alt='j' />
            <span>SEARCH</span>
          </a>
          <a >
            <img src="./images/watchlist-icon.svg" alt='j' />
            <span>WATCHLIST</span>
          </a>
          <a >
            <img src="./images/original-icon.svg" alt='j' />
            <span>ORIGINALS</span>
          </a>
          <a >
            <img src="./images/movie-icon.svg" alt='j' />
            <span>MOVIE</span>
          </a>
          <a >
            <img src="./images/series-icon.svg" alt='j' />
            <span>SERIES</span>
          </a>

      </NavMenu>
      <UserImg src='./images/viewers-marvel.png' />
    </Nav>
    </>
  )
}

export default Header

const Nav = styled.nav`
overflow: hidden;
height: 60px;
width: 100%;
background: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
`

const Logo = styled.img`
width: 70px;

`

const NavMenu = styled.div`
display: flex;
align-items: center;
flex: 1;
a{
  margin-left: 20px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
  img{
  height: 20px;
}
span{
letter-spacing: 1.34px;
font-size: 13px;
margin-left: 5px;
position: relative;
&::after{
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
  background: white;
  width: 100%;
  bottom: -4px;
  transform-origin: left center;
  transform: scaleX(0);
  opacity: 0;
}
}

&:hover{
  span:after{
    opacity: 1;
    transform: scaleX(1);
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
  }
}
}

`


const UserImg = styled.img`
width: 100px;
height: 100px;
/* border-radius: 50%; */
object-fit: cover;
cursor: pointer;
`