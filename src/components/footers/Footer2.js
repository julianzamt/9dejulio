import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import logo from "../../images/logo_9dejulio.png";
import { ImFacebook2 } from "react-icons/im";
import { HashLink } from "react-router-hash-link";
import "./Footer2.css";

const Container = tw.div`relative bg-primary-900 text-gray-300 -mx-8 -mb-8 px-8`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`;
const FiveColumns = tw.div`flex flex-wrap justify-evenly`;

const Column = tw.div`w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0 text-sm sm:text-base text-center`;
const CompanyColumn = tw.div`text-center md:text-left mb-8 w-full`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = tw.ul`sm:mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-100 pb-1 transition-transform duration-300`;

const LogoContainer = tw.div`flex items-center justify-center`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto leading-loose text-center`;

const SocialLinksContainer = tw.div`mt-4 text-center`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-500 transition-transform duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const CopyrightNotice = tw.div`text-xs text-center`;

const Divider = tw.div`my-8 border-b-2 border-yellow-500`;
export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <CompanyColumn>
            <LogoContainer>
              <LogoImg src={logo} />
              <LogoText>Instituto Privado 9 de Julio</LogoText>
            </LogoContainer>
            <CompanyAddress>La Rioja 660 CABA (011)4931-1578</CompanyAddress>
            <SocialLinksContainer>
              <SocialLink href="https://facebook.com" target="_blank" rel="noreferrer">
                <ImFacebook2 />
              </SocialLink>
            </SocialLinksContainer>
          </CompanyColumn>
          <Column>
            <LinkList>
              <LinkListItem>
                <HashLink to="#" smooth={true}>
                  <Link>Inicio</Link>
                </HashLink>
              </LinkListItem>
              <LinkListItem>
                <HashLink to="#quienes_somos" smooth={true}>
                  <Link>Quiénes somos</Link>
                </HashLink>
              </LinkListItem>
              <LinkListItem>
                <HashLink to="#plan_de_estudios" smooth={true}>
                  <Link>Plan de estudios</Link>
                </HashLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <LinkList>
              <LinkListItem>
                <HashLink to="#docentes" smooth={true}>
                  <Link>Docentes</Link>
                </HashLink>
              </LinkListItem>
              <LinkListItem>
                <HashLink to="#ubicacion" smooth={true}>
                  <Link>Ubicación</Link>
                </HashLink>
              </LinkListItem>
              <LinkListItem>
                <HashLink to="#contacto" smooth={true}>
                  <Link>Contacto</Link>
                </HashLink>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Contacto</ColumnHeading>
            <LinkList>
              <LinkListItem>(011) 4931-1578</LinkListItem>
              <LinkListItem>
                <Link href="mailto:institutoprivado9dejulio@gmail.com">institutoprivado9dejulio@gmail.com</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <CopyrightNotice>
          &copy; 2021 Julián Zamt. <br></br>React template Treact Inc.<br></br>
        </CopyrightNotice>
        <Divider />
        <CopyrightNotice>
          <a className="ley" href="http://www.sinigep.info/docs/adjuntos/Ley268120201001153427.pdf" target="_blank" rel="noopener noreferrer">
            Ley nº 2.681 - Normas para Institutos Educativos Privados
          </a>
        </CopyrightNotice>
      </Content>
    </Container>
  );
};
