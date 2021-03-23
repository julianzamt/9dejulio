import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import portadaImg from "../../images/legislatura/IMG-20171201-WA0039.jpg"
import innerHero from "../../images/grupal.png"
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import { HashLink } from 'react-router-hash-link';

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen`}
  background-image: url(${portadaImg});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto h-screen`;

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const TwoColumn = tw.div`pt-20 pb-20 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`flex justify-center w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const SubTitle = tw.div`mt-4 text-gray-200 font-medium text-sm border-t border-primary-300 py-2`

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;



const InnerImg = tw.img`rounded-xl shadow-xl hidden w-10/12 lg:block`

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <HashLink to="#quienes_somos" smooth={true}>
        <NavLink>
          Quiénes somos
      </NavLink>
      </HashLink>
      <HashLink to="#plan_de_estudios" smooth={true}>
        <NavLink>
          Plan de estudios
      </NavLink>
      </HashLink>
      <HashLink to="#docentes" smooth={true}>
        <NavLink>
          Docentes
      </NavLink>
      </HashLink>
      <HashLink to="#ubicacion" smooth={true}>
        <NavLink>
          Ubicación
      </NavLink>
      </HashLink>
    </NavLinks>,
    <NavLinks key={2}>
      <HashLink to="#contacto" smooth={true}>
        <PrimaryLink href="#contacto">
          Contactanos
      </PrimaryLink>
      </HashLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Bachiller con Orientación en Economía y Administración</Notification>
            <Heading>
              <span>Instituto Privado</span>
              <br />
              <SlantedBackground>9 de Julio</SlantedBackground>
              <SubTitle>Cooperativa de Enseñanza y Trabajo Ltda (A-60)</SubTitle>
              <HashLink to="#quienes_somos" smooth={true}>
                <PrimaryAction>Conocenos</PrimaryAction>
              </HashLink>
            </Heading>
          </LeftColumn>
          <RightColumn >
            <InnerImg src={innerHero} alt="innerHero" />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
