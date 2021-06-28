import ThreeColumn from "components/features/ThreeColumn";
import React from "react";
import tw from "twin.macro";
import EarIcon from "images/ear.svg";
import cooperativismoIcon from "images/iconmonstr-handshake-2.svg";
import GroupIcon from "images/family.svg";
import FaHandHoldingHeart from "images/Icon_hand_holding_heart.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <ThreeColumn
      subheading={<Subheading>Por Qué Elegirnos</Subheading>}
      heading="Experiencia y acompañamiento individualizado."
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
  );
};
