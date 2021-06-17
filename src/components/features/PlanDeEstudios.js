import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import planDeEstudiosCicloBasicoImg from "../../images/new/cicloBasico_500.jpg";
import planDeEstudiosCicloOrientadoImg from "../../images/new/ciclo_orientado_500.jpg";
import planDeEstudiosEDIImg from "../../images/new/edi_500.jpg";

const Container = tw.div`relative -mx-8 px-8 py-10 sm:py-20 bg-yellow-500 flex flex-col items-center`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center w-full lg:flex-row lg:items-start`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full text-3xl sm:text-4xl`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`lg:w-1/3 max-w-sm m-8`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center w-full px-2 pb-2 border rounded-2xl bg-gray-100`}
  .imageContainer {
    ${tw`border rounded-full flex-shrink-0`}
    img {
      ${tw`w-4 h-4`}
    }
  }

  .textContainer {
    ${tw`mt-2`}
  }

  .img {
    ${tw`border rounded-lg mb-4`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-light text-sm leading-loose`}
  }
`;

export default ({
  cards = null,
  heading = "Bachiller en Economía y Administración",
  subheading = "Plan de Estudios",
  description = "El plan de estudios se divide en dos ciclos: Básico y Orientado",
}) => {
  cards = [
    {
      imageSrc: planDeEstudiosCicloBasicoImg,
      title: "Ciclo Básico",
      description: "Comprende 1er y 2do año. Formación General común a todos los bachilleratos, más el EDI.",
    },
    {
      imageSrc: planDeEstudiosCicloOrientadoImg,
      title: "Ciclo Orientado",
      description:
        "Al plan común, sumamos la Formación Orientada: Economía, Organizaciones, Sistemas administrativos, Derecho, Sistemas de información contable y Contabilidad patrimonial y de gestión.",
    },
    {
      imageSrc: planDeEstudiosEDIImg,
      title: "Espacio de Definición Institucional (EDI)",
      description:
        "El EDI (Cooperativismo) es la materia que acompaña a los estudiantes durante toda su formación. Brinda la posibilidad de vivir experiencias prácticas y de realizar análisis de casos concretos.",
    },
  ];

  return (
    <Container id="plan_de_estudios">
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading>{heading}</Heading>
      {description && <Description>{description}</Description>}
      <VerticalSpacer />
      <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <img className="img" src={card.imageSrc} alt="clase"></img>
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
