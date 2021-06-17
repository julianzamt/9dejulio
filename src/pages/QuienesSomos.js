import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import TwoColWithButton from "components/features/TwoColWithButton.js";
import PorQueElegirnos from "components/features/PorQueElegirnos.js";
import proyectoEducativoImg from "../images/new/computacion_profe_500.jpg";
import quienesSomosImg from "../images/new/remera_500.jpg";
import nuestrosValoresImg from "../images/new/chicos_cool_500.jpg";

import EarIcon from "images/ear.svg";
import cooperativismoIcon from "images/iconmonstr-handshake-2.svg";
import GroupIcon from "images/family.svg";
import FaHandHoldingHeart from "images/Icon_hand_holding_heart.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <div id="quienes_somos">
      <TwoColWithButton
        subheading={<Subheading>Quiénes Somos</Subheading>}
        heading="Pioneros del cooperativismo"
        buttonRounded={false}
        imageSrc={quienesSomosImg}
        description="Somos una Cooperativa de Enseñanza fundada en 1935. Desde entonces hemos construído un espacio inclusivo, a través de un equipo directivo y docente de inquebrantable vocación y compromiso."
      />
      <TwoColWithButton
        subheading={<Subheading>Proyecto educativo</Subheading>}
        heading="Acompañamos el crecimiento"
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={proyectoEducativoImg}
        description="Trabajamos con grupos reducidos, priorizando los aspectos humanos y sociales de los adolescentes. Nuestro propósito: que descubran recursos y habilidades, amplíen sus horizontes, cooperen con sus pares."
        backgroundColor={{ backgroundColor: "#ecc94b", marginLeft: "-2em", marginRight: "-2em", paddingRight: "2em", paddingLeft: "2em" }}
      />
      <TwoColWithButton
        subheading={<Subheading>Nuestros Valores</Subheading>}
        heading="Cooperativismo, Autonomía, Inclusión."
        buttonRounded={false}
        textOnLeft={false}
        imageSrc={nuestrosValoresImg}
        description="Cooperativismo para hacer realidad los proyectos que nos unen. Autonomía para crecer. Inclusión para aprender a escucharnos."
      />
      <PorQueElegirnos
        subheading={<Subheading>Por Qué Elegirnos</Subheading>}
        heading="Experiencia y seguimiento individualizado."
        description="Disponemos de estrategias institucionales únicas para fortalecer las trayectorias escolares de todos nuestros alumnos."
        cards={[
          {
            imageSrc: GroupIcon,
            title: "Grupos Reducidos",
            description: "Garantizan la posibilidad de atender necesidades individuales, sin perder de vista la grupalidad.",
          },
          {
            imageSrc: EarIcon,
            title: "Orientación Escolar",
            description:
              "Nuestro Departamento de Orientación acompaña a los alumnos desde el primer día hasta su egreso, ofreciendo un espacio donde la palabra es protagonista.",
          },
          {
            imageSrc: cooperativismoIcon,
            title: "Formación Profunda en Cooperativismo",
            description: "La Responsabilidad, Solidaridad y Ayuda Mutua son valores permanentes en el desempeño de nuestra labor educativa.",
          },
          {
            imageSrc: FaHandHoldingHeart,
            title: "Educación Sexual Integral",
            description:
              "Conforme a la ley 26.150, prestamos especial atención a la salud sexual integral de nuestrxs estudiantes, considerándola el tejido emocional, intelectual y social que nos define como personas.",
          },
        ]}
      />
    </div>
  );
};
