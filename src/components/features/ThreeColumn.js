import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

const Container = tw.div`relative bg-primary-800 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-8 sm:py-20 md:py-16`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-400`;
const Heading = tw(SectionHeading)`w-full text-3xl sm:text-4xl`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`sm:mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs flex`}
`;

const CardImg = tw.img`fill-current`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-2 py-5 text-yellow-500`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-3 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-4 text-sm`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`my-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({ cards = null, heading = "", subheading = "", description = "" }) => {
  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <CardImg src={card.imageSrc} alt="icon" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
