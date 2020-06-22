import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
          <a href='https://www.chess.com/club/alpha-zero' className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 b--white-20 br1" target='blank'>
            <img src='https://images.chesscomfiles.com/uploads/v1/group/96596.c7c5a0a6.160x160o.8dc931a1d312@2x.png' alt='logo' className='logo' /></a>
          <Link to='/' className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 b--white-20 br1">
            Home</Link>
            <Link to='/matches' className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 b--white-20 br1">Matches</Link>
            <Link to='/members' className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 b--white-20 br1">Members</Link>
          </NavLinks>
        </FlexContainer>
      </NavBar>
   </>
  )
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(37,47,69);
  background: linear-gradient(90deg, rgba(37,47,69,1) 0%, rgba(40,51,74,1) 100%);
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1rem;;
  justify-content: space-between;
  height: 6rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #243241;
      border-bottom: 1px solid #243241;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 