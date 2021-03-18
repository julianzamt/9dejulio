import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg"
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-32 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Map = tw.iframe`rounded-xl shadow w-full h-64`

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
])

const DecoratorBlobPink = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute bottom-0 left-0 w-64 opacity-25 transform -translate-x-40 translate-y-56`}
`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const SubDescription = tw.p`mt-2 text-xs text-gray-500`

export default ({
  subheading = "Ubicación y Horario",
  heading = (
    <>
      Cerca de todo
    </>
  ),
  description = "Nos encontramos en La Rioja 660, barrio de Balvanera. Nuestra cursada se realiza por la mañana, entre las 7:45 y las 13:30hs.",
  imageDecoratorBlob = true,
  imageDecoratorBlobCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="ubicacion">
      <TwoColumn>
        <ImageColumn>
          <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4718913241236!2d-58.41011868511244!3d-34.61751346573446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccafb1d63523d%3A0xa718d663d3f2da8e!2sLa%20Rioja%20660%2C%20C1221%20ACD%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1616012114257!5m2!1sen!2sar" />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <SubDescription>*Las clases de educación física se realizan en el instituto entre las 14:00 y las 16:00hs.</SubDescription>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <DecoratorBlobPink />
    </Container>
  );
};
