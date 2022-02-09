import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = '/'>
        <a style = {{display: "flex", alignItems:"center", color:'white'}}>
          {/* <DiCssdeck size = "3rem" />  */}
          <Span style={{color: "#9cc9e3",fontSize: "35px"}}>{`<Pavan/>`}</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = '#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/ThotaPavanKumar" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/pavan-kumar-thota1/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href = "https://twitter.com/Pavan_Kumar_365" target="_blank">
        <AiFillTwitterCircle  size="3rem"/>
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;
