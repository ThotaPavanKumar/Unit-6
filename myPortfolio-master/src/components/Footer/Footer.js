import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import {Contact} from '../contact/Contact'
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {AiOutlineMail} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterWrapper style={{marginTop : "-1%"}}>
      <SectionDivider />
      <br />
      <SectionTitle id='contact'>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+91-7396236308">+91-7396236308</LinkItem>
        </LinkColumn>
        <LinkColumn style={{marginLeft: "-60px"}}>
          <LinkTitle >Email</LinkTitle>
          <LinkItem href="mailto:pavankumarthota1@gmail.com">
          pavankumarthota1@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="mailto:pavankumarthota1@gmail.com">
          Hyderabad,Telangana
          </LinkItem>
        </LinkColumn>
      </LinkList>
     
      
      {/* <Contact /> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="mailto:pavankumarthota1@gmail.com" target="_blank">
            <AiOutlineMail size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://github.com/ThotaPavanKumar" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/pavan-kumar-thota1/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/Pavan_Kumar_365"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
