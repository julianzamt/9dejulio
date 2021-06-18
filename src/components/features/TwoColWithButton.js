import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first text-justify` : tw`md:ml-12 lg:ml-16 md:order-last text-justify`,
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded-DEFAULT`,
  props.imageBorder && tw`border-0`,
  props.imageShadow && tw`shadow-DEFAULT`,
]);

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute mr-5 right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-yellow-700 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-900 `;

export default ({
  subheading,
  heading,
  description,
  imageSrc,
  imageSrcSet,
  backgroundColor,
  imageRounded = true,
  imageBorder = false,
  imageShadow = true,
  imageCss,
  imageDecoratorBlob = true,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <div className="twocolwithbuttons__container">
      <TwoColumn style={backgroundColor}>
        <ImageColumn>
          <Image css={imageCss} src={imageSrc} srcSet={imageSrcSet} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </div>
  );
};
