import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { ReactComponent as SvgDecoratorBlob6 } from "images/svg-decorator-blob-6.svg";


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-8`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-4 border rounded-2xl bg-gray-100`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const DecoratorBlob2 = styled(SvgDecoratorBlob6)`
${tw`pointer-events-none absolute left-0 top-0 w-64 opacity-25 transform -translate-x-32 -translate-y-48`}
`


export default ({ cards = null, heading = "Plan de estudios", subheading = "Bachiller en Economía y Administración", description = "El plan de estudios se divide en dos ciclos: Ciclo Básico (1ro y 2do año) y Ciclo Orientado (3ro, 4to y 5to)" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  cards = [
    {
      title: "Ciclo Básico",
      description: "La Formación General común a todos los bachilleratos."
    },
    {
      title: "Ciclo Orientado",
      description: "A las materias de la Formación General, sumamos la Formación Orientada: Economía, Organizaciones, Sistemas administrativos, Derecho, Sistemas de información contable y Contabilidad patrimonial y de gestión."
    },
    {
      title: "EDI",
      description: "Durante los cinco años de carrera, nuestros alumnos se forman en Cooperativismo, nuestro Espacio de Definición Institucional. Esta materia brinda la posibilidad de vivir experiencias prácticas de trabajo en equipo, a la par del análisis de casos concretos."
    },

  ]

  return (
    <Container id="plan_de_estudios">
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              {/* <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span> */}
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
      <DecoratorBlob2 />
    </Container>
  );
};
