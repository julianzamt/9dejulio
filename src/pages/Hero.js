import "./Hero.css";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import heroBackgroundImage1500TwoColumns from "../images/new/entrada_apaisada.jpg";
import innerHero500 from "../images/new/grupal.jpg";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../components/headers/light.js";
import { HashLink } from "react-router-hash-link";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen`}
  background-image: url(${heroBackgroundImage1500TwoColumns});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-50`;

const HeroContainer = tw.div`z-20 relative px-4 max-w-screen-xl mx-auto h-screen`;

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-yellow-500 hover:text-yellow-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-yellow-500`}
  }
`;

const TwoColumn = tw.div`sm:pt-20 sm:pb-20 px-4 h-full flex flex-col items-center justify-around sm:justify-between lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center`;
const RightColumn = tw.div`flex justify-center w-1/2 pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative  text-gray-100 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-primary-400 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.div`text-center my-4 pl-3 py-1 lg:text-left lg:border-l-4 lg:border-yellow-500 font-medium text-sm`;
const SubTitle = tw.div`mt-4 font-medium text-sm border-b-4 border-yellow-500 py-2`;
const PrimaryAction = tw.button`px-16 py-4 mt-16 text-sm sm:text-base sm:px-8 bg-gray-100 text-primary-500 font-bold rounded-DEFAULT shadow-DEFAULT transition-transform duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;
const InnerImg = tw.img`rounded-xl shadow-xl hidden w-10/12 lg:block`;
const Redes = tw.span`flex absolute bottom-0 text-gray-100 text-center mb-8 text-4xl lg:hidden`;
const RedesLG = tw.span`hidden lg:flex text-gray-100 text-xl transition-transform duration-300
hover:text-yellow-500`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <HashLink to="#quienes_somos" smooth={true}>
        <NavLink>Quiénes somos</NavLink>
      </HashLink>
      <HashLink to="#plan_de_estudios" smooth={true}>
        <NavLink>Plan de estudios</NavLink>
      </HashLink>
      <HashLink to="#docentes" smooth={true}>
        <NavLink>Docentes</NavLink>
      </HashLink>
      <HashLink to="#ubicacion" smooth={true}>
        <NavLink>Ubicación</NavLink>
      </HashLink>
    </NavLinks>,
    <NavLinks key={2}>
      <HashLink to="#contacto" smooth={true}>
        <PrimaryLink href="#contacto">Contactanos</PrimaryLink>
      </HashLink>
    </NavLinks>,
    <NavLinks key={3}>
      <RedesLG>
        <a href="https://www.facebook.com/institutoprivado9dejulio/" target="_blank" rel="noopener noreferrer" className="hero__socialMediaIcons">
          <ImFacebook2 />{" "}
        </a>

        <a href="https://www.instagram.com/institutoprivado9dejulio/" target="_blank" rel="noopener noreferrer" className="hero__socialMediaIcons">
          <ImInstagram />
        </a>
      </RedesLG>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <SubTitle>Cooperativa de Enseñanza y Trabajo Ltda</SubTitle>
              <SlantedBackground>
                Instituto Privado <br />9 de Julio <span className="hero__a60"> (A-60)</span>
              </SlantedBackground>

              <Notification>Bachiller con Orientación en Economía y Administración</Notification>
              <HashLink to="#quienes_somos" smooth={true}>
                <PrimaryAction>Ingresar al sitio</PrimaryAction>
              </HashLink>
            </Heading>
            <Redes>
              <a
                href="https://www.facebook.com/institutoprivado9dejulio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__socialMediaIcons">
                <ImFacebook2 />{" "}
              </a>
              <a
                href="https://www.instagram.com/institutoprivado9dejulio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__socialMediaIcons">
                <ImInstagram />
              </a>
            </Redes>
          </LeftColumn>
          <RightColumn>
            <InnerImg src={innerHero500} alt="innerHero" />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
