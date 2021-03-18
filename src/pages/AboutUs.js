import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import Valores from "components/features/Valores.js";
import innerHero from "../images/Hero_inside_9dejulio.jpg"

import SupportIconImage from "images/support-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <div>
      <MainFeature1
        subheading={<Subheading>Instituto Privado 9 de Julio</Subheading>}
        heading="Educando desde 1935"
        buttonRounded={false}
        imageSrc={innerHero}
      />
      <MainFeature1
        subheading={<Subheading>Proyecto educativo</Subheading>}
        heading="Acompañamos el crecimiento"
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={innerHero}
        description="Para llevar adelante nuestro Proyecto Educativo, trabajamos con grupos reducidos, priorizando los aspectos humanos y sociales de los/as adolescentes para que puedan descubrir y fortalecer recursos y habilidades, ampliando sus horizontes y cooperando con sus pares."
      />
      <Valores
        subheading={<Subheading>Nuestros valores</Subheading>}
        heading="Cooperativismo, autonomía e inclusión."
        description="Buscamos brindar a nuestros estudiantes la posibilidad de posicionarse como sujetos autónomos y solidarios, para llevar a cabo sus proyectos tanto a nivel profesional como personal."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Grupos Reducidos",
            description: "Trabajamos con grupos reducidos, priorizando los aspectos humanos y sociales de los/as adolescentes"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Orientación escolar",
            description: "En el departamento de orientación la palabra es protagonista, acompañando a los alumnos durante su trayectoria educativa."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "ESI",
            description: "Conforme a la ley 26.150, promovemos la salud sexual, entendida como la integración de aspectos físicos, emocionales, intelectuales y sociales."
          },
        ]}
        linkText=""
      />
    </div>
  );
};
