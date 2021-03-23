import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import Valores from "components/features/Valores.js";
import quienesSomosImg2 from "../images/legislatura/legislatura.png"
import quienesSomosImg from "../images/legislatura/mire.png"

import EarIcon from "images/ear.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import GroupIcon from "images/family.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <div id="quienes_somos">
      <MainFeature1
        subheading={<Subheading>Quiénes Somos</Subheading>}
        heading="Educando desde 1935"
        buttonRounded={false}
        imageSrc={quienesSomosImg}
      />
      <MainFeature1
        subheading={<Subheading>Proyecto educativo</Subheading>}
        heading="Acompañamos el crecimiento"
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={quienesSomosImg2}
        description="Trabajamos con grupos reducidos, priorizando los aspectos humanos y sociales de los/as adolescentes. Nuestro objetivo: que descubran y fortalezcan recursos y habilidades, ampliando sus horizontes, cooperando con sus pares."
      />
      <Valores
        subheading={<Subheading>Nuestros valores</Subheading>}
        heading="Cooperativismo, autonomía e inclusión."
        description="Buscamos brindar a nuestros estudiantes la posibilidad de posicionarse como sujetos autónomos y solidarios. Construir juntos las herramientas para llevar a cabo sus proyectos, tanto a nivel profesional como personal."
        cards={[
          {
            imageSrc: GroupIcon,
            title: "Grupos Reducidos",
            description: "Que garanticen la posibilidad de atender necesidades individuales, sin perder de vista la grupalidad."
          },
          {
            imageSrc: EarIcon,
            title: "Orientación escolar",
            description: "En el Departamento de Orientación la palabra es protagonista, acompañando a los alumnos durante toda su trayectoria educativa."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "ESI",
            description: "Conforme a la ley 26.150, promovemos la salud sexual integral, entendida como el tejido de aspectos físicos, emocionales, intelectuales y sociales que nos definen como personas."
          },
        ]}
        linkText=""
      />
    </div>
  );
};
